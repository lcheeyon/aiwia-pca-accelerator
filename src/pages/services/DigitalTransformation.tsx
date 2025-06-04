
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DigitalTransformation = () => {
  const trainingPrograms = [
    {
      title: "AI Technology Training",
      description: "Comprehensive training on productive usage of AI technologies for business optimization",
      duration: "2-3 days",
      format: "Workshop & Hands-on",
      topics: [
        "Introduction to AI and Machine Learning",
        "Practical AI tools for business",
        "AI implementation strategies",
        "ROI measurement and evaluation"
      ]
    },
    {
      title: "Privacy & Security Training",
      description: "Essential training on data privacy protection and cybersecurity best practices",
      duration: "1-2 days",
      format: "Interactive Sessions",
      topics: [
        "Data Protection Principles",
        "GDPR and PDPA compliance",
        "Cybersecurity fundamentals",
        "Risk assessment and mitigation"
      ]
    },
    {
      title: "Agile Adoption Training",
      description: "Comprehensive training on Scrum and Kanban frameworks for enhanced team productivity",
      duration: "2-3 days",
      format: "Workshop & Simulation",
      topics: [
        "Agile principles and methodologies",
        "Scrum framework implementation",
        "Kanban board management",
        "Team collaboration techniques"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Transformation Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive corporate training programs designed to empower your team with essential 
              digital transformation skills including AI technologies, cybersecurity, and agile methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">
                Accelerate Your Digital Journey
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our digital transformation training programs are designed to equip your organization 
                with the knowledge and skills needed to thrive in the digital age. We focus on 
                practical, hands-on learning that delivers immediate value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Expert-led training sessions</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Customized content for your industry</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Hands-on practical exercises</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Post-training support and resources</span>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Training Benefits</h3>
              <ul className="space-y-3">
                <li className="text-aiwia-gray-dark">• Enhanced digital literacy across your organization</li>
                <li className="text-aiwia-gray-dark">• Improved operational efficiency and productivity</li>
                <li className="text-aiwia-gray-dark">• Better risk management and compliance</li>
                <li className="text-aiwia-gray-dark">• Increased innovation and competitive advantage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our Training Programs</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Choose from our comprehensive range of digital transformation training modules
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-aiwia-black">{program.title}</CardTitle>
                  <CardDescription className="text-aiwia-gray-dark">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-aiwia-gray-dark">Duration:</span>
                      <span className="text-sm text-aiwia-black">{program.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-aiwia-gray-dark">Format:</span>
                      <span className="text-sm text-aiwia-black">{program.format}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-aiwia-gray-dark mb-2">Key Topics:</h4>
                      <ul className="space-y-1">
                        {program.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                            <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-aiwia-black mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Contact us today to discuss your training needs and create a customized program for your team.
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

export default DigitalTransformation;
