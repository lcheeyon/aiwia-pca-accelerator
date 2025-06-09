
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EUAIAct = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-aiwia-blue-light/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-aiwia-blue to-aiwia-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            EU AI Act
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            The world's first comprehensive AI regulation framework
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="European Parliament building representing EU AI governance"
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
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">EU AI Act Overview</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  The <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">EU AI Act</a>, formally adopted in 2024, is the world's first comprehensive legal framework for artificial intelligence. It takes a risk-based approach to AI regulation, categorizing AI systems by their potential impact on safety and fundamental rights.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Risk-based regulatory approach</li>
                      <li>Extraterritorial application</li>
                      <li>Substantial penalties for non-compliance</li>
                      <li>Innovation-friendly provisions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Timeline</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Adopted: May 2024</li>
                      <li>Entry into force: August 2024</li>
                      <li>Full application: August 2026</li>
                      <li>Prohibited practices: February 2025</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Risk Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Risk-Based Classification</h2>
            <div className="grid gap-6">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Unacceptable Risk
                    <Badge variant="destructive">Prohibited</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">AI systems that pose an unacceptable risk to safety or fundamental rights are banned.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Cognitive behavioral manipulation</li>
                    <li>Social scoring systems</li>
                    <li>Real-time remote biometric identification in public spaces</li>
                    <li>Predictive policing based on profiling</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    High Risk
                    <Badge variant="secondary">Strict Requirements</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">AI systems with significant impact on safety or fundamental rights require strict compliance.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Medical devices and safety components</li>
                    <li>Education and vocational training</li>
                    <li>Employment and worker management</li>
                    <li>Essential private and public services</li>
                    <li>Law enforcement and migration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-yellow-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Limited Risk
                    <Badge variant="outline">Transparency Obligations</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">AI systems that interact with humans must ensure transparency.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Chatbots and conversational AI</li>
                    <li>Emotion recognition systems</li>
                    <li>Biometric categorization systems</li>
                    <li>AI-generated content (deepfakes)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Minimal Risk
                    <Badge variant="outline">No Restrictions</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Most AI systems fall into this category with no specific legal obligations under the AI Act, such as AI-enabled video games or spam filters.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* High-Risk System Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">High-Risk System Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Risk management system</li>
                    <li>Data governance and quality</li>
                    <li>Technical documentation</li>
                    <li>Record-keeping and logging</li>
                    <li>Transparency and user information</li>
                    <li>Human oversight measures</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Obligations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Conformity assessment procedures</li>
                    <li>CE marking requirements</li>
                    <li>EU declaration of conformity</li>
                    <li>Post-market monitoring</li>
                    <li>Incident reporting</li>
                    <li>Fundamental rights impact assessment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Foundation Models */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Foundation Models Regulation</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  The AI Act introduces specific obligations for foundation models, particularly those with systemic risk (GPAI models with compute ≥ 10^25 FLOPs).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">General Purpose AI Models</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Technical documentation requirements</li>
                      <li>Copyright compliance information</li>
                      <li>Training data summary</li>
                      <li>Downstream provider information</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Systemic Risk Models</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Model evaluation procedures</li>
                      <li>Adversarial testing</li>
                      <li>Systemic risk assessment</li>
                      <li>Incident reporting to EU authorities</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enforcement and Penalties */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Enforcement & Penalties</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  The AI Act provides for substantial administrative fines, calculated as a percentage of global annual turnover or fixed amounts, whichever is higher.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Penalty Structure</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Prohibited AI: Up to 7% of global turnover or €35M</li>
                      <li>High-risk non-compliance: Up to 3% or €15M</li>
                      <li>Other violations: Up to 1.5% or €7.5M</li>
                      <li>Incorrect information: Up to 1% or €7.5M</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Enforcement Bodies</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>National competent authorities</li>
                      <li>Market surveillance authorities</li>
                      <li>Notified bodies for conformity assessment</li>
                      <li><a href="https://digital-strategy.ec.europa.eu/en/policies/ai-office" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">EU AI Office</a> for foundation models</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Innovation Support */}
          <div>
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Innovation Support Measures</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  The AI Act includes several measures to support innovation while ensuring compliance:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>AI Regulatory Sandboxes:</strong> Controlled environments for testing innovative AI systems</li>
                  <li><strong>Real-world testing:</strong> Provisions for testing AI systems in real-world conditions</li>
                  <li><strong>SME support:</strong> Reduced compliance burdens and support measures for small enterprises</li>
                  <li><strong>Standards development:</strong> Harmonized standards to facilitate compliance</li>
                  <li><strong>Codes of practice:</strong> Industry-developed guidance for implementation</li>
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

export default EUAIAct;
