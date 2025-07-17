
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DPOService = () => {
  const services = [
    {
      title: "Data Privacy Impact Assessment",
      description: "Comprehensive evaluation of data processing activities and privacy risks",
      features: [
        "Risk identification and analysis",
        "Compliance gap assessment", 
        "Mitigation recommendations",
        "Regular monitoring and review"
      ]
    },
    {
      title: "Data Protection Management Plan",
      description: "Strategic framework for organizational data protection compliance",
      features: [
        "Policy development and implementation",
        "Staff training and awareness programs",
        "Process documentation and procedures",
        "Stakeholder engagement and coordination"
      ]
    },
    {
      title: "Data Breach Incident Handling",
      description: "Professional response and management of data security incidents",
      features: [
        "Incident response planning",
        "Breach notification to PDPC",
        "Stakeholder communication management",
        "Post-incident analysis and improvement"
      ]
    }
  ];

  const benefits = [
    "Singapore PDPA compliant DPO services",
    "Cost-effective alternative to in-house DPO",
    "Expert knowledge and experience",
    "Flexible engagement models",
    "Regular compliance monitoring",
    "24/7 incident response support"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Protection Officer (DPO) as a Service</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Outsourced DPO services for Singapore PDPA compliance. Let competent providers handle your data protection responsibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">
                Professional DPO Services
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Singapore's Personal Data Protection Act (PDPA) allows organizations to outsource 
                the Data Protection Officer role to competent external providers. Our certified 
                DPO services ensure your organization maintains full compliance while focusing 
                on core business activities.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                    <span className="text-aiwia-gray-dark">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Why Outsource Your DPO?</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-aiwia-black">Cost Effective</h4>
                  <p className="text-sm text-aiwia-gray-dark">Avoid the costs of hiring and training full-time DPO staff</p>
                </div>
                <div>
                  <h4 className="font-medium text-aiwia-black">Expert Knowledge</h4>
                  <p className="text-sm text-aiwia-gray-dark">Access specialized expertise in data protection and PDPA compliance</p>
                </div>
                <div>
                  <h4 className="font-medium text-aiwia-black">Scalable Service</h4>
                  <p className="text-sm text-aiwia-gray-dark">Flexible engagement based on your organization's needs</p>
                </div>
                <div>
                  <h4 className="font-medium text-aiwia-black">Compliance Assurance</h4>
                  <p className="text-sm text-aiwia-gray-dark">Stay current with evolving regulations and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our DPO Services</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive data protection services tailored to your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-aiwia-black">{service.title}</CardTitle>
                  <CardDescription className="text-aiwia-gray-dark">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-medium text-aiwia-black mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                          <div className="w-1.5 h-1.5 bg-aiwia-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-aiwia-black mb-6">
            Secure Your Data Protection Compliance
          </h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Partner with us for professional DPO services and ensure your organization stays compliant with Singapore's PDPA requirements.
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

export default DPOService;
