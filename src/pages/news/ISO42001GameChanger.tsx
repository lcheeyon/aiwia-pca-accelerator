
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ISO42001GameChanger = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/news" 
            className="inline-flex items-center text-aiwia-blue hover:text-aiwia-blue-dark mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
          
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-aiwia-blue text-white px-3 py-1 rounded text-sm">Industry Insights</span>
              <span className="text-aiwia-gray-dark">December 10, 2024</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-aiwia-black">ISO 42001 AI Management System: A Game Changer for Organizations</h1>
            <p className="text-xl text-aiwia-gray-dark leading-relaxed">
              Understanding the new international standard for AI management systems and its impact on business operations
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="ISO Standards"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              The introduction of ISO 42001, the world's first international standard for AI management systems, 
              marks a pivotal moment in the evolution of artificial intelligence governance. This groundbreaking 
              standard provides organizations with a structured framework for responsible AI development and deployment.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">What is ISO 42001?</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              ISO 42001 establishes requirements for an AI management system (AIMS) that enables organizations to 
              develop, provide, and use AI systems responsibly. The standard focuses on managing AI-specific risks 
              and opportunities while ensuring ethical considerations are embedded throughout the AI lifecycle.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">Key Components of ISO 42001</h2>
            
            <h3 className="text-2xl font-semibold mb-3 mt-6 text-aiwia-blue">Governance Structure</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              The standard requires organizations to establish clear governance structures with defined roles and 
              responsibilities for AI oversight. This includes appointing AI governance committees and ensuring 
              senior management commitment to responsible AI practices.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-aiwia-blue">Risk Management</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              ISO 42001 emphasizes comprehensive risk assessment and management processes specifically tailored 
              to AI systems. This includes identifying potential biases, ensuring algorithmic transparency, and 
              implementing safeguards against unintended consequences.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-aiwia-blue">Impact Assessment</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Organizations must conduct thorough impact assessments for AI systems, considering ethical, social, 
              and environmental implications. This ensures that AI deployment aligns with organizational values 
              and societal expectations.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">Business Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>Enhanced stakeholder trust and confidence</li>
              <li>Reduced regulatory and reputational risks</li>
              <li>Improved AI system reliability and performance</li>
              <li>Better alignment with ethical AI principles</li>
              <li>Competitive advantage in responsible AI adoption</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">Implementation Challenges</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              While ISO 42001 offers significant benefits, implementation requires careful planning and commitment. 
              Organizations must invest in training, process development, and ongoing monitoring to achieve compliance. 
              The standard's requirements may also necessitate changes to existing organizational structures and workflows.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">Industry Adoption</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Early adopters across various industries are already seeing positive results from ISO 42001 implementation. 
              Financial services, healthcare, and technology companies are leading the way in demonstrating how this 
              standard can enhance AI governance while driving innovation.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              As AI continues to transform business operations, ISO 42001 provides the foundation for sustainable 
              and responsible AI adoption that benefits organizations, stakeholders, and society as a whole.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ISO42001GameChanger;
