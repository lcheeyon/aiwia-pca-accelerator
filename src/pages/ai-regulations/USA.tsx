
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
              src="https://images.unsplash.com/photo-1529094136137-3ad9c1753e28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="United States Capitol building representing American AI governance"
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
                  <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                    Safe, Secure, and Trustworthy AI
                  </a>
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
                  <CardTitle>
                    <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      NIST AI Risk Management Framework
                    </a>
                  </CardTitle>
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
                  <CardTitle>
                    <a href="https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      FTC AI Guidance
                    </a>
                  </CardTitle>
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
                  <CardTitle>
                    <a href="https://www.eeoc.gov/newsroom/eeoc-issues-technical-assistance-document-algorithms-and-employment-discrimination" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      EEOC AI Employment Guidelines
                    </a>
                  </CardTitle>
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
                    <li><strong><a href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB1001" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">SB 1001</a>:</strong> Bot disclosure requirements</li>
                    <li><strong><a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202120220AB2273" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AB 2273</a>:</strong> Children's data protection</li>
                    <li><strong>Proposed SB 1047:</strong> AI safety requirements</li>
                    <li><strong><a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">CCPA/CPRA</a>:</strong> Privacy rights affecting AI</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other State Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>New York:</strong> <a href="https://www1.nyc.gov/site/dcwp/about/press-releases/dcwp-implements-first-of-its-kind-bias-audit-requirement.page" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI bias auditing requirements</a></li>
                    <li><strong>Illinois:</strong> <a href="https://www.ilga.gov/legislation/ilcs/ilcs3.asp?ActID=3004" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Biometric privacy protections</a></li>
                    <li><strong>Texas:</strong> Deepfake criminalization</li>
                    <li><strong>Washington:</strong> <a href="https://app.leg.wa.gov/RCW/default.aspx?cite=42.60" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Facial recognition limitations</a></li>
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
                    <li><a href="https://www.federalreserve.gov/supervisionreg/srletters/SR2304.htm" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Fed, OCC, FDIC AI risk management guidance</a></li>
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
                    <li><a href="https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">FDA AI/ML-based medical device pathway</a></li>
                    <li><a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">HIPAA privacy considerations</a></li>
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
                    <li><a href="https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">NHTSA autonomous vehicle guidelines</a></li>
                    <li><a href="https://www.faa.gov/air_traffic/technology/equipadsb/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">FAA AI in aviation systems</a></li>
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
                    <li><a href="https://www.ai.mil/docs/Implementing_Responsible_AI_in_the_Department_of_Defense.pdf" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">DoD AI ethical principles</a></li>
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
                      <li><a href="https://www.congress.gov/bill/118th-congress/senate-bill/3312" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Algorithmic Accountability Act</a></li>
                      <li><a href="https://www.congress.gov/bill/118th-congress/house-bill/5376" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI in Government Act</a></li>
                      <li><a href="https://www.congress.gov/bill/116th-congress/house-bill/6216" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Initiative Act (enacted 2020)</a></li>
                      <li><a href="https://www.congress.gov/bill/118th-congress/house-bill/2839" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">CREATE AI Act</a></li>
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
