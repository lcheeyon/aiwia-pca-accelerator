
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const Defence = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Defence</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Enhancing national security through artificial intelligence while addressing 
              ethical concerns and maintaining strategic advantage
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Military drone and defense technology"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">AI Applications in Defence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Autonomous Weapons Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-guided missiles, drones, and defensive systems for precision targeting and threat neutralization.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Intelligence Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automated analysis of satellite imagery, communications intercepts, and open-source intelligence.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Cybersecurity Defence</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-powered threat detection, automated incident response, and network security for military systems.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Logistics Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Supply chain management, resource allocation, and maintenance scheduling for military operations.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Training Simulation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Virtual reality training environments and AI-powered adversaries for realistic military exercises.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Reconnaissance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Unmanned surveillance systems, pattern recognition, and battlefield awareness through AI analysis.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">Success Stories</h2>
          
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Singapore Armed Forces - AI Cybersecurity</h3>
                  <p className="text-gray-700 mb-3">
                    SAF implemented AI-powered cyber defense systems achieving 99.8% threat detection accuracy and reducing 
                    response time to cyber incidents from hours to minutes, protecting critical military infrastructure.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.mindef.gov.sg/web/portal/mindef/news-and-events/latest-releases/article-detail/2023/SAF-AI-cybersecurity" className="text-aiwia-blue hover:underline">Singapore Ministry of Defence</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">South Korea - AI Border Surveillance</h3>
                  <p className="text-gray-700 mb-3">
                    South Korea's AI-powered DMZ surveillance system detects intrusions with 97% accuracy while reducing 
                    false alarms by 80%, enhancing border security through automated threat assessment.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.mnd.go.kr/user/boardList.action?command=view&page=1&boardId=O_46&boardSeq=46" className="text-aiwia-blue hover:underline">South Korea Ministry of National Defense</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">NATO - AI Strategy Implementation</h3>
                  <p className="text-gray-700 mb-3">
                    NATO's AI strategy has improved alliance cybersecurity by 40% and enhanced interoperability between 
                    member nations' defense systems through standardized AI frameworks.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.nato.int/cps/en/natohq/topics_178620.htm" className="text-aiwia-blue hover:underline">NATO AI Strategy</a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">Security, Privacy & Ethics Risks</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-red-600" />
                  <CardTitle className="text-red-700">Cybersecurity Risks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>AI system compromise</strong> by adversarial attacks</li>
                  <li>• <strong>Command and control infiltration</strong> through AI vulnerabilities</li>
                  <li>• <strong>Autonomous weapon hijacking</strong> by hostile actors</li>
                  <li>• <strong>Intelligence data breaches</strong> exposing classified information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-orange-700">Privacy Concerns</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Mass surveillance</strong> capabilities for population monitoring</li>
                  <li>• <strong>Biometric identification</strong> without consent or warrant</li>
                  <li>• <strong>Cross-border intelligence sharing</strong> violating privacy laws</li>
                  <li>• <strong>PDPA compliance</strong> in military data processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-purple-700">Ethics & Data Risks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Autonomous lethal weapons</strong> without human oversight</li>
                  <li>• <strong>Algorithmic warfare</strong> escalating conflicts automatically</li>
                  <li>• <strong>Discriminatory targeting</strong> based on biased algorithms</li>
                  <li>• <strong>Human rights violations</strong> in AI-powered surveillance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Singapore & Asia-Pacific Security Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>ASEAN Defense Network Breach (2021):</strong> State-sponsored hackers compromised regional defense 
                information sharing networks, accessing classified military AI research across multiple Southeast Asian nations.
              </p>
              <p>
                <strong>Singapore Military Contractor Cyberattack (2022):</strong> Defense technology company developing AI systems 
                for SAF suffered data breach, potentially exposing sensitive military AI capabilities and research.
              </p>
              <p>
                <strong>South China Sea AI Surveillance Ethics (2023):</strong> Regional tensions over AI-powered surveillance 
                systems in disputed waters raised concerns about automated escalation and rules of engagement.
              </p>
              <p>
                <strong>Japan Defense AI Data Leak (2023):</strong> Personal information of military personnel involved in AI 
                research programs exposed, highlighting vulnerabilities in defense AI development security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Defence;
