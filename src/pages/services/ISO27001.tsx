
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ISO27001 = () => {
  const isoControls = [
    {
      section: "A.5 - Information Security Policies",
      controls: ["A.5.1 - Information security policy", "A.5.2 - Information security roles and responsibilities"]
    },
    {
      section: "A.6 - Organization of Information Security",
      controls: ["A.6.1 - Internal organization", "A.6.2 - Mobile devices and teleworking"]
    },
    {
      section: "A.7 - Human Resource Security",
      controls: ["A.7.1 - Prior to employment", "A.7.2 - During employment", "A.7.3 - Termination/change of employment"]
    },
    {
      section: "A.8 - Asset Management",
      controls: ["A.8.1 - Responsibility for assets", "A.8.2 - Information classification", "A.8.3 - Media handling"]
    },
    {
      section: "A.9 - Access Control",
      controls: ["A.9.1 - Business requirements", "A.9.2 - User access management", "A.9.3 - User responsibilities", "A.9.4 - System access control"]
    },
    {
      section: "A.10 - Cryptography",
      controls: ["A.10.1 - Cryptographic controls"]
    },
    {
      section: "A.11 - Physical and Environmental Security",
      controls: ["A.11.1 - Secure areas", "A.11.2 - Equipment"]
    },
    {
      section: "A.12 - Operations Security",
      controls: ["A.12.1 - Operational procedures", "A.12.2 - Protection from malware", "A.12.3 - Backup", "A.12.4 - Logging and monitoring", "A.12.5 - Control of operational software", "A.12.6 - Technical vulnerability management", "A.12.7 - Information systems audit considerations"]
    },
    {
      section: "A.13 - Communications Security",
      controls: ["A.13.1 - Network security management", "A.13.2 - Information transfer"]
    },
    {
      section: "A.14 - System Acquisition, Development and Maintenance",
      controls: ["A.14.1 - Security requirements of information systems", "A.14.2 - Security in development and support processes", "A.14.3 - Test data"]
    },
    {
      section: "A.15 - Supplier Relationships",
      controls: ["A.15.1 - Information security in supplier relationships", "A.15.2 - Supplier service delivery management"]
    },
    {
      section: "A.16 - Information Security Incident Management",
      controls: ["A.16.1 - Management of information security incidents and improvements"]
    },
    {
      section: "A.17 - Information Security Aspects of Business Continuity Management",
      controls: ["A.17.1 - Information security continuity", "A.17.2 - Redundancies"]
    },
    {
      section: "A.18 - Compliance",
      controls: ["A.18.1 - Compliance with legal and contractual requirements", "A.18.2 - Information security reviews"]
    }
  ];

  const advisoryServices = [
    {
      title: "ISMS Framework Development",
      description: "Establish comprehensive Information Security Management System framework aligned with ISO 27001 requirements",
      features: ["Policy development", "Governance structure", "Risk management framework", "Control objectives mapping"]
    },
    {
      title: "Security Controls Implementation",
      description: "Guide implementation of all 93 ISO 27001 Annex A controls tailored to your organization",
      features: ["Control selection", "Implementation guidance", "Technical specifications", "Monitoring procedures"]
    },
    {
      title: "Risk Assessment & Treatment",
      description: "Comprehensive risk assessment methodology and treatment planning for information security",
      features: ["Asset identification", "Threat modeling", "Vulnerability assessment", "Risk treatment plans"]
    },
    {
      title: "Documentation & Training",
      description: "Complete documentation suite and training programs for ISO 27001 compliance",
      features: ["Policy documentation", "Procedure manuals", "Staff training", "Awareness programs"]
    }
  ];

  const requirements = [
    "Information Security Policy Framework",
    "Comprehensive Risk Assessment",
    "Implementation of 93 Security Controls",
    "Employee Training and Awareness",
    "Incident Management Procedures",
    "Business Continuity Planning",
    "Regular Security Reviews and Audits",
    "Continuous Improvement Process"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 27001 ISMS Advisory</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert advisory services for implementing ISO 27001 Information Security Management System 
              with comprehensive guidance on all 93 security controls.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ISO 27001 Standard Overview</h2>
            <p className="text-xl text-aiwia-gray-dark max-w-4xl mx-auto">
              ISO 27001 is the international standard for Information Security Management Systems (ISMS). 
              It provides a systematic approach to managing sensitive company information and includes 93 
              security controls across 14 control categories in Annex A.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-aiwia-black mb-6">Key ISMS Components</h3>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                    <span className="text-aiwia-gray-dark">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Why ISO 27001?</h3>
              <ul className="space-y-3">
                <li className="text-aiwia-gray-dark">• International recognition and credibility</li>
                <li className="text-aiwia-gray-dark">• Systematic approach to information security</li>
                <li className="text-aiwia-gray-dark">• Risk-based management methodology</li>
                <li className="text-aiwia-gray-dark">• Continuous improvement framework</li>
                <li className="text-aiwia-gray-dark">• Enhanced customer and stakeholder trust</li>
                <li className="text-aiwia-gray-dark">• Competitive advantage in the market</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our ISO 27001 Advisory Services</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive consultancy for implementing robust Information Security Management Systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-aiwia-black">{service.title}</CardTitle>
                  <CardDescription className="text-aiwia-gray-dark">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                        <div className="w-1.5 h-1.5 bg-aiwia-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 27001 Controls Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">ISO 27001 Annex A: 93 Security Controls</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive coverage of all 14 control categories and 93 individual controls
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isoControls.map((category, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-aiwia-black">{category.section}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.controls.map((control, idx) => (
                      <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                        <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {control}
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
          <h2 className="text-3xl font-bold text-aiwia-black mb-6">Start Your ISO 27001 Journey</h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Get expert advisory support for implementing comprehensive Information Security Management Systems
          </p>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Get Advisory Support</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ISO27001;
