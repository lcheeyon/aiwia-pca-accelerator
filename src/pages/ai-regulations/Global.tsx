
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Global = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-aiwia-blue-light/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-aiwia-blue to-aiwia-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Global AI Regulations
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A comprehensive overview of AI regulatory frameworks worldwide
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Global connectivity representing worldwide AI governance"
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
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Global AI Governance Landscape</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  As AI technology rapidly evolves, countries worldwide are developing diverse regulatory approaches. This creates a complex global landscape where multinational organizations must navigate varying requirements, standards, and enforcement mechanisms.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Regulatory Approaches</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Comprehensive legislation</li>
                      <li>Sectoral regulations</li>
                      <li>Self-regulatory frameworks</li>
                      <li>Sandbox environments</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Key Focus Areas</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Data protection and privacy</li>
                      <li>Algorithmic transparency</li>
                      <li>Bias and discrimination</li>
                      <li>Safety and security</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">International Cooperation</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>G7 AI principles</li>
                      <li>OECD AI guidelines</li>
                      <li>UN AI governance</li>
                      <li>Regional partnerships</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Asia-Pacific Region */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Asia-Pacific Region</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Japan
                    <Badge variant="secondary">Soft Law Approach</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">Japan emphasizes industry self-regulation and international cooperation.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>AI Governance Guidelines (2021)</li>
                        <li>Society 5.0 framework</li>
                        <li>Data-free flow with trust</li>
                        <li>AI ethics principles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-gray-dark mb-1">Key Initiatives</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Partnership on AI governance</li>
                        <li>Regulatory sandbox programs</li>
                        <li>International AI research collaboration</li>
                        <li>Digital transformation support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    South Korea
                    <Badge variant="secondary">Innovation-First</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">South Korea balances AI innovation with ethical considerations.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>National AI Strategy (2019)</li>
                        <li>AI Ethics Standards (2020)</li>
                        <li>K-Digital New Deal</li>
                        <li>Personal Information Protection Act</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-gray-dark mb-1">Regulatory Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>AI-friendly regulatory environment</li>
                        <li>Sectoral AI guidelines</li>
                        <li>Innovation support measures</li>
                        <li>Public-private AI partnerships</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Australia
                    <Badge variant="secondary">Principles-Based</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">Australia adopts a principles-based approach with sector-specific guidance.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>AI Ethics Framework (2019)</li>
                        <li>Australia's AI Action Plan</li>
                        <li>Privacy Act considerations</li>
                        <li>Consumer Data Right</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-gray-dark mb-1">Implementation Focus</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Voluntary AI ethics principles</li>
                        <li>Government AI procurement guidelines</li>
                        <li>Research and development support</li>
                        <li>International AI cooperation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    India
                    <Badge variant="secondary">Digital India</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">India focuses on AI for development and inclusive growth.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>National AI Strategy (2018)</li>
                        <li>Responsible AI principles</li>
                        <li>Digital Personal Data Protection Act</li>
                        <li>AI for All initiative</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-gray-dark mb-1">Strategic Priorities</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>AI for social good</li>
                        <li>Skill development programs</li>
                        <li>Data governance framework</li>
                        <li>AI research ecosystem</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Europe (Non-EU) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">European (Non-EU) Countries</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>United Kingdom</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">UK pursues a principles-based, innovation-friendly approach to AI regulation.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Strategy (2021)</li>
                    <li>AI White Paper (2023)</li>
                    <li>Pro-innovation regulation principles</li>
                    <li>AI Safety Institute establishment</li>
                    <li>Existing regulator approach</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Switzerland</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Switzerland emphasizes AI ethics and responsible innovation.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Digital Switzerland Strategy</li>
                    <li>AI guidelines development</li>
                    <li>Data protection alignment</li>
                    <li>Research and innovation focus</li>
                    <li>International AI cooperation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Norway</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Norway focuses on trustworthy AI and digital transformation.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Strategy</li>
                    <li>AI ethics guidelines</li>
                    <li>Public sector AI adoption</li>
                    <li>GDPR compliance framework</li>
                    <li>Nordic AI cooperation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Iceland</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Iceland leverages its unique position for AI innovation and data governance.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Data-driven society strategy</li>
                    <li>AI ethics framework</li>
                    <li>Sustainable AI development</li>
                    <li>Data center advantage</li>
                    <li>Privacy-first approach</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Americas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Americas Region</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Canada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Canada is developing comprehensive AI legislation with a human-rights focus.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Proposed Artificial Intelligence and Data Act (AIDA)</li>
                    <li>Pan-Canadian AI Strategy</li>
                    <li>AI and privacy impact assessments</li>
                    <li>Charter of Rights considerations</li>
                    <li>Innovation and ethics balance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Brazil</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Brazil is developing AI governance with focus on innovation and rights protection.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Brazilian AI Strategy (2021)</li>
                    <li>AI legal framework development</li>
                    <li>LGPD privacy law application</li>
                    <li>Digital government initiatives</li>
                    <li>Regional AI cooperation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mexico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Mexico emphasizes AI for development and digital transformation.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Strategy development</li>
                    <li>Digital government framework</li>
                    <li>AI ethics principles</li>
                    <li>Cross-border data considerations</li>
                    <li>USMCA compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Chile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Chile pursues AI governance with focus on transparency and accountability.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Policy</li>
                    <li>Algorithmic transparency initiatives</li>
                    <li>Public sector AI guidelines</li>
                    <li>Innovation ecosystem support</li>
                    <li>Regional AI standards cooperation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Middle East & Africa */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Middle East & Africa</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>United Arab Emirates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">UAE positions itself as a global AI hub with comprehensive governance framework.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>UAE AI Strategy 2031</li>
                    <li>AI Ethics Guidelines</li>
                    <li>Dubai AI roadmap</li>
                    <li>Government AI initiatives</li>
                    <li>Smart city implementations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Israel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Israel leverages its tech ecosystem for AI innovation and regulation development.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Initiative</li>
                    <li>AI ethics committee</li>
                    <li>Defense AI applications</li>
                    <li>Privacy protection framework</li>
                    <li>Innovation ecosystem support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>South Africa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">South Africa develops AI governance with focus on inclusive development.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Strategy framework</li>
                    <li>AI ethics principles</li>
                    <li>Digital transformation agenda</li>
                    <li>POPI Act compliance</li>
                    <li>African AI collaboration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nigeria</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">Nigeria emphasizes AI for economic development and digital inclusion.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>National AI Strategy development</li>
                    <li>Digital economy initiatives</li>
                    <li>AI research and development</li>
                    <li>Data protection framework</li>
                    <li>Regional technology leadership</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* International Organizations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">International Organizations & Standards</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>OECD AI Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600 mb-2">The OECD AI Principles provide international consensus on responsible AI stewardship.</p>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Inclusive growth and sustainable development</li>
                        <li>Human-centered values and fairness</li>
                        <li>Transparency and explainability</li>
                        <li>Robustness, security, and safety</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-aiwia-gray-dark mb-1">Implementation</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>National AI strategies alignment</li>
                        <li>Policy observatory</li>
                        <li>Multi-stakeholder engagement</li>
                        <li>International cooperation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ISO/IEC AI Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">International standards for AI systems and governance.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>ISO/IEC 23053: Framework for AI systems using ML</li>
                    <li>ISO/IEC 23894: AI risk management</li>
                    <li>ISO/IEC 23007: Lifecycle processes for AI systems</li>
                    <li>Ongoing standards development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UN AI Governance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">United Nations initiatives for global AI governance and cooperation.</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>AI for Good Global Summit</li>
                    <li>High-level Advisory Body on AI</li>
                    <li>UNESCO AI Ethics Recommendation</li>
                    <li>ITU AI for Good platform</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Challenges and Future Outlook */}
          <div>
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Global Challenges & Future Outlook</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-3">Key Challenges</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li><strong>Regulatory Fragmentation:</strong> Divergent approaches creating compliance complexity</li>
                      <li><strong>Jurisdictional Conflicts:</strong> Overlapping and conflicting regulatory requirements</li>
                      <li><strong>Technical Standards:</strong> Lack of unified global technical standards</li>
                      <li><strong>Enforcement Coordination:</strong> Limited cross-border enforcement cooperation</li>
                      <li><strong>Innovation vs. Regulation:</strong> Balancing innovation with risk management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-3">Future Trends</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li><strong>Regulatory Convergence:</strong> Movement toward aligned global standards</li>
                      <li><strong>Sectoral Harmonization:</strong> Industry-specific international coordination</li>
                      <li><strong>Technical Cooperation:</strong> Shared AI testing and certification frameworks</li>
                      <li><strong>Digital Trade Rules:</strong> AI provisions in international trade agreements</li>
                      <li><strong>Multi-stakeholder Governance:</strong> Increased industry and civil society participation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Global;
