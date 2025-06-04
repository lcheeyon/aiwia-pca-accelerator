
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AIWIAPCAFramework = () => {
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
              <span className="bg-aiwia-blue text-white px-3 py-1 rounded text-sm">Company News</span>
              <span className="text-aiwia-gray-dark">December 15, 2024</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-aiwia-black">AIWIA Launches Comprehensive AI Adoption Framework</h1>
            <p className="text-xl text-aiwia-gray-dark leading-relaxed">
              New PCA framework integrates Privacy, Cybersecurity, and Agile methodologies for responsible AI implementation
            </p>
          </header>

          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="AI Framework"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              AIWIA Consultancy is proud to announce the launch of our comprehensive AI adoption framework, 
              designed to help organizations navigate the complex landscape of artificial intelligence implementation 
              while maintaining the highest standards of privacy, cybersecurity, and operational agility.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">The PCA Framework</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Our innovative PCA (Privacy, Cybersecurity, Agile) framework represents a holistic approach to AI adoption 
              that addresses the three critical pillars of successful digital transformation:
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-aiwia-blue">Privacy-First AI Implementation</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              In an era where data protection regulations are increasingly stringent, our framework ensures that 
              privacy considerations are embedded from the ground up. We help organizations implement AI systems 
              that comply with GDPR, PDPA, and other global privacy standards while maximizing the value of their data assets.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-aiwia-blue">Cybersecurity Integration</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              AI systems introduce new attack vectors and security challenges. Our framework incorporates robust 
              cybersecurity measures including secure AI model deployment, data encryption, access controls, and 
              continuous monitoring to protect against emerging threats.
            </p>

            <h3 className="text-2xl font-semibold mb-3 mt-6 text-aiwia-blue">Agile Methodology Adoption</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Traditional waterfall approaches to AI implementation often fail to keep pace with rapidly evolving 
              technologies. Our agile methodology ensures iterative development, rapid prototyping, and continuous 
              improvement throughout the AI adoption journey.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">Key Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
              <li>Reduced implementation time by up to 40%</li>
              <li>Enhanced compliance with international standards</li>
              <li>Improved security posture and risk management</li>
              <li>Greater stakeholder buy-in through transparent processes</li>
              <li>Sustainable and scalable AI solutions</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-8 text-aiwia-black border-b-2 border-aiwia-blue pb-2">Industry Impact</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              Early adopters of our PCA framework have reported significant improvements in their AI deployment 
              success rates and regulatory compliance. Organizations across finance, healthcare, and technology 
              sectors are already benefiting from this structured approach to AI adoption.
            </p>

            <p className="text-lg leading-relaxed mb-6 text-gray-700 italic bg-gray-50 p-4 border-l-4 border-aiwia-blue rounded">
              "The PCA framework has transformed how we approach AI projects," says a leading technology executive. 
              "We now have confidence that our AI initiatives are not only innovative but also secure and compliant."
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AIWIAPCAFramework;
