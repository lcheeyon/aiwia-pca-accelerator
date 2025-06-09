
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
            Global AI Governance Landscape
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Exploring AI regulations and frameworks worldwide
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1527269534026-c86f47040a1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Global network representing worldwide AI governance"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* International Organizations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">International AI Governance Initiatives</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://oecd.ai/en/ai-principles" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      OECD AI Principles
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    The OECD AI Principles provide the first intergovernmental standard for AI, adopted by 42 countries.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Human-centered values and fairness</li>
                    <li>Transparency and explainability</li>
                    <li>Robustness, security and safety</li>
                    <li>Accountability</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://www.un.org/en/ai-advisory-body" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      UN AI Advisory Body
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    The United Nations AI Advisory Body was established to examine AI governance and provide recommendations for international cooperation.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Global AI governance coordination</li>
                    <li>Capacity building initiatives</li>
                    <li>Risk assessment frameworks</li>
                    <li>International standards development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://gpai.ai/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      Global Partnership on AI (GPAI)
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    GPAI is a multi-stakeholder initiative bringing together experts from industry, civil society, governments, and academia.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Responsible AI development</li>
                    <li>Human rights and inclusion</li>
                    <li>Innovation and commercialization</li>
                    <li>Data governance and future of work</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Regional Approaches */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Regional AI Governance Approaches</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>United Kingdom</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.gov.uk/government/publications/ai-white-paper" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI White Paper</a> - Principles-based approach</li>
                    <li><a href="https://www.gov.uk/government/organisations/office-for-artificial-intelligence" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Office for AI</a> coordination</li>
                    <li><a href="https://www.alanturing.ac.uk/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Alan Turing Institute</a> research</li>
                    <li>Sector-specific regulatory guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Canada</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://ised-isde.canada.ca/site/ised/en/consultations/consultation-artificial-intelligence-and-data-commissioner-canada" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Artificial Intelligence and Data Act (AIDA)</a></li>
                    <li><a href="https://www.cifar.ca/ai/pan-canadian-artificial-intelligence-strategy" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Pan-Canadian AI Strategy</a></li>
                    <li><a href="https://www.priv.gc.ca/en/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Privacy Commissioner guidance</a></li>
                    <li>Federal AI guidelines</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Japan</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www8.cao.go.jp/cstp/ai/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Strategy 2022</a></li>
                    <li><a href="https://www.soumu.go.jp/main_sosiki/joho_tsusin/eng/presentation/pdf/AI_Governance_Guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Governance Guidelines</a></li>
                    <li>Society 5.0 initiative</li>
                    <li>Human-centric AI principles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>South Korea</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.msit.go.kr/eng/bbs/view.do?sCode=eng&mId=4&mPid=2&pageIndex=&bbsSeqNo=42&nttSeqNo=644" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">K-Digital New Deal</a></li>
                    <li><a href="https://www.msit.go.kr/eng/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Ethics Standards</a></li>
                    <li>National AI Strategy</li>
                    <li>Digital innovation framework</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Australia</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">AI Ethics Framework</a></li>
                    <li><a href="https://www.oaic.gov.au/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Privacy Act considerations</a></li>
                    <li>National AI Action Plan</li>
                    <li>Responsible AI principles</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>India</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.niti.gov.in/writereaddata/files/document_publication/NationalStrategy-for-AI-Discussion-Paper.pdf" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Strategy</a></li>
                    <li><a href="https://www.meity.gov.in/responsible-ai" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Responsible AI guidelines</a></li>
                    <li>Digital India initiative</li>
                    <li>AI for social good focus</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emerging Markets */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Emerging Market Approaches</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Brazil</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/transformacaodigital/inteligencia-artificial" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Brazilian AI Strategy</a></li>
                    <li><a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/lei/l13709.htm" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">LGPD privacy law</a></li>
                    <li>AI regulatory framework development</li>
                    <li>Digital transformation initiatives</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>UAE</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/federal-governments-strategies-and-plans/uae-strategy-for-artificial-intelligence-2031" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">UAE AI Strategy 2031</a></li>
                    <li>AI governance framework</li>
                    <li>Smart city initiatives</li>
                    <li>Innovation sandboxes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Israel</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.gov.il/he/departments/general/artificial_intelligence" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">National AI Initiative</a></li>
                    <li>AI ethics committee</li>
                    <li>Defense AI applications</li>
                    <li>Innovation ecosystem support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mexico</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>AI strategy development</li>
                    <li>Digital government initiatives</li>
                    <li>Privacy law considerations</li>
                    <li>Regional cooperation efforts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Standards and Technical Organizations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">International Standards Organizations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://www.iso.org/committee/6794475.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      ISO/IEC JTC 1/SC 42
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>ISO/IEC 23053: Framework for AI systems using ML</li>
                    <li>ISO/IEC 23094: AI risk management</li>
                    <li>ISO/IEC 25059: AI system quality evaluation</li>
                    <li>ISO/IEC 27563: AI use case security</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://www.ieee.org/standards-index.html" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      IEEE Standards
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>IEEE 2857: Privacy engineering for AI</li>
                    <li>IEEE 2858: Organizational governance of AI</li>
                    <li>IEEE 3652: Guide for architectural framework of AI</li>
                    <li>IEEE P2857: Ethical design process</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://www.itu.int/en/ITU-T/focusgroups/ai4h/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      ITU AI Standards
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>AI for health focus group</li>
                    <li>AI/ML in 5G networks</li>
                    <li>AI governance recommendations</li>
                    <li>Global AI standardization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>
                    <a href="https://www.iec.ch/dyn/www/f?p=103:7:0::::FSP_ORG_ID:1316" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">
                      IEC Systems Committee on AI
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>AI system safety standards</li>
                    <li>Functional safety in AI</li>
                    <li>AI testing and validation</li>
                    <li>Industrial AI applications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Challenges and Future Directions */}
          <div>
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Global Challenges and Future Directions</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-3">Key Challenges</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Regulatory fragmentation and inconsistency</li>
                      <li>Cross-border enforcement challenges</li>
                      <li>Technical complexity and rapid innovation</li>
                      <li>Resource constraints in developing countries</li>
                      <li>Balancing innovation with protection</li>
                      <li>Industry compliance costs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-3">Future Priorities</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>International harmonization efforts</li>
                      <li>Mutual recognition agreements</li>
                      <li>Capacity building initiatives</li>
                      <li>Multi-stakeholder governance models</li>
                      <li>Adaptive regulatory frameworks</li>
                      <li>Global AI safety standards</li>
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
