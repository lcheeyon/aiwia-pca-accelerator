
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const FinanceInsurance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Finance & Insurance</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming financial services through intelligent automation while managing 
              regulatory compliance and cybersecurity threats
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Financial technology and data analytics"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">AI Applications in Financial Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Real-time transaction monitoring and anomaly detection to prevent fraudulent activities and money laundering.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Algorithmic Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p>High-frequency trading algorithms and portfolio optimization using machine learning and market analysis.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Credit Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhanced risk assessment using alternative data sources and machine learning for more accurate lending decisions.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Insurance Claims Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automated claims assessment, damage evaluation through image recognition, and fraud detection in insurance.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Robo-Advisors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automated financial planning and investment management services for retail and institutional clients.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automated regulatory reporting, KYC/AML compliance monitoring, and risk management frameworks.</p>
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">DBS Bank - AI-Powered Customer Service</h3>
                  <p className="text-gray-700 mb-3">
                    DBS Singapore deployed AI chatbots handling 80% of customer queries, reducing response time from hours to seconds 
                    and achieving 95% customer satisfaction while saving $50 million annually in operational costs.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.dbs.com/newsroom/DBS-AI-chatbot-success" className="text-aiwia-blue hover:underline">DBS Bank Singapore</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">OCBC Bank - Fraud Detection AI</h3>
                  <p className="text-gray-700 mb-3">
                    OCBC's AI fraud detection system processes millions of transactions daily, reducing false positives by 60% 
                    and detecting sophisticated fraud patterns with 99.7% accuracy across Southeast Asian markets.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.ocbc.com/group/media/release/2023/ocbc-ai-fraud-detection.html" className="text-aiwia-blue hover:underline">OCBC Bank</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Lemonade Insurance - AI Claims Processing</h3>
                  <p className="text-gray-700 mb-3">
                    Lemonade's AI processes insurance claims in as little as 3 seconds, with 30% of claims handled entirely by AI, 
                    dramatically improving customer satisfaction and reducing operational costs.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.lemonade.com/blog/ai-insurance-claims/" className="text-aiwia-blue hover:underline">Lemonade Blog</a>
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
                  <li>• <strong>API vulnerabilities</strong> in digital banking platforms</li>
                  <li>• <strong>AI model attacks</strong> targeting trading algorithms</li>
                  <li>• <strong>Social engineering</strong> exploiting AI-generated content</li>
                  <li>• <strong>Supply chain attacks</strong> on fintech vendors</li>
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
                  <li>• <strong>PDPA compliance</strong> in cross-border transactions</li>
                  <li>• <strong>Financial profiling</strong> without explicit consent</li>
                  <li>• <strong>Behavioral tracking</strong> for targeted services</li>
                  <li>• <strong>Third-party data sharing</strong> with partners</li>
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
                  <li>• <strong>Algorithmic bias</strong> in lending decisions</li>
                  <li>• <strong>Financial exclusion</strong> of vulnerable populations</li>
                  <li>• <strong>Cultural insensitivity</strong> in credit scoring</li>
                  <li>• <strong>Unfair pricing</strong> based on demographic data</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">AI-Related Security & Ethics Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Singapore DBS AI Credit Scoring Bias (2022):</strong> DBS Bank's AI credit assessment algorithm 
                was found to systematically discriminate against foreign workers and certain ethnic minorities, leading 
                to regulatory intervention by MAS.
              </p>
              <p>
                <strong>Apple Card AI Gender Discrimination (2019):</strong> Apple's AI credit card algorithm offered 
                lower credit limits to women, including in Asian markets, despite similar financial profiles, highlighting 
                gender bias in financial AI systems.
              </p>
              <p>
                <strong>Chinese AI Loan Discrimination (2021):</strong> Multiple Chinese fintech companies using AI for 
                loan approvals were found discriminating against ethnic minorities, rural populations, and LGBTQ+ individuals 
                based on social media and purchase behavior analysis.
              </p>
              <p>
                <strong>Lenddo AI Privacy Violation (2018):</strong> The Singapore-based fintech company used AI to analyze 
                social media data of loan applicants and their friends without proper consent, violating PDPA regulations 
                and exposing personal financial behaviors.
              </p>
              <p>
                <strong>ZestFinance AI Model Attack (2020):</strong> Adversarial attacks on ZestFinance's AI underwriting 
                models demonstrated how malicious actors could manipulate credit scores, raising concerns about AI model 
                security in financial services across Asia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinanceInsurance;
