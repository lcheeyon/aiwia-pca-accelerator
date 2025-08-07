import { useState, useEffect } from 'react';
import { ImageOptimizationProps, optimizeImageUrl, generateSrcSet, generateSizes, preloadImage } from '@/utils/imageOptimization';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  quality = 80,
  format = 'webp',
  className = '',
  loading = 'lazy',
  sizes,
  priority = false,
  ...props
}: ImageOptimizationProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const optimizedSrc = optimizeImageUrl(src, { width, height, quality, format });
    setImageSrc(optimizedSrc);

    if (priority) {
      preloadImage(optimizedSrc);
    }
  }, [src, width, height, quality, format, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original src without optimization
    setImageSrc(src);
  };

  if (hasError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onLoad={handleLoad}
        {...props}
      />
    );
  }

  const srcSet = generateSrcSet(imageSrc);
  const imageSizes = sizes || generateSizes();

  return (
    <img
      src={imageSrc}
      srcSet={srcSet}
      sizes={imageSizes}
      alt={alt}
      width={width}
      height={height}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default OptimizedImage;