
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Singapore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-aiwia-blue-light/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-aiwia-blue to-aiwia-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Singapore AI Framework
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Exploring Singapore's comprehensive approach to AI governance and regulation
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Singapore skyline representing AI governance"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Singapore's AI Governance Framework</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <a href="https://www.pdpc.gov.sg/Help-and-Resources/2020/01/Model-AI-Governance-Framework" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      Model AI Governance Framework
                    </a>
                    <Badge variant="secondary">2019-2023</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Singapore's Model AI Governance Framework provides practical guidance for organizations to address key ethical and governance issues when deploying AI solutions.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Self-assessment guide for AI governance</li>
                    <li>Industry-agnostic principles</li>
                    <li>Focus on practical implementation</li>
                    <li>Voluntary adoption framework</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <a href="https://aiverifyfoundation.sg/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      AI Verify Foundation
                    </a>
                    <Badge variant="secondary">2022</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    AI Verify is the world's first AI testing framework and software toolkit that validates the performance of AI systems against internationally accepted AI governance principles.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Technical testing capabilities</li>
                    <li>Process checks for governance</li>
                    <li>Open source and vendor-neutral</li>
                    <li>Industry collaboration platform</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Principles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Key Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Human-Centric</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    AI systems should augment human capabilities and maintain human oversight in decision-making processes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Explainable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    AI decisions should be interpretable and explainable to stakeholders, especially in high-stakes applications.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fair & Inclusive</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    AI systems should be designed to be fair, unbiased, and inclusive, avoiding discrimination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Regulatory Landscape */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Regulatory Developments</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-aiwia-gray-dark mb-3">
                      <a href="https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                        Personal Data Protection Act (PDPA)
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Singapore's PDPA governs the collection, use, and disclosure of personal data, with specific implications for AI systems that process personal information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-aiwia-gray-dark mb-3">
                      <a href="https://www.mas.gov.sg/regulation/guidelines/guidelines-on-fairness-ethics-accountability-and-transparency" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                        Financial Services Regulations
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-2">
                      MAS (Monetary Authority of Singapore) has issued guidelines for AI and data analytics in financial services, emphasizing fairness, ethics, accountability, and transparency (FEAT).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-aiwia-gray-dark mb-3">
                      <a href="https://www.hsa.gov.sg/medical-devices/overview" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                        Healthcare AI Guidelines
                      </a>
                    </h3>
                    <p className="text-gray-600 mb-2">
                      HSA (Health Sciences Authority) provides regulatory pathways for AI-based medical devices and software as medical devices (SaMD).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Implementation Support */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Implementation Support</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://www.imda.gov.sg/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      IMDA Initiatives
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://aisingapore.org/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Singapore program</a></li>
                    <li>Industry transformation maps</li>
                    <li>AI apprenticeship programs</li>
                    <li>Sandbox environments for testing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Public-Private Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>AI Verify Foundation collaboration</li>
                    <li>Industry working groups</li>
                    <li>Research partnerships with universities</li>
                    <li>International cooperation initiatives</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Future Outlook */}
          <div>
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Future Outlook</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Singapore continues to evolve its AI governance approach, balancing innovation with responsible AI development. Key focus areas include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Enhanced AI testing methodologies</li>
                  <li>Cross-border AI governance cooperation</li>
                  <li>Sectoral AI guidelines development</li>
                  <li>AI literacy and capability building</li>
                  <li>Continuous framework updates based on technological advances</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Singapore;
