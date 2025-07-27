
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ISO42001 = () => {
  const iso42001Controls = [
    {
      section: "5 - Leadership and Governance",
      controls: [
        "5.1 - Leadership and commitment",
        "5.2 - AI policy", 
        "5.3 - Organizational roles, responsibilities and authorities",
        "5.4 - AI management system scope"
      ]
    },
    {
      section: "6 - Planning",
      controls: [
        "6.1 - Actions to address risks and opportunities",
        "6.2 - AI objectives and planning to achieve them",
        "6.3 - Planning of changes"
      ]
    },
    {
      section: "7 - Support",
      controls: [
        "7.1 - Resources",
        "7.2 - Competence",
        "7.3 - Awareness",
        "7.4 - Communication",
        "7.5 - Documented information"
      ]
    },
    {
      section: "8 - Operation",
      controls: [
        "8.1 - Operational planning and control",
        "8.2 - AI system impact assessment",
        "8.3 - AI system development",
        "8.4 - Data for AI systems",
        "8.5 - AI system deployment",
        "8.6 - AI system operation and monitoring",
        "8.7 - AI system performance and monitoring"
      ]
    },
    {
      section: "9 - Performance Evaluation",
      controls: [
        "9.1 - Monitoring, measurement, analysis and evaluation",
        "9.2 - Internal audit",
        "9.3 - Management review"
      ]
    },
    {
      section: "10 - Improvement",
      controls: [
        "10.1 - Nonconformity and corrective action",
        "10.2 - Continual improvement"
      ]
    }
  ];

  const aiLifecyclePhases = [
    {
      phase: "Planning & Design",
      description: "Defining AI objectives, requirements, and system architecture with ethical considerations",
      activities: ["Requirements analysis", "Risk assessment", "Ethical impact evaluation", "Stakeholder engagement"]
    },
    {
      phase: "Development & Training",
      description: "Building and training AI models with proper data governance and quality controls",
      activities: ["Data acquisition & preparation", "Model development", "Testing & validation", "Documentation"]
    },
    {
      phase: "Deployment & Integration",
      description: "Implementing AI systems into production environments with monitoring capabilities",
      activities: ["System deployment", "Integration testing", "Performance monitoring", "User training"]
    },
    {
      phase: "Operation & Maintenance",
      description: "Ongoing management, monitoring, and maintenance of AI systems in production",
      activities: ["Continuous monitoring", "Performance evaluation", "Model updates", "Incident management"]
    },
    {
      phase: "Retirement & Disposal",
      description: "Systematic decommissioning of AI systems with proper data handling and transition planning",
      activities: ["Decommissioning planning", "Data archival/deletion", "System migration", "Knowledge transfer"]
    }
  ];

  const advisoryServices = [
    {
      title: "AI Governance Framework Development",
      description: "Establish comprehensive AI governance structures aligned with ISO 42001 requirements",
      features: ["AI policy development", "Governance structure design", "Role & responsibility matrix", "Decision-making frameworks"]
    },
    {
      title: "AI System Lifecycle Management",
      description: "Implement end-to-end AI system lifecycle processes for responsible AI development and deployment",
      features: ["Lifecycle process design", "Stage-gate controls", "Risk management integration", "Quality assurance protocols"]
    },
    {
      title: "Data Governance for AI",
      description: "Establish robust data governance frameworks specifically designed for AI system requirements",
      features: ["Data quality management", "Data lineage tracking", "Privacy controls", "Bias detection & mitigation"]
    },
    {
      title: "AI Risk Management",
      description: "Comprehensive risk assessment and management frameworks for AI systems throughout their lifecycle",
      features: ["AI risk taxonomy", "Impact assessment methodology", "Mitigation strategies", "Continuous monitoring"]
    },
    {
      title: "Ethical AI Implementation",
      description: "Develop and implement ethical AI guidelines and practices across your organization",
      features: ["Ethical AI principles", "Bias assessment tools", "Fairness metrics", "Transparency mechanisms"]
    },
    {
      title: "AI Performance Monitoring",
      description: "Establish continuous monitoring and evaluation systems for AI system performance and compliance",
      features: ["KPI development", "Monitoring dashboards", "Automated alerts", "Performance reporting"]
    }
  ];

  const components = [
    "AI Governance Framework & Leadership Commitment",
    "Comprehensive AI Risk Assessment & Management",
    "AI System Lifecycle Management Processes",
    "Data Governance & Quality Management for AI", 
    "Ethical AI Guidelines & Fairness Controls",
    "AI System Performance Monitoring & Evaluation",
    "Stakeholder Engagement & Communication",
    "Continuous Improvement & Incident Management"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 42001 AI Management Advisory</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Expert advisory services for implementing ISO 42001 AI Management Systems with comprehensive 
              guidance on responsible AI lifecycle management and data governance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">ISO 42001 AI Management System</h2>
            <p className="text-xl text-aiwia-gray-dark max-w-4xl mx-auto">
              ISO 42001 is the world's first international standard for AI management systems. It provides 
              a framework for responsible development, deployment, and use of AI systems with systematic 
              risk management and governance throughout the AI lifecycle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-aiwia-black mb-6">Key AI Management Components</h3>
              <div className="space-y-4">
                {components.map((component, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                    <span className="text-aiwia-gray-dark">{component}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-6 rounded-lg">
              <h3 className="text-xl font-bold text-aiwia-black mb-4">Why ISO 42001?</h3>
              <ul className="space-y-3">
                <li className="text-aiwia-gray-dark">• First global standard for AI management</li>
                <li className="text-aiwia-gray-dark">• Risk-based approach to AI governance</li>
                <li className="text-aiwia-gray-dark">• Lifecycle management framework</li>
                <li className="text-aiwia-gray-dark">• Stakeholder confidence in AI systems</li>
                <li className="text-aiwia-gray-dark">• Regulatory compliance support</li>
                <li className="text-aiwia-gray-dark">• Competitive advantage in AI adoption</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Services Section */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Our ISO 42001 Advisory Services</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive consultancy for implementing responsible AI management systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-aiwia-black">{service.title}</CardTitle>
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

      {/* AI System Lifecycle Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Responsible AI System Lifecycle</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive guidance through all phases of AI system development and management
            </p>
          </div>
          
          <div className="space-y-8">
            {aiLifecyclePhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-aiwia-blue text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-aiwia-black">{phase.phase}</CardTitle>
                      <CardDescription className="text-aiwia-gray-dark">{phase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-14">
                    <h4 className="font-medium text-aiwia-black mb-3">Key Activities</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-aiwia-gray-dark">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ISO 42001 Controls Section */}
      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">ISO 42001 Management System Controls</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Complete framework covering all aspects of AI management system requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {iso42001Controls.map((category, index) => (
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

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-aiwia-black mb-6">Start Your AI Governance Journey</h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Get expert advisory support for implementing responsible AI management systems with ISO 42001
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

export default ISO42001;
