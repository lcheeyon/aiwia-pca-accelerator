import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const serviceCategories = [
    {
      title: "Digital Transformation Training",
      description: "Comprehensive corporate training programs",
      services: [
        {
          name: "AI Technology Training",
          description: "Productive usage of AI technologies for business optimization",
          href: "/services/ai-technology-training"
        },
        {
          name: "Generative AI Usage Course",
          description: "Master practical generative AI tools for creativity and productivity",
          href: "/services/generative-ai-usage"
        },
        {
          name: "Privacy & Security Training",
          description: "Data privacy protection and cybersecurity best practices",
          href: "/services/privacy-security-training"
        },
        {
          name: "Agile Adoption Training",
          description: "Scrum and Kanban frameworks for enhanced team productivity",
          href: "/services/agile-adoption-training"
        }
      ]
    },
    {
      title: "AI Technology Adoption",
      description: "Implementation of AI solutions for workflow optimization",
      services: [
        {
          name: "Customer Service AI",
          description: "RAG-powered customer enquiry automation systems",
          href: "/services/customer-service-ai"
        },
        {
          name: "Fraud Detection",
          description: "Advanced AI systems for fraudulent transaction detection",
          href: "/services/fraud-detection"
        },
        {
          name: "Automated Reporting",
          description: "AI-driven document analysis and report generation",
          href: "/services/automated-reporting"
        },
        {
          name: "HR Process Optimization",
          description: "Streamlined recruitment and HR management systems",
          href: "/services/hr-optimization"
        },
        {
          name: "Microsoft Copilot Configuration",
          description: "Training and deployment of MS Copilot for Microsoft 365 and Studio",
          href: "/services/microsoft-copilot"
        }
      ]
    },
    {
      title: "Compliance & Audits",
      description: "Professional auditing and compliance services",
      services: [
        {
          name: "Data Protection Trustmark",
          description: "Singapore's data protection certification and compliance",
          href: "/services/data-protection-trustmark"
        },
        {
          name: "ISO 27001 ISMS",
          description: "Information Security Management System implementation",
          href: "/services/iso-27001"
        },
        {
          name: "ISO 42001 AI Management",
          description: "AI Management System standards and certification",
          href: "/services/iso-42001"
        }
      ]
    },
    {
      title: "Data Protection Officer (DPO) as a Service",
      description: "Outsourced DPO services for Singapore PDPA compliance",
      services: [
        {
          name: "Data Privacy Impact Assessment",
          description: "Comprehensive assessment of data privacy risks and compliance",
          href: "/services/dpo-service"
        },
        {
          name: "Data Protection Management Plan",
          description: "Strategic planning and implementation of data protection frameworks",
          href: "/services/dpo-service"
        },
        {
          name: "Data Breach Incident Handling",
          description: "Professional response and management of data breach incidents",
          href: "/services/dpo-service"
        }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive solutions for responsible AI adoption with integrated Privacy, 
              Cybersecurity and Agile (PCA) frameworks
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-aiwia-black mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-aiwia-gray-dark">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card key={serviceIndex} className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                          <Link to={service.href}>Learn More</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
