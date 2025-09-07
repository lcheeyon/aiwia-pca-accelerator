
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
    },
    {
      question: "What workflow automation solutions do you offer?",
      answer: "We provide comprehensive workflow automation using n8n for custom integrations, Zapier for connecting popular business applications, and custom RAG implementations for intelligent document processing. These solutions help eliminate repetitive manual tasks and streamline business processes."
    },
    {
      question: "How can workflow automation reduce my operational costs?",
      answer: "Workflow automation eliminates repetitive manual tasks, reduces human errors, and allows your team to focus on higher-value activities. Our solutions typically result in 40-60% time savings on routine processes and significant cost reductions in operational overhead."
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
    },
    {
      title: "n8n Workflow Automation",
      description: "Custom workflow automation platform for seamless integration between different business systems",
      icon: "⚡",
      features: [
        "Visual workflow designer",
        "500+ app integrations",
        "Custom API connections",
        "Real-time process monitoring"
      ],
      benefits: [
        "Eliminate manual data entry",
        "Reduce processing time by 80%",
        "Minimize human errors", 
        "Scale operations efficiently"
      ]
    },
    {
      title: "Zapier Integration Services",
      description: "Connect and automate your favorite business applications without coding",
      icon: "🔗",
      features: [
        "5000+ app integrations",
        "Multi-step workflows",
        "Conditional logic automation",
        "Data formatting and filtering"
      ],
      benefits: [
        "Quick setup and deployment",
        "No technical expertise required",
        "Improved data consistency",
        "Enhanced team productivity"
      ]
    },
    {
      title: "Custom RAG Implementation", 
      description: "Retrieval-Augmented Generation systems for intelligent document processing and knowledge management",
      icon: "📚",
      features: [
        "Document ingestion and indexing",
        "Semantic search capabilities",
        "Context-aware responses",
        "Multi-format support"
      ],
      benefits: [
        "Instant access to organizational knowledge",
        "Improved decision-making",
        "Reduced research time",
        "Enhanced customer support"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="AI Technology Adoption & Workflow Automation Services | AIWIA"
        description="Professional AI adoption and workflow automation services using n8n, Zapier, and custom RAG implementations. Transform your business processes and eliminate repetitive tasks."
        keywords="AI adoption, workflow automation, n8n automation, Zapier integration, RAG implementation, business process automation, AI consulting"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Technology Adoption & Workflow Automation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transform your business operations with cutting-edge AI solutions and intelligent workflow automation. 
              Eliminate repetitive tasks, streamline processes, and drive innovation using n8n, Zapier, and custom RAG implementations.
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
                Harness the Power of AI & Automation
              </h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Our AI adoption and workflow automation services help organizations integrate intelligent 
                automation solutions into their existing workflows. We specialize in reducing repetitive 
                tasks through n8n custom workflows, Zapier integrations, and custom RAG implementations 
                that deliver immediate value while building a foundation for future innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Workflow automation with n8n and Zapier</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3"></div>
                  <span className="text-aiwia-gray-dark">Custom RAG implementation for document processing</span>
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
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our AI & Automation Solutions</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive AI technologies and workflow automation tools designed to transform your business operations
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
