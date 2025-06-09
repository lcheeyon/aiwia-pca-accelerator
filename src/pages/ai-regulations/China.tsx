
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const China = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-aiwia-blue-light/10">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-aiwia-blue to-aiwia-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            China AI Law
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Exploring China's comprehensive approach to AI regulation and governance
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Modern technology and coding representing China's AI industry"
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
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">China's AI Regulatory Framework</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  China has developed a comprehensive AI regulatory framework that emphasizes both innovation promotion and risk management. The approach combines national strategies with specific regulations for different AI applications.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Key Characteristics</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Sectoral and application-specific approach</li>
                      <li>Strong government oversight and control</li>
                      <li>Innovation-supporting measures</li>
                      <li>Social stability and security focus</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Regulatory Philosophy</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Promote development while managing risks</li>
                      <li>Ensure data security and privacy</li>
                      <li>Maintain social order and stability</li>
                      <li>Support technological self-reliance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Regulations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Major AI Regulations</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Algorithmic Recommendation Management Provisions
                    <Badge variant="secondary">2022</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Regulates algorithm-driven recommendation services, requiring transparency, user control, and content responsibility. <a href="https://www.chinalawtranslate.com/en/algorithmic-recommendation-management-provisions/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Algorithm transparency requirements</li>
                    <li>User choice and control mechanisms</li>
                    <li>Content filtering and moderation</li>
                    <li>Data protection and privacy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Deep Synthesis Provisions
                    <Badge variant="secondary">2023</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Addresses AI-generated content including deepfakes, virtual avatars, and other synthetic media. <a href="https://www.chinalawtranslate.com/en/deep-synthesis-provisions/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Deepfake labeling and disclosure</li>
                    <li>Content verification systems</li>
                    <li>Prohibition of illegal content generation</li>
                    <li>Platform responsibility for moderation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Draft Measures for Generative AI Services
                    <Badge variant="outline">2023-2024</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Comprehensive regulations for generative AI services including large language models and AI chatbots. <a href="https://www.chinalawtranslate.com/en/draft-measures-for-generative-ai-services/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Pre-launch security assessments</li>
                    <li>Content quality and accuracy requirements</li>
                    <li>Data governance and protection</li>
                    <li>Model training data compliance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Data and Privacy Framework */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Data Governance Framework</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information Protection Law (PIPL)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    China's comprehensive privacy law with significant implications for AI systems processing personal data. <a href="https://www.chinalawtranslate.com/en/personal-information-protection-law/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Consent requirements for data processing</li>
                    <li>Data minimization principles</li>
                    <li>Cross-border data transfer restrictions</li>
                    <li>Automated decision-making provisions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Security Law (DSL)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Establishes data security obligations for organizations processing important data. <a href="https://www.chinalawtranslate.com/en/data-security-law/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Data classification and protection</li>
                    <li>Important data processing requirements</li>
                    <li>Security assessment obligations</li>
                    <li>Incident response and reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Cybersecurity Law (CSL)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Foundational cybersecurity framework affecting AI systems and critical infrastructure. <a href="https://www.chinalawtranslate.com/en/cybersecurity-law/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>Critical information infrastructure protection</li>
                    <li>Network security level protection</li>
                    <li>Data localization requirements</li>
                    <li>Cybersecurity review mechanisms</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>National Intelligence Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">
                    Provides legal framework for intelligence gathering with implications for AI and data access. <a href="https://www.chinalawtranslate.com/en/national-intelligence-law/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">View English translation</a>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    <li>State intelligence gathering authority</li>
                    <li>Cooperation obligations for organizations</li>
                    <li>National security considerations</li>
                    <li>Cross-border data access implications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Industry-Specific Regulations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Sector-Specific Guidance</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="http://www.pbc.gov.cn/en/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">PBOC fintech regulations</a></li>
                    <li>AI risk management in banking</li>
                    <li>Credit scoring and lending algorithms</li>
                    <li>Insurance AI applications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://en.nmpa.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">NMPA medical AI device approvals</a></li>
                    <li>Clinical trial data requirements</li>
                    <li>Health data protection measures</li>
                    <li>Telemedicine AI applications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Autonomous Vehicles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">MIIT testing and deployment standards</a></li>
                    <li>Data collection and mapping restrictions</li>
                    <li>Safety certification requirements</li>
                    <li>Local partnership mandates</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Social Credit Systems</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><a href="https://www.creditchina.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Individual and corporate scoring systems</a></li>
                    <li>Data integration requirements</li>
                    <li>Behavioral monitoring and analysis</li>
                    <li>Reward and penalty mechanisms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enforcement and Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Enforcement Framework</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  China's AI regulatory enforcement involves multiple agencies with overlapping jurisdictions and strong penalty structures.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Key Regulators</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li><a href="http://www.cac.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Cyberspace Administration of China (CAC)</a></li>
                      <li><a href="https://www.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Ministry of Industry and Information Technology (MIIT)</a></li>
                      <li><a href="https://www.samr.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">State Administration for Market Regulation (SAMR)</a></li>
                      <li><a href="https://www.mps.gov.cn/" target="_blank" rel="noopener noreferrer" className="text-aiwia-blue hover:underline">Ministry of Public Security (MPS)</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-aiwia-gray-dark mb-2">Compliance Measures</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Algorithm registration and filing</li>
                      <li>Security assessments and audits</li>
                      <li>Content moderation requirements</li>
                      <li>Regular compliance reporting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* International Implications */}
          <div>
            <h2 className="text-3xl font-bold text-aiwia-gray-dark mb-8">Global Impact and Considerations</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">
                  China's AI regulations have significant implications for multinational companies and global AI development:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>Extraterritorial Effects:</strong> Regulations affecting global AI companies operating in China</li>
                  <li><strong>Technology Transfer:</strong> Requirements for sharing AI technologies and data</li>
                  <li><strong>Standards Competition:</strong> Alternative technical standards and governance models</li>
                  <li><strong>Data Sovereignty:</strong> Strict controls on cross-border data flows and AI model training</li>
                  <li><strong>Innovation Ecosystem:</strong> State-led AI development and international competition</li>
                  <li><strong>Compliance Complexity:</strong> Navigating multiple overlapping regulatory frameworks</li>
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

export default China;
