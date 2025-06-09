
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const USA = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-aiwia-blue-light/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-aiwia-blue to-aiwia-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            USA AI Regulations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Understanding the evolving landscape of AI governance in the United States
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1589308078059-be1415eab4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Washington DC Capitol building representing US AI governance"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Executive Order */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Executive Order on AI (October 2023)</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Safe, Secure, and Trustworthy AI
                  <Badge variant="secondary">Executive Order 14110</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  President Biden's comprehensive executive order establishes new standards for AI safety and security, protects privacy, advances equity and civil rights, and promotes innovation and competition.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Key Provisions</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Safety and security standards for AI systems</li>
                      <li>Privacy protection measures</li>
                      <li>Equity and civil rights safeguards</li>
                      <li>Innovation and competition promotion</li>
                      <li>International cooperation initiatives</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Implementation Timeline</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>90 days: Safety and security guidelines</li>
                      <li>180 days: Privacy guidance</li>
                      <li>270 days: NIST AI Risk Management Framework</li>
                      <li>365 days: Comprehensive implementation report</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Federal Agency Actions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Federal Agency Initiatives</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>NIST AI Risk Management Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    The National Institute of Standards and Technology (NIST) AI RMF provides a comprehensive approach to AI risk management.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Voluntary framework for organizations</li>
                    <li>Risk-based approach to AI governance</li>
                    <li>Continuous monitoring and improvement</li>
                    <li>Cross-sector applicability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>FTC AI Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    The Federal Trade Commission focuses on consumer protection and fair competition in AI markets.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Algorithmic accountability measures</li>
                    <li>Deceptive AI practices enforcement</li>
                    <li>Bias and discrimination prevention</li>
                    <li>Consumer privacy protection</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>EEOC AI Employment Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    The Equal Employment Opportunity Commission addresses AI use in employment decisions.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Anti-discrimination in hiring algorithms</li>
                    <li>Reasonable accommodations for AI systems</li>
                    <li>Employee monitoring and surveillance limits</li>
                    <li>Transparency in AI-driven decisions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* State-Level Initiatives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">State-Level Regulations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>California AI Legislation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>SB 1001:</strong> Bot disclosure requirements</li>
                    <li><strong>AB 2273:</strong> Children's data protection</li>
                    <li><strong>Proposed SB 1047:</strong> AI safety requirements</li>
                    <li><strong>CCPA/CPRA:</strong> Privacy rights affecting AI</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other State Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>New York:</strong> AI bias auditing requirements</li>
                    <li><strong>Illinois:</strong> Biometric privacy protections</li>
                    <li><strong>Texas:</strong> Deepfake criminalization</li>
                    <li><strong>Washington:</strong> Facial recognition limitations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sectoral Regulations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Sector-Specific Regulations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Fed, OCC, FDIC AI risk management guidance</li>
                    <li>Fair lending and credit decisioning</li>
                    <li>Model risk management frameworks</li>
                    <li>Stress testing AI systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>FDA AI/ML-based medical device pathway</li>
                    <li>HIPAA privacy considerations</li>
                    <li>Clinical decision support regulations</li>
                    <li>AI software as medical device (SaMD)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Transportation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>NHTSA autonomous vehicle guidelines</li>
                    <li>FAA AI in aviation systems</li>
                    <li>DOT AI strategic plan</li>
                    <li>Federal motor vehicle safety standards</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Defense & National Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>DoD AI ethical principles</li>
                    <li>Export controls on AI technology</li>
                    <li>CFIUS review of AI investments</li>
                    <li>NSCAI recommendations implementation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Congressional Activity */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Congressional Initiatives</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  Congress has been actively exploring AI legislation, with various bills introduced addressing different aspects of AI governance:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Proposed Legislation</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Algorithmic Accountability Act</li>
                      <li>AI in Government Act</li>
                      <li>National AI Initiative Act (enacted 2020)</li>
                      <li>CREATE AI Act</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Key Focus Areas</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Algorithmic transparency and accountability</li>
                      <li>AI research and development funding</li>
                      <li>Workforce development and training</li>
                      <li>International AI competitiveness</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Outlook */}
          <div>
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Future Regulatory Outlook</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  The US AI regulatory landscape continues to evolve rapidly, with several trends shaping future development:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Comprehensive Federal Legislation:</strong> Movement toward unified AI governance framework</li>
                  <li><strong>International Coordination:</strong> Collaboration with allies on AI standards and norms</li>
                  <li><strong>Industry Self-Regulation:</strong> Voluntary commitments and best practices development</li>
                  <li><strong>Technical Standards:</strong> Development of measurable AI safety and performance standards</li>
                  <li><strong>Privacy-First Approach:</strong> Integration of privacy protections into AI regulations</li>
                  <li><strong>Innovation Balance:</strong> Maintaining US technological leadership while ensuring safety</li>
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

export default USA;
