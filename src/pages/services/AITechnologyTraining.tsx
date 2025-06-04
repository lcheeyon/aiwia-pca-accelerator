
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AITechnologyTraining = () => {
  const trainingModules = [
    {
      title: "AI Fundamentals",
      duration: "4 hours",
      topics: ["Machine Learning Basics", "AI vs Traditional Programming", "Data Requirements", "Common AI Applications"]
    },
    {
      title: "Practical AI Tools",
      duration: "6 hours", 
      topics: ["ChatGPT for Business", "AI Writing Tools", "Image Generation", "Automation Platforms"]
    },
    {
      title: "Implementation Strategy",
      duration: "4 hours",
      topics: ["ROI Assessment", "Change Management", "Risk Mitigation", "Success Metrics"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Technology Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive training on productive usage of AI technologies for business optimization and workflow enhancement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">Master AI for Business Success</h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our AI Technology Training program equips your team with practical skills to leverage 
                artificial intelligence tools effectively. From understanding AI fundamentals to 
                implementing AI solutions in daily workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span>Hands-on learning with real AI tools</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span>Industry-specific use cases</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span>ROI measurement techniques</span>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Training Outcomes</h3>
              <ul className="space-y-2">
                <li>• Understand AI capabilities and limitations</li>
                <li>• Identify AI opportunities in your business</li>
                <li>• Use AI tools for productivity gains</li>
                <li>• Develop AI implementation strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Training Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                  <CardDescription>Duration: {module.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2"></div>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Team's AI Skills?</h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Contact us to schedule your AI Technology Training program.
          </p>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITechnologyTraining;
