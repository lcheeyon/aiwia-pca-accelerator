import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckIcon, ClockIcon, UsersIcon, BoltIcon } from 'lucide-react';

const MicrosoftCopilot = () => {
  const services = [
    {
      title: "Microsoft Copilot for Microsoft 365 Training",
      description: "Comprehensive training on utilizing MS Copilot across the Microsoft 365 suite for enhanced productivity and collaboration.",
      duration: "2 days",
      participants: "Up to 25",
      features: [
        "Introduction to Copilot in Word, Excel, PowerPoint, Outlook",
        "Advanced prompt engineering for business tasks",
        "Data integration and analysis with Copilot",
        "Security and privacy considerations",
        "Best practices for team collaboration",
        "Hands-on workshops and practical exercises"
      ]
    },
    {
      title: "Microsoft Copilot Studio Usage & Development",
      description: "Learn to create, configure, and deploy custom copilot solutions using Microsoft Copilot Studio platform.",
      duration: "3 days",
      participants: "Up to 20",
      features: [
        "Copilot Studio platform overview and setup",
        "Building conversational AI agents",
        "Custom knowledge base integration",
        "Workflow automation and integration",
        "Testing and deployment strategies",
        "Advanced customization techniques"
      ]
    },
    {
      title: "Custom RAG Copilot Agent Creation",
      description: "Specialized service for creating Retrieval-Augmented Generation (RAG) copilot agents tailored to your organization's specific needs and data.",
      duration: "5 days",
      participants: "Project-based",
      features: [
        "Requirements analysis and solution design",
        "Organization data integration and indexing",
        "Custom RAG implementation with Azure AI",
        "Agent training with proprietary knowledge",
        "Security and compliance configuration",
        "Deployment and maintenance planning"
      ]
    }
  ];

  const benefits = [
    "Enhanced productivity across Microsoft 365 applications",
    "Reduced time on repetitive tasks through AI automation",
    "Improved data analysis and insights generation",
    "Streamlined document creation and editing processes",
    "Better collaboration through intelligent assistance",
    "Custom AI solutions tailored to organizational needs"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Microsoft Copilot Configuration & Training
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive Microsoft Copilot training and custom RAG agent development 
              to transform your organization's productivity and intelligence capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">
                Unlock the Power of Microsoft Copilot
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our Microsoft Copilot services encompass comprehensive training on MS Copilot for Microsoft 365, 
                advanced Copilot Studio development, and creation of custom RAG agents tailored to your organization's 
                unique data and requirements.
              </p>
              <p className="text-lg text-aiwia-gray-dark mb-8">
                From basic productivity enhancement to sophisticated AI-powered automation, we help your team 
                leverage the full potential of Microsoft's AI ecosystem while ensuring security and compliance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-aiwia-blue mb-2">50+</div>
                  <div className="text-sm text-aiwia-gray-dark">Organizations Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aiwia-blue mb-2">95%</div>
                  <div className="text-sm text-aiwia-gray-dark">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-aiwia-blue mt-1 mr-3 flex-shrink-0" />
                    <span className="text-aiwia-gray-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">
              Our Microsoft Copilot Services
            </h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive training and implementation services for Microsoft Copilot technologies
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <div className="flex gap-2 mt-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <ClockIcon className="h-3 w-3" />
                      {service.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <UsersIcon className="h-3 w-3" />
                      {service.participants}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <BoltIcon className="h-4 w-4 text-aiwia-blue mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">
              Our Implementation Approach
            </h2>
            <p className="text-xl text-aiwia-gray-dark">
              Structured methodology ensuring successful Copilot adoption and integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-aiwia-gray-dark">
                Evaluate current Microsoft 365 usage and identify optimization opportunities
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-aiwia-gray-dark">
                Create customized training programs and copilot agent specifications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-aiwia-gray-dark">
                Deliver training and deploy custom copilot solutions with security focus
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-aiwia-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Support</h3>
              <p className="text-aiwia-gray-dark">
                Provide ongoing support and optimization for sustained success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-aiwia-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Organization with Microsoft Copilot?
          </h2>
          <p className="text-xl mb-8">
            Contact us to discuss your Microsoft Copilot training and implementation needs. 
            Our experts are ready to help you unlock the full potential of AI-powered productivity.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-aiwia-blue hover:bg-aiwia-gray-light"
            asChild
          >
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicrosoftCopilot;