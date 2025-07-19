
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

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

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-aiwia-black mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-aiwia-gray-dark">
              Meet our founding team
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Chee Yong Lee */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <img 
                      src="/lovable-uploads/a9c1dcc6-0cad-44bc-b3bd-0082884605ad.png"
                      alt="Chee Yong Lee"
                      className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-aiwia-black mb-2">Chee Yong Lee</h3>
                    <p className="text-aiwia-green font-semibold mb-4">CEO & Co-Founder</p>
                    
                    <div className="space-y-4 text-aiwia-gray-dark">
                      <p>
                        Chee Yong is a seasoned technology leader with extensive experience in artificial intelligence, 
                        cybersecurity, and digital transformation. As the CEO and Co-Founder of AIWIA, 
                        he brings deep expertise in responsible AI adoption and implementation.
                      </p>
                      
                      <p>
                        With a strong background in data privacy, cybersecurity frameworks, and agile methodologies, 
                        Chee Yong has successfully guided numerous organizations through their digital transformation journeys. 
                        His expertise spans across AI technology integration, compliance auditing, and strategic consulting.
                      </p>
                      
                      <p>
                        Learn more about Chee Yong's professional background and expertise at{' '}
                        <a 
                          href="https://cheeyonglee.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-aiwia-blue hover:text-aiwia-blue-dark underline"
                        >
                          cheeyonglee.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Boon Hong Yeo */}
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <img 
                      src="/lovable-uploads/7460d3c8-007e-4581-92c9-1d34315b72fa.png"
                      alt="Boon Hong Yeo"
                      className="w-full h-64 object-cover object-center rounded-lg shadow-md"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-aiwia-black mb-2">Boon Hong Yeo</h3>
                    <p className="text-aiwia-green font-semibold mb-4">CTO & Co-Founder</p>
                    
                    <div className="space-y-4 text-aiwia-gray-dark">
                      <p>
                        Boon Hong is a certified Project Management Professional (PMP) with extensive experience 
                        in technology leadership and strategic project management. As the CTO and Co-Founder of AIWIA, 
                        he oversees the technical architecture and implementation of AI solutions.
                      </p>
                      
                      <p>
                        With a proven track record in managing complex technology projects and leading cross-functional teams, 
                        Boon Hong brings valuable expertise in project governance, risk management, and stakeholder coordination. 
                        His technical acumen combined with strong project management skills ensures successful delivery of 
                        AI transformation initiatives.
                      </p>
                      
                      <p>
                        Boon Hong's leadership in technology implementation and his commitment to best practices in project 
                        management make him instrumental in driving AIWIA's mission of responsible AI adoption.
                      </p>
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

