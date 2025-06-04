
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ISO42001 = () => {
  const components = [
    "AI Governance Framework",
    "AI Risk Assessment Protocols",
    "Ethical AI Guidelines",
    "AI System Documentation",
    "Performance Monitoring Systems",
    "Data Management for AI",
    "Stakeholder Engagement"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 42001 AI Management</h1>
            <p className="text-xl max-w-3xl mx-auto">
              AI Management System standards and certification for responsible AI governance and deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">AI Management System Certification</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Lead the way in responsible AI deployment with ISO 42001 certification
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Key Components</CardTitle>
              <CardDescription>Essential elements of an AI Management System</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {components.map((component, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                    <span>{component}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Achieve AI Excellence</h2>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Start Certification</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO42001;
