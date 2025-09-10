
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import aiwiLogo from '/lovable-uploads/c8248622-4f15-4511-909f-8fc3a18b261d.png';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-green to-aiwia-green-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AIWIA</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Leading the future of responsible AI adoption through expert consultation and comprehensive frameworks
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">Our Mission</h2>
              <p className="text-lg text-aiwia-gray-dark mb-6 leading-relaxed">
                AIWIA is dedicated to accelerating responsible Artificial Intelligence adoption 
                with embedded data Privacy, Cybersecurity and Agile (PCA) process management frameworks. 
                We help organizations navigate the complex landscape of AI transformation while maintaining 
                the highest standards of security, privacy, and operational excellence.
              </p>
              <p className="text-lg text-aiwia-gray-dark leading-relaxed">
                Our comprehensive approach ensures that AI implementations are not only effective but also 
                ethical, secure, and aligned with industry best practices and regulatory requirements.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional consultation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AIWIA Logo Section */}
      <section className="py-20 bg-gradient-to-br from-aiwia-blue/5 to-aiwia-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aiwia-black mb-4">
              Our Logo: A Symbol of Partnership
            </h2>
            <p className="text-xl text-aiwia-gray-dark max-w-3xl mx-auto">
              The AIWIA logo represents the core philosophy of our approach to responsible AI adoption
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-xl">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-center">
                    <img 
                      src={aiwiLogo}
                      alt="AIWIA Logo - Partnership Symbol"
                      className="mx-auto max-w-full h-auto"
                      style={{ maxHeight: '300px' }}
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-aiwia-black mb-4">
                        Symbolizing Partnership & Collaboration
                      </h3>
                      <p className="text-lg text-aiwia-gray-dark leading-relaxed mb-6">
                        The AIWIA logo's distinctive shape represents the fundamental partnerships that drive 
                        successful AI transformation. The harmonious blend of cyan and blue colors symbolizes 
                        the seamless collaboration and trust that forms the foundation of responsible AI adoption.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-aiwia-black mb-1">Human-AI Partnership</h4>
                          <p className="text-aiwia-gray-dark">
                            The cyan element represents human intelligence, creativity, and intuition, 
                            working in harmonious collaboration with artificial intelligence to achieve optimal outcomes.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-aiwia-black mb-1">Employer-Employee Unity</h4>
                          <p className="text-aiwia-gray-dark">
                            The blue element symbolizes the structured foundation and trust between employers 
                            and employees when adopting responsible AI, ensuring transparency and mutual benefit.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-aiwia-black mb-1">Harmonious Partnership Colors</h4>
                          <p className="text-aiwia-gray-dark">
                            The seamless blend of cyan and blue creates a visual representation of balanced partnership, 
                            where different strengths unite to form something greater than the sum of their parts.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-aiwia-gray-light">
                      <p className="text-sm text-aiwia-gray-dark italic">
                        "True AI transformation happens when partnerships flourish – between humans and technology, 
                        and between all stakeholders in the organization."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aiwia-black mb-4">
              Company Information
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-aiwia-black mb-4">Registered Address</h3>
                    <div className="text-aiwia-gray-dark space-y-1">
                      <p>111 North Bridge Road, #20-05</p>
                      <p>Peninsular Plaza</p>
                      <p>Singapore 179098</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-aiwia-black mb-4">Business Registration</h3>
                    <div className="text-aiwia-gray-dark">
                      <p><strong>UEN:</strong> 202530684N</p>
                      <p><strong>Entity Type:</strong> Private Limited Company</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Company Values */}
      <section className="py-20 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Why Choose AIWIA</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-aiwia-black mb-2">Expert Guidance</h3>
              <p className="text-aiwia-gray-dark">
                Deep expertise in AI technologies, cybersecurity, and compliance frameworks
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-aiwia-black mb-2">Responsible Approach</h3>
              <p className="text-aiwia-gray-dark">
                Embedded privacy, cybersecurity, and agile frameworks in every solution
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-black rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-aiwia-black mb-2">Accelerated Results</h3>
              <p className="text-aiwia-gray-dark">
                Proven methodologies for rapid and sustainable digital transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

