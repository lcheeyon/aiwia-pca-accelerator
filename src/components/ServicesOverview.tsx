
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ServicesOverview = () => {
  const services = [
    {
      title: "Digital Transformation Training",
      description: "Corporate training on AI technologies, cybersecurity, and agile adoption",
      icon: "🎓",
      href: "/services/digital-transformation",
      features: ["AI Technology Usage", "Data Privacy & Security", "Agile Process Frameworks"]
    },
    {
      title: "AI Technology Adoption", 
      description: "Optimize workflows with RAG technologies, fraud detection, and automation",
      icon: "🤖",
      href: "/services/ai-adoption",
      features: ["Customer Service AI", "Fraud Detection", "Automated Reporting", "HR Optimization"]
    },
    {
      title: "Advisory & Audit",
      description: "Data protection, ISO 27001, and AI management system compliance",
      icon: "🛡️", 
      href: "/services/compliance",
      features: ["Data Protection Trustmark", "ISO 27001 ISMS", "ISO 42001 AI Management"]
    },
    {
      title: "Data Protection Officer (DPO) as a Service",
      description: "Outsourced DPO services for Singapore PDPA compliance and data protection management",
      icon: "⚖️",
      href: "/services/dpo-service",
      features: ["Data Privacy Impact Assessment", "Data Protection Management Plan", "Data Breach Incident Handling"]
    }
  ];

  return (
    <section className="py-20 bg-aiwia-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aiwia-black mb-4">
            Our Core Services
          </h2>
          <p className="text-xl text-aiwia-gray-dark max-w-3xl mx-auto">
            Comprehensive solutions for responsible AI adoption with integrated privacy, cybersecurity, and agile frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-aiwia-black">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-aiwia-gray-dark">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-aiwia-gray-dark">
                      <div className="w-2 h-2 bg-aiwia-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                  <Link to={service.href}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
