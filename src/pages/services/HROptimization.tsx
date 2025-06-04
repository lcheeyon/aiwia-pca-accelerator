
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HROptimization = () => {
  const services = [
    {
      title: "Resume Screening",
      description: "AI-powered resume analysis and candidate matching"
    },
    {
      title: "Recruitment Automation",
      description: "Streamlined hiring processes with intelligent workflows"
    },
    {
      title: "Performance Analytics",
      description: "Data-driven insights into employee performance and engagement"
    },
    {
      title: "Employee Engagement",
      description: "Tools to monitor and improve workplace satisfaction"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HR Process Optimization</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Streamlined recruitment and HR management systems powered by AI to enhance your human resources operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your HR Operations</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Leverage AI to improve hiring efficiency and employee management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Optimize Your HR Today</h2>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Learn More</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HROptimization;
