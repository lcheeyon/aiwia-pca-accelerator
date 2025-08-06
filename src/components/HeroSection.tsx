
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative bg-gradient-to-br from-aiwia-blue via-aiwia-blue-dark to-aiwia-black min-h-[90vh] flex items-center"
      role="banner"
      aria-label="AIWIA Hero Section"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Accelerate Responsible 
              <span className="text-aiwia-green"> AI Adoption</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              With embedded data Privacy, Cybersecurity and Agile (PCA) process management framework
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-aiwia-green hover:bg-aiwia-green-dark text-white">
                <Link to="/services">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-aiwia-blue hover:bg-gray-100">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="AI Technology and Innovation - Digital transformation and responsible AI adoption"
              className="rounded-lg shadow-2xl animate-fade-in"
              loading="eager"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
