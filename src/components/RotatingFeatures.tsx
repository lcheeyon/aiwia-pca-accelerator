import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Shield, Zap, Award, Users, BookOpen, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeatureItem {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  bgColor: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    icon: Shield,
    title: "ISO 42001 & 27001 Certified",
    description: "Leading AI governance and cybersecurity compliance with internationally recognized standards",
    cta: "Learn More",
    ctaLink: "/services/iso42001",
    bgColor: "bg-gradient-to-br from-blue-500/10 to-blue-600/5"
  },
  {
    id: 2,
    icon: Zap,
    title: "Accelerated AI Adoption",
    description: "Transform your business with responsible AI implementation strategies tailored to your needs",
    cta: "Get Started",
    ctaLink: "/services/ai-adoption",
    bgColor: "bg-gradient-to-br from-purple-500/10 to-purple-600/5"
  },
  {
    id: 3,
    icon: Award,
    title: "Expert Training Programs",
    description: "Professional certifications in Agile, Scrum, AI Technology, and Cybersecurity Essentials",
    cta: "View Courses",
    ctaLink: "/services",
    bgColor: "bg-gradient-to-br from-green-500/10 to-green-600/5"
  },
  {
    id: 4,
    icon: Users,
    title: "Enterprise Solutions",
    description: "Comprehensive digital transformation with embedded Privacy, Cybersecurity & Agile frameworks",
    cta: "Contact Us",
    ctaLink: "/contact",
    bgColor: "bg-gradient-to-br from-orange-500/10 to-orange-600/5"
  },
  {
    id: 5,
    icon: BookOpen,
    title: "Free AI Governance Guide",
    description: "Download our comprehensive guide to responsible AI implementation and governance",
    cta: "Download Now",
    ctaLink: "#book-promotion",
    bgColor: "bg-gradient-to-br from-teal-500/10 to-teal-600/5"
  },
  {
    id: 6,
    icon: Target,
    title: "Compliance Audits",
    description: "Ensure your AI systems meet regulatory requirements with our expert compliance services",
    cta: "Schedule Audit",
    ctaLink: "/services/compliance",
    bgColor: "bg-gradient-to-br from-red-500/10 to-red-600/5"
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
    <section className="relative py-4 bg-gradient-to-r from-background via-muted/20 to-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Main Feature Display */}
          <div className={cn(
            "rounded-2xl p-6 md:p-8 transition-all duration-500 ease-in-out",
            currentFeature.bgColor
          )}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                    {currentFeature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {currentFeature.description}
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2"
                >
                  <a href={currentFeature.ctaLink}>
                    {currentFeature.cta}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPrevious}
              className="text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={goToNext}
              className="text-muted-foreground hover:text-foreground"
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