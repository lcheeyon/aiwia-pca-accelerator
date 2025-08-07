export interface ImageOptimizationProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
}

export const generateSrcSet = (src: string, widths: number[] = [320, 640, 768, 1024, 1280]) => {
  return widths.map(width => `${src}?w=${width} ${width}w`).join(', ');
};

export const generateSizes = (breakpoints: { [key: string]: string } = {}) => {
  const defaultBreakpoints = {
    '(max-width: 640px)': '100vw',
    '(max-width: 1024px)': '50vw',
    ...breakpoints
  };
  
  return Object.entries(defaultBreakpoints)
    .map(([media, size]) => `${media} ${size}`)
    .join(', ');
};

export const optimizeImageUrl = (
  src: string, 
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: string;
  } = {}
) => {
  if (src.startsWith('http') && !src.includes('unsplash.com')) {
    return src; // External URLs that don't support optimization
  }
  
  const params = new URLSearchParams();
  
  if (options.width) params.set('w', options.width.toString());
  if (options.height) params.set('h', options.height.toString());
  if (options.quality) params.set('q', options.quality.toString());
  if (options.format) params.set('fm', options.format);
  
  const separator = src.includes('?') ? '&' : '?';
  return `${src}${separator}${params.toString()}`;
};

export const getImageDimensions = async (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  document.head.appendChild(link);
};