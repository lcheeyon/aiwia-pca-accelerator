
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">JPMorgan Chase - COIN Platform</h3>
                  <p className="text-gray-700 mb-3">
                    JPMorgan's Contract Intelligence (COIN) platform processes legal documents in seconds instead of hours, 
                    saving 360,000 hours of manual work annually and reducing errors by 90%.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.jpmorgan.com/technology/artificial-intelligence" className="text-aiwia-blue hover:underline">JPMorgan Technology</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Mastercard - AI-Powered Fraud Prevention</h3>
                  <p className="text-gray-700 mb-3">
                    Mastercard's AI system analyzes billions of transactions in real-time, achieving a 50% reduction in false positives 
                    while maintaining high fraud detection rates, saving billions in fraud losses.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.mastercard.us/en-us/business/overview/safety-and-security/safety-and-security-overview.html" className="text-aiwia-blue hover:underline">Mastercard Security</a>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">Security & Privacy Risks</h2>
          
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
                  <li>• <strong>API vulnerabilities</strong> in banking platforms</li>
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
                  <li>• <strong>Financial profiling</strong> without explicit consent</li>
                  <li>• <strong>Cross-border data transfers</strong> violating regulations</li>
                  <li>• <strong>Behavioral tracking</strong> for targeted services</li>
                  <li>• <strong>Third-party data sharing</strong> with partners</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-purple-700">Data Risks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Algorithmic bias</strong> in lending decisions</li>
                  <li>• <strong>Market manipulation</strong> through AI trading</li>
                  <li>• <strong>Data concentration</strong> creating systemic risks</li>
                  <li>• <strong>Model drift</strong> affecting risk assessments</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Notable Security Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Capital One Data Breach (2019):</strong> Cloud configuration error exposed 100 million credit card applications 
                and 140,000 Social Security numbers, resulting in $190 million in fines.
              </p>
              <p>
                <strong>Equifax Breach (2017):</strong> Personal information of 147 million consumers compromised, including credit 
                scores and financial histories, leading to $700 million in settlements.
              </p>
              <p>
                <strong>SWIFT Banking Attacks (2016-ongoing):</strong> State-sponsored groups targeted SWIFT banking network, 
                stealing over $1 billion from central banks worldwide through sophisticated malware.
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
