
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesOverview from '@/components/ServicesOverview';
import BookPromotion from '@/components/BookPromotion';
import CompanyValues from '@/components/CompanyValues';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AIWIA - Accelerate Responsible AI Adoption",
    "description": "Leading AI consultancy providing digital transformation training, responsible AI adoption, and compliance audits with embedded Privacy, Cybersecurity and Agile frameworks.",
    "url": "https://aiwia.app",
    "mainEntity": {
      "@type": "Organization",
      "name": "AIWIA",
      "description": "AI consultancy specializing in responsible AI adoption and digital transformation"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aiwia.app"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AIWIA - Accelerate Responsible AI Adoption | Digital Transformation Consultancy"
        description="Leading AI consultancy providing digital transformation training, responsible AI adoption, and compliance audits with embedded Privacy, Cybersecurity and Agile (PCA) frameworks. ISO 42001, ISO 27001 certified."
        keywords="AI adoption, digital transformation, AI compliance, ISO 42001, ISO 27001, cybersecurity training, data protection, agile training, responsible AI, AI governance, Singapore AI consultancy"
        canonicalUrl="https://aiwia.app/"
        structuredData={structuredData}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <BookPromotion />
        <CompanyValues />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
