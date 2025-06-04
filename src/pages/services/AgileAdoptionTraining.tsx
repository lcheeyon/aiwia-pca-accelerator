
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AgileAdoptionTraining = () => {
  const frameworks = [
    {
      name: "Scrum Framework",
      description: "Master the Scrum methodology for enhanced project delivery",
      features: ["Sprint Planning", "Daily Standups", "Sprint Reviews", "Retrospectives"]
    },
    {
      name: "Kanban System", 
      description: "Implement visual workflow management for continuous improvement",
      features: ["Work in Progress Limits", "Visual Boards", "Flow Metrics", "Continuous Delivery"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agile Adoption Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive training on Scrum and Kanban frameworks for enhanced team productivity and project delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your Team's Productivity</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Learn proven agile methodologies to improve collaboration and delivery speed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{framework.name}</CardTitle>
                  <CardDescription>{framework.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {framework.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Agile?</h2>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Start Training</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgileAdoptionTraining;
