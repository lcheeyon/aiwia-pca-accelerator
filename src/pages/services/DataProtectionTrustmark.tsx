
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, FileCheck, Users, Award, Clock } from 'lucide-react';

const DataProtectionTrustmark = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enhanced Consumer Trust",
      description: "Demonstrate your commitment to data protection and build customer confidence"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitive Advantage",
      description: "Stand out from competitors with a recognized certification mark"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "PDPA Compliance",
      description: "Ensure adherence to Singapore's Personal Data Protection Act requirements"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stakeholder Confidence",
      description: "Reassure partners, investors, and customers about your data practices"
    }
  ];

  const requirements = [
    "Implement appropriate data protection policies and procedures",
    "Establish clear data governance framework",
    "Conduct regular data protection impact assessments",
    "Maintain proper consent management processes",
    "Implement data breach response procedures",
    "Provide staff training on data protection",
    "Demonstrate ongoing compliance monitoring"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We evaluate your current data protection practices and identify gaps"
    },
    {
      step: "2",
      title: "Implementation Planning",
      description: "Develop a comprehensive plan to meet DPTM requirements"
    },
    {
      step: "3",
      title: "Policy Development",
      description: "Create and implement necessary data protection policies and procedures"
    },
    {
      step: "4",
      title: "Staff Training",
      description: "Conduct training sessions for your team on data protection practices"
    },
    {
      step: "5",
      title: "Documentation",
      description: "Prepare all required documentation for the certification application"
    },
    {
      step: "6",
      title: "Application Submission",
      description: "Submit your DPTM application to the approved certification body"
    },
    {
      step: "7",
      title: "Audit & Certification",
      description: "Support you through the certification audit and obtain your DPTM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-aiwia-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Data Protection Trustmark</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Singapore's premier certification for organizations demonstrating excellence in personal data protection
            </p>
            <Button asChild size="lg" className="bg-aiwia-green hover:bg-aiwia-green-dark">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">What is the Data Protection Trustmark?</h2>
              <p className="text-lg text-aiwia-gray-dark mb-6 leading-relaxed">
                The Data Protection Trustmark (DPTM) is a certification scheme administered by the 
                Personal Data Protection Commission (PDPC) of Singapore. It recognizes organizations 
                that have implemented robust personal data protection practices that go beyond basic 
                compliance with the Personal Data Protection Act (PDPA).
              </p>
              <p className="text-lg text-aiwia-gray-dark mb-6 leading-relaxed">
                Organizations with the DPTM demonstrate accountability, transparency, and a strong 
                commitment to protecting personal data, giving consumers confidence in how their 
                data is handled.
              </p>
              <div className="flex items-center space-x-4">
                <Clock className="w-5 h-5 text-aiwia-green" />
                <span className="text-aiwia-gray-dark">3-year certification validity</span>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Data Protection Certification"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Benefits of DPTM Certification</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Why your organization should pursue the Data Protection Trustmark
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-aiwia-green rounded-lg text-white">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base pt-2">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">DPTM Requirements & Process</h2>
          </div>

          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="process">Our Process</TabsTrigger>
              <TabsTrigger value="standards">Standards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="requirements" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Key Requirements for DPTM Certification</CardTitle>
                  <CardDescription>
                    Organizations must demonstrate the following capabilities and practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-aiwia-green mt-0.5 flex-shrink-0" />
                        <span className="text-aiwia-gray-dark">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {processSteps.map((step, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-aiwia-blue rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </div>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="standards" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>DPTM Standards Framework</CardTitle>
                  <CardDescription>
                    The certification is based on internationally recognized standards and best practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-aiwia-black mb-2">Data Protection Standards</h4>
                      <p className="text-aiwia-gray-dark">
                        Based on ISO/IEC 27001, ISO/IEC 29100, and other international data protection frameworks
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-black mb-2">PDPA Compliance</h4>
                      <p className="text-aiwia-gray-dark">
                        Full adherence to Singapore's Personal Data Protection Act and its regulations
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-black mb-2">Continuous Improvement</h4>
                      <p className="text-aiwia-gray-dark">
                        Ongoing monitoring, assessment, and improvement of data protection practices
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-black mb-2">Transparency Requirements</h4>
                      <p className="text-aiwia-gray-dark">
                        Clear privacy policies, data usage notifications, and consent management processes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aiwia-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Data Protection Trustmark?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let AIWIA guide you through the entire certification process with our expert consultation and support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-aiwia-green hover:bg-aiwia-green-dark">
              <Link to="/contact">Start Your Certification Journey</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-aiwia-blue">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataProtectionTrustmark;
