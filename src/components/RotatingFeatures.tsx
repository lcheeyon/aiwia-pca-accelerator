import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Award, Users, BookOpen, Target, ExternalLink, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Import corrected stock images with proper spellings
import isoComplianceCorrectedImage from '@/assets/iso-compliance.jpg';
import responsibleAiBibleCorrectedImage from '@/assets/responsible-ai-bible.jpg';
import udemyAiCourseCorrectedImage from '@/assets/udemy-ai-course.jpg';
import aiTransformationImage from '@/assets/ai-transformation.jpg';
import trainingProgramsImage from '@/assets/training-programs.jpg';
import enterpriseSolutionsImage from '@/assets/enterprise-solutions.jpg';

interface FeatureItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  bgColor: string;
  image: string;
  isHighlighted?: boolean;
  isExternal?: boolean;
  badge?: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    icon: BookOpen,
    title: "📚 Responsible AI Bible",
    description: "The comprehensive guide to ethical AI implementation - Available on Amazon with expert insights and practical frameworks",
    cta: "Get on Amazon",
    ctaLink: "https://www.amazon.com/dp/B0FKGH3TYQ/ref=sr_1_1?crid=3ROCZEFAGS60V&dib=eyJ2IjoiMSJ9.c8NdxUzbjOnMVXhTjOwZc6T_4DpIuET7DgMZIBIDo7vGjHj071QN20LucGBJIEps.7OozkxF69M-lzVCBsl5-T5raqO2WtxBjBKT-rd7ncVA&dib_tag=se&keywords=responsible+ai+bible&qid=1753863678&s=digital-text&sprefix=responsible+ai+bib%2Cdigital-text%2C390&sr=1-1",
    bgColor: "bg-gradient-to-br from-amber-500/20 to-yellow-600/10",
    image: responsibleAiBibleCorrectedImage,
    isHighlighted: true,
    isExternal: true,
    badge: "FEATURED"
  },
  {
    id: 2,
    icon: Award,
    title: "🎓 AI Governance Workflow Course",
    description: "Master AI governance and workflow automation with our comprehensive Udemy course - Learn from industry experts",
    cta: "Enroll Now",
    ctaLink: "https://www.udemy.com/course/ai-governance-workflow-automation/?kw=Ai+governance+wo&src=sac",
    bgColor: "bg-gradient-to-br from-purple-500/20 to-indigo-600/10",
    image: udemyAiCourseCorrectedImage,
    isHighlighted: true,
    isExternal: true,
    badge: "HOT"
  },
  {
    id: 3,
    icon: Shield,
    title: "ISO 42001 & 27001 Certified",
    description: "Leading AI governance and cybersecurity compliance with internationally recognized standards",
    cta: "Learn More",
    ctaLink: "/services/iso42001",
    bgColor: "bg-gradient-to-br from-blue-500/15 to-blue-600/10",
    image: isoComplianceCorrectedImage
  },
  {
    id: 4,
    icon: Zap,
    title: "Accelerated AI Adoption",
    description: "Transform your business with responsible AI implementation strategies tailored to your needs",
    cta: "Get Started",
    ctaLink: "/services/ai-adoption",
    bgColor: "bg-gradient-to-br from-purple-500/15 to-purple-600/10",
    image: aiTransformationImage
  },
  {
    id: 5,
    icon: Users,
    title: "Expert Training Programs",
    description: "Professional certifications in Agile, Scrum, AI Technology, and Cybersecurity Essentials",
    cta: "View Courses",
    ctaLink: "/services",
    bgColor: "bg-gradient-to-br from-green-500/15 to-green-600/10",
    image: trainingProgramsImage
  },
  {
    id: 6,
    icon: Target,
    title: "Enterprise Solutions",
    description: "Comprehensive digital transformation with embedded Privacy, Cybersecurity & Agile frameworks",
    cta: "Contact Us",
    ctaLink: "/contact",
    bgColor: "bg-gradient-to-br from-orange-500/15 to-orange-600/10",
    image: enterpriseSolutionsImage
  }
];

const RotatingFeatures = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % features.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const currentFeature = features[currentIndex];
  const IconComponent = currentFeature.icon;

  return (
    <section className="relative py-6 bg-gradient-to-r from-background via-muted/20 to-background border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Feature Display */}
          <div className={cn(
            "rounded-2xl overflow-hidden shadow-lg border border-border/50 transition-all duration-500 ease-in-out transform hover:scale-[1.02]",
            currentFeature.bgColor,
            currentFeature.isHighlighted && "ring-2 ring-primary/50 shadow-xl"
          )}>
            <div className="flex flex-col lg:flex-row items-stretch min-h-[200px]">
              {/* Image Section */}
              <div className="lg:w-2/5 relative overflow-hidden">
                <img 
                  src={currentFeature.image} 
                  alt={currentFeature.title}
                  className="w-full h-48 lg:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {currentFeature.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={cn(
                      "px-3 py-1 text-xs font-bold rounded-full text-white shadow-md",
                      currentFeature.badge === "FEATURED" ? "bg-amber-500" : "bg-red-500"
                    )}>
                      <Star className="w-3 h-3 inline mr-1" />
                      {currentFeature.badge}
                    </span>
                  </div>
                )}
                {currentFeature.isHighlighted && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                )}
              </div>
              
              {/* Content Section */}
              <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shadow-md",
                      currentFeature.isHighlighted 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-primary/10 text-primary"
                    )}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-xl lg:text-2xl font-bold mb-2 leading-tight",
                      currentFeature.isHighlighted 
                        ? "text-foreground" 
                        : "text-foreground"
                    )}>
                      {currentFeature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                      {currentFeature.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-4">
                  <Button 
                    asChild
                    size="lg"
                    className={cn(
                      "px-6 py-3 font-semibold transition-all duration-300",
                      currentFeature.isHighlighted
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
                        : "bg-primary/90 hover:bg-primary text-primary-foreground"
                    )}
                  >
                    <a 
                      href={currentFeature.ctaLink}
                      target={currentFeature.isExternal ? "_blank" : "_self"}
                      rel={currentFeature.isExternal ? "noopener noreferrer" : ""}
                      className="flex items-center gap-2"
                    >
                      {currentFeature.cta}
                      {currentFeature.isExternal && <ExternalLink className="w-4 h-4" />}
                    </a>
                  </Button>
                  {currentFeature.isHighlighted && (
                    <div className="text-xs text-muted-foreground hidden sm:block">
                      ⭐ Limited Time Offer
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            {/* Dots Indicator with Feature Preview */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {features.map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={cn(
                      "relative group transition-all duration-300",
                      index === currentIndex 
                        ? "w-8 h-3 bg-primary rounded-full" 
                        : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/60 rounded-full"
                    )}
                    aria-label={`Go to ${feature.title}`}
                  >
                    {feature.isHighlighted && index !== currentIndex && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    )}
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md border">
                      {feature.title.replace(/📚|🎓/, '').trim()}
                    </div>
                  </button>
                ))}
              </div>
              
              {/* Counter */}
              <div className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                {currentIndex + 1} / {features.length}
              </div>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="absolute top-2 right-2">
            <div className={cn(
              "w-2 h-2 rounded-full transition-colors duration-300",
              isAutoPlaying ? "bg-green-500" : "bg-muted-foreground/30"
            )} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RotatingFeatures;