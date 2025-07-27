
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Compliance = () => {
  const complianceServices = [
    {
      title: "Data Protection Advisory",
      description: "Comprehensive consultancy for establishing robust data protection policies and PDPA compliance frameworks",
      icon: "🏆",
      scope: [
        "Data protection policy development",
        "PDPA compliance framework design",
        "Privacy governance structure setup",
        "Data handling procedures implementation",
        "Staff training program development"
      ],
      benefits: [
        "Comprehensive policy framework",
        "Reduced compliance risks",
        "Enhanced data governance",
        "Improved organizational readiness"
      ],
      link: "/services/data-protection-trustmark"
    },
    {
      title: "ISO 27001 ISMS Advisory",
      description: "Expert guidance for implementing comprehensive Information Security Management System policies and controls",
      icon: "🔒",
      scope: [
        "ISMS policy framework development",
        "Security risk management procedures",
        "Information security controls design",
        "Security governance structure setup",
        "Implementation roadmap planning"
      ],
      benefits: [
        "Robust security framework",
        "Systematic risk management",
        "Enhanced security posture",
        "Organizational security culture"
      ],
      link: "/services/iso-27001"
    },
    {
      title: "ISO 42001 AI Management Advisory",
      description: "Strategic consultancy for establishing comprehensive AI governance policies and responsible AI management frameworks",
      icon: "🤖",
      scope: [
        "AI governance policy development",
        "AI risk management framework design",
        "Ethical AI guidelines establishment",
        "AI lifecycle management procedures",
        "AI oversight and monitoring systems"
      ],
      benefits: [
        "Comprehensive AI governance",
        "Ethical AI implementation",
        "Risk-aware AI deployment",
        "Stakeholder confidence building"
      ],
      link: "/services/iso-42001"
    }
  ];

  const auditProcess = [
    {
      step: "1",
      title: "Current State Assessment",
      description: "Comprehensive evaluation of existing policies, procedures, and governance structures"
    },
    {
      step: "2", 
      title: "Advisory & Planning",
      description: "Strategic consultation and development of tailored implementation roadmap and frameworks"
    },
    {
      step: "3",
      title: "Policy Development",
      description: "Collaborative development of comprehensive policies, procedures, and governance documentation"
    },
    {
      step: "4",
      title: "Implementation Support",
      description: "Ongoing guidance and support during implementation with training and change management"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Advisory & Audit Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert advisory and consultancy services to help your organization implement 
              comprehensive data protection, information security, and AI management policies and practices.
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
                Expert Advisory & Consultancy Services
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our expert advisory services provide comprehensive consultancy to help organizations 
                establish robust data protection, information security, and AI management frameworks. 
                We guide you through policy development, implementation planning, and best practices 
                to ensure sustainable compliance and governance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Senior advisory consultants and specialists</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Tailored policy development frameworks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Implementation guidance and support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Industry-specific best practices</span>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Why Advisory Services Matter</h3>
              <ul className="space-y-3">
                <li className="text-aiwia-gray-dark">• Establish robust governance frameworks</li>
                <li className="text-aiwia-gray-dark">• Reduce implementation costs and timelines</li>
                <li className="text-aiwia-gray-dark">• Ensure sustainable policy adoption</li>
                <li className="text-aiwia-gray-dark">• Build internal capability and expertise</li>
                <li className="text-aiwia-gray-dark">• Mitigate compliance and operational risks</li>
                <li className="text-aiwia-gray-dark">• Achieve strategic organizational alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our Advisory Services</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive consultancy for implementing robust governance policies and practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {complianceServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl text-aiwia-black">{service.title}</CardTitle>
                  <CardDescription className="text-aiwia-gray-dark">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-6 flex-1">
                    <div>
                      <h4 className="font-medium text-aiwia-black mb-3">Service Scope</h4>
                      <ul className="space-y-2">
                        {service.scope.map((item, idx) => (
                          <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                            <div className="w-1.5 h-1.5 bg-aiwia-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-aiwia-black mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                            <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button asChild className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our Advisory Process</h2>
            <p className="text-xl text-aiwia-gray-dark">
              A systematic consultancy approach to establishing robust governance frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {auditProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-aiwia-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-aiwia-black mb-2">{process.title}</h3>
                <p className="text-aiwia-gray-dark">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-aiwia-black mb-6">
            Ready to Strengthen Your Governance?
          </h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Contact us today to discuss your advisory needs and start building robust policies and practices.
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

export default Compliance;
