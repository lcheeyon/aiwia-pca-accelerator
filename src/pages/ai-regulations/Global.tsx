
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
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Global meeting with technology displays representing worldwide AI governance"
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
                      <li><a href="https://www.g7uk.org/g7-digital-and-technology-track/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">G7 AI principles</a></li>
                      <li><a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">OECD AI guidelines</a></li>
                      <li><a href="https://www.un.org/en/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">UN AI governance</a></li>
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
                        <li><a href="https://www.meti.go.jp/english/press/2021/0109_002.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Governance Guidelines (2021)</a></li>
                        <li><a href="https://www8.cao.go.jp/cstp/english/society5_0/index.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Society 5.0 framework</a></li>
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
                        <li><a href="https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&pageIndex=&bbsSeqNo=42&nttSeqNo=621&searchOpt=&searchTxt=" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Strategy (2019)</a></li>
                        <li><a href="https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&pageIndex=&bbsSeqNo=42&nttSeqNo=657&searchOpt=&searchTxt=" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Ethics Standards (2020)</a></li>
                        <li><a href="https://english.mospa.go.kr/eng/a_02/a_02_03/a_02_03_01.jsp" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">K-Digital New Deal</a></li>
                        <li><a href="https://www.pipc.go.kr/cmt/not/ntc/selectBoardArticle.do?bbsId=BBSMSTR_000000000121&nttId=8186" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Personal Information Protection Act</a></li>
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
                        <li><a href="https://www.industry.gov.au/data-and-publications/building-australias-artificial-intelligence-capability/ai-ethics-framework" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Ethics Framework (2019)</a></li>
                        <li><a href="https://www.industry.gov.au/data-and-publications/australias-artificial-intelligence-action-plan" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Australia's AI Action Plan</a></li>
                        <li><a href="https://www.oaic.gov.au/privacy/the-privacy-act" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Privacy Act considerations</a></li>
                        <li><a href="https://www.accc.gov.au/business/consumer-data-right" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Consumer Data Right</a></li>
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
                        <li><a href="https://www.niti.gov.in/sites/default/files/2023-03/National-Strategy-for-Artificial-Intelligence.pdf" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Strategy (2018)</a></li>
                        <li><a href="https://www.meity.gov.in/responsible-ai" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Responsible AI principles</a></li>
                        <li><a href="https://www.meity.gov.in/content/digital-personal-data-protection-act-2023" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Digital Personal Data Protection Act</a></li>
                        <li><a href="https://www.niti.gov.in/ai" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI for All initiative</a></li>
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
                    <li><a href="https://www.gov.uk/government/publications/national-ai-strategy" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Strategy (2021)</a></li>
                    <li><a href="https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI White Paper (2023)</a></li>
                    <li>Pro-innovation regulation principles</li>
                    <li><a href="https://www.aisi.gov.uk/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Safety Institute establishment</a></li>
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
                    <li><a href="https://www.bakom.admin.ch/bakom/en/homepage/digital-switzerland-and-internet/digital-switzerland/digital-switzerland-strategy.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Digital Switzerland Strategy</a></li>
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
                    <li><a href="https://www.regjeringen.no/en/dokumenter/national-strategy-for-artificial-intelligence/id2685594/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Strategy</a></li>
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
                    <li><a href="https://www.parl.ca/DocumentViewer/en/44-1/bill/C-27/third-reading" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Proposed Artificial Intelligence and Data Act (AIDA)</a></li>
                    <li><a href="https://www.ic.gc.ca/eic/site/ai-ia.nsf/eng/home" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Pan-Canadian AI Strategy</a></li>
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
                    <li><a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligenciaartificial" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Brazilian AI Strategy (2021)</a></li>
                    <li>AI legal framework development</li>
                    <li><a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">LGPD privacy law application</a></li>
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
                    <li><a href="https://www.gob.cl/en/ministries/interior-and-public-security/national-artificial-intelligence-policy/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Policy</a></li>
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
                    <li><a href="https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/federal-governments-strategies-and-plans/uae-strategy-for-artificial-intelligence-2031" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">UAE AI Strategy 2031</a></li>
                    <li><a href="https://www.mbrif.gov.ae/en/ai-ethics-guidelines" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Ethics Guidelines</a></li>
                    <li><a href="https://www.dubaifuture.gov.ae/our-initiatives/dubai-ai-roadmap-2071/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Dubai AI roadmap</a></li>
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
                    <li><a href="https://www.gov.il/en/departments/policies/artificial_intelligence_initiative" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Initiative</a></li>
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
                    <li><a href="https://popia.co.za/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">POPI Act compliance</a></li>
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
                    <li><a href="https://ndpr.gov.ng/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Data protection framework</a></li>
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
                      <p className="text-gray-600 mb-2">The <a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">OECD AI Principles</a> provide international consensus on responsible AI stewardship.</p>
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
                    <li><a href="https://www.iso.org/standard/74438.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">ISO/IEC 23053: Framework for AI systems using ML</a></li>
                    <li><a href="https://www.iso.org/standard/77304.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">ISO/IEC 23894: AI risk management</a></li>
                    <li><a href="https://www.iso.org/standard/77154.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">ISO/IEC 23007: Lifecycle processes for AI systems</a></li>
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
                    <li><a href="https://aiforgood.itu.int/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI for Good Global Summit</a></li>
                    <li><a href="https://www.un.org/en/artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">High-level Advisory Body on AI</a></li>
                    <li><a href="https://en.unesco.org/artificial-intelligence/ethics" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">UNESCO AI Ethics Recommendation</a></li>
                    <li><a href="https://www.itu.int/en/ITU-T/AI/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">ITU AI for Good platform</a></li>
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
