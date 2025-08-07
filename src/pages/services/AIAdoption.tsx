
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SEOHead from '@/components/SEOHead';
import FAQSchema from '@/components/schemas/FAQSchema';
import LocalBusinessSchema from '@/components/schemas/LocalBusinessSchema';

const AIAdoption = () => {
  const faqs = [
    {
      question: "What is AI technology adoption and how can it benefit my business?",
      answer: "AI technology adoption involves integrating artificial intelligence solutions into your existing business processes to automate tasks, improve decision-making, and enhance operational efficiency. Benefits include reduced costs, increased productivity, better customer service, and competitive advantage."
    },
    {
      question: "How long does it take to implement AI solutions?",
      answer: "Implementation timelines vary based on complexity and scope. Simple AI tools can be deployed in weeks, while comprehensive AI transformation projects typically take 3-6 months. We follow a phased approach to minimize disruption and ensure smooth integration."
    },
    {
      question: "Do I need technical expertise to adopt AI technologies?",
      answer: "No, our comprehensive training and support programs ensure your team can effectively use AI tools regardless of their technical background. We provide hands-on training, documentation, and ongoing support throughout the adoption process."
    },
    {
      question: "What types of AI solutions do you offer?",
      answer: "We offer customer service AI with RAG-powered automation, fraud detection systems, automated reporting tools, and HR process optimization. Each solution is customized to your specific business needs and industry requirements."
    },
    {
      question: "How do you ensure AI solutions integrate with existing systems?",
      answer: "We conduct thorough system assessments and use APIs and integration frameworks to ensure seamless connectivity with your existing infrastructure. Our approach minimizes disruption while maximizing the value of your current technology investments."
    }
  ];

  const aiSolutions = [
    {
      title: "Customer Service AI",
      description: "RAG-powered customer enquiry automation systems for enhanced customer experience",
      icon: "🤖",
      features: [
        "24/7 automated customer support",
        "Natural language processing",
        "Knowledge base integration",
        "Multilingual support"
      ],
      benefits: [
        "Reduced response times",
        "Improved customer satisfaction",
        "Lower operational costs",
        "Scalable support operations"
      ]
    },
    {
      title: "Fraud Detection",
      description: "Advanced AI systems for detecting and preventing fraudulent transactions in real-time",
      icon: "🛡️",
      features: [
        "Real-time transaction analysis",
        "Pattern recognition algorithms",
        "Risk scoring models",
        "Automated alert systems"
      ],
      benefits: [
        "Reduced financial losses",
        "Enhanced security measures",
        "Regulatory compliance",
        "Improved customer trust"
      ]
    },
    {
      title: "Automated Reporting",
      description: "AI-driven document analysis and intelligent report generation systems",
      icon: "📊",
      features: [
        "Document processing automation",
        "Data extraction and analysis",
        "Custom report templates",
        "Scheduled report delivery"
      ],
      benefits: [
        "Time savings on manual tasks",
        "Improved data accuracy",
        "Consistent reporting standards",
        "Better decision-making insights"
      ]
    },
    {
      title: "HR Process Optimization",
      description: "Streamlined recruitment and HR management systems powered by AI",
      icon: "👥",
      features: [
        "Resume screening automation",
        "Candidate matching algorithms",
        "Performance analytics",
        "Employee engagement tracking"
      ],
      benefits: [
        "Faster hiring processes",
        "Better candidate matches",
        "Reduced bias in recruitment",
        "Improved employee retention"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AI Technology Adoption Services - Transform Your Business | AIWIA"
        description="Professional AI adoption services to integrate cutting-edge AI solutions into your business. Custom AI development, seamless integration, training and ongoing support for maximum ROI."
        keywords="AI adoption, AI implementation, AI integration, business AI solutions, AI consulting, machine learning adoption"
        canonicalUrl="https://aiwia.app/services/ai-adoption"
      />
      <FAQSchema faqs={faqs} mainEntity="AI Technology Adoption" />
      <LocalBusinessSchema 
        name="AIWIA"
        description="Leading AI consultancy providing AI technology adoption services"
        url="https://aiwia.app"
        services={["AI Technology Adoption", "AI Implementation", "AI Training", "AI Consulting"]}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Technology Adoption</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your business operations with cutting-edge AI solutions designed to optimize 
              workflows, enhance productivity, and drive innovation across your organization.
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
                Harness the Power of AI
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our AI adoption services help organizations integrate intelligent automation and 
                machine learning solutions into their existing workflows. We focus on practical, 
                measurable improvements that deliver immediate value while building a foundation 
                for future innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Custom AI solution development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Seamless integration with existing systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Comprehensive training and support</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Ongoing optimization and maintenance</span>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-aiwia-black">1. Assessment & Strategy</h4>
                  <p className="text-sm text-aiwia-gray-dark">Evaluate current processes and identify AI opportunities</p>
                </div>
                <div>
                  <h4 className="font-medium text-aiwia-black">2. Solution Design</h4>
                  <p className="text-sm text-aiwia-gray-dark">Develop customized AI solutions tailored to your needs</p>
                </div>
                <div>
                  <h4 className="font-medium text-aiwia-black">3. Implementation</h4>
                  <p className="text-sm text-aiwia-gray-dark">Deploy AI systems with minimal disruption to operations</p>
                </div>
                <div>
                  <h4 className="font-medium text-aiwia-black">4. Optimization</h4>
                  <p className="text-sm text-aiwia-gray-dark">Continuously improve performance and expand capabilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our AI Solutions</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive AI technologies designed to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-2">{solution.icon}</div>
                  <CardTitle className="text-xl text-aiwia-black">{solution.title}</CardTitle>
                  <CardDescription className="text-aiwia-gray-dark">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-aiwia-black mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                            <div className="w-1.5 h-1.5 bg-aiwia-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-aiwia-black mb-3">Business Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm text-aiwia-gray-dark flex items-start">
                            <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-aiwia-black mb-6">
            Ready to Embrace AI Technology?
          </h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Let us help you identify and implement the right AI solutions for your business needs.
          </p>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Start Your AI Journey</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAdoption;
