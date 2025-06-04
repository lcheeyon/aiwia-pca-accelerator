
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Compliance = () => {
  const complianceServices = [
    {
      title: "Data Protection Trustmark",
      description: "Singapore's data protection certification demonstrating your commitment to responsible data handling",
      icon: "🏆",
      scope: [
        "PDPA compliance assessment",
        "Data governance framework setup",
        "Privacy policy development",
        "Staff training programs",
        "Ongoing compliance monitoring"
      ],
      benefits: [
        "Enhanced customer trust",
        "Competitive market advantage",
        "Reduced regulatory risks",
        "Improved data governance"
      ],
      link: "/services/data-protection-trustmark"
    },
    {
      title: "ISO 27001 ISMS",
      description: "Information Security Management System implementation for comprehensive cybersecurity",
      icon: "🔒",
      scope: [
        "Security risk assessment",
        "ISMS policy development",
        "Security controls implementation",
        "Employee security training",
        "Regular security audits"
      ],
      benefits: [
        "Enhanced information security",
        "International recognition",
        "Risk management framework",
        "Customer confidence boost"
      ],
      link: "/services/iso-27001"
    },
    {
      title: "ISO 42001 AI Management",
      description: "AI Management System standards and certification for responsible AI governance",
      icon: "🤖",
      scope: [
        "AI governance framework",
        "AI risk assessment protocols",
        "Ethical AI guidelines",
        "AI system documentation",
        "Performance monitoring systems"
      ],
      benefits: [
        "Responsible AI deployment",
        "Regulatory compliance",
        "Stakeholder confidence",
        "Competitive differentiation"
      ],
      link: "/services/iso-42001"
    }
  ];

  const auditProcess = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "Comprehensive evaluation of current compliance status and identification of gaps"
    },
    {
      step: "2", 
      title: "Gap Analysis",
      description: "Detailed analysis of requirements and development of remediation roadmap"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Systematic implementation of required controls, policies, and procedures"
    },
    {
      step: "4",
      title: "Certification",
      description: "Final audit and certification process with ongoing compliance support"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Compliance & Audits</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Professional auditing and compliance services to ensure your organization meets 
              international standards for data protection, information security, and AI management.
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
                Expert Compliance & Audit Services
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our comprehensive compliance and audit services help organizations achieve and 
                maintain certification across multiple international standards. We provide 
                end-to-end support from initial assessment to ongoing compliance monitoring.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Certified auditors and consultants</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Comprehensive compliance frameworks</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Ongoing support and monitoring</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Industry-specific expertise</span>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Why Compliance Matters</h3>
              <ul className="space-y-3">
                <li className="text-aiwia-gray-dark">• Build customer trust and confidence</li>
                <li className="text-aiwia-gray-dark">• Reduce regulatory and legal risks</li>
                <li className="text-aiwia-gray-dark">• Gain competitive market advantage</li>
                <li className="text-aiwia-gray-dark">• Improve operational efficiency</li>
                <li className="text-aiwia-gray-dark">• Demonstrate corporate responsibility</li>
                <li className="text-aiwia-gray-dark">• Access new markets and partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Services */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our Compliance Services</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive certification and audit services across multiple standards
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
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our Audit Process</h2>
            <p className="text-xl text-aiwia-gray-dark">
              A systematic approach to achieving and maintaining compliance
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
            Ready to Achieve Compliance?
          </h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Contact us today to discuss your compliance requirements and start your certification journey.
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
