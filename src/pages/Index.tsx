
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import BookPromotion from '@/components/BookPromotion';
import CompanyValues from '@/components/CompanyValues';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesOverview />
      <BookPromotion />
      <CompanyValues />
      <Footer />
    </div>
  );
};

export default Index;
