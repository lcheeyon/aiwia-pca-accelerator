
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const Housing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Housing</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Transforming real estate and smart homes through intelligent automation while 
              protecting resident privacy and security
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">AI Applications in Housing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Smart Home Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Intelligent climate control, lighting, security systems, and energy management for enhanced comfort and efficiency.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Property Valuation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-powered automated property appraisals using market data, satellite imagery, and neighborhood analytics.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Construction Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Building design optimization, construction planning, and predictive maintenance for residential developments.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Virtual Assistants</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Voice-activated home assistants for controlling devices, answering questions, and managing household tasks.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Mortgage Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automated loan underwriting, risk assessment, and fraud detection in mortgage applications.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Facility Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Predictive maintenance, space optimization, and energy efficiency in residential and commercial buildings.</p>
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Nest - Smart Thermostat Revolution</h3>
                  <p className="text-gray-700 mb-3">
                    Google Nest thermostats use AI to learn user preferences and reduce energy consumption by 10-15%, 
                    saving homeowners an average of $145 annually while improving comfort.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://nest.com/energy-savings/" className="text-aiwia-blue hover:underline">Nest Energy Savings</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Zillow - Automated Property Valuation</h3>
                  <p className="text-gray-700 mb-3">
                    Zillow's AI-powered Zestimate provides instant property valuations for over 100 million homes, 
                    with accuracy within 5% of sale price for on-market homes, revolutionizing real estate pricing.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.zillow.com/zestimate/" className="text-aiwia-blue hover:underline">Zillow Zestimate</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Amazon - Smart Home Ecosystem</h3>
                  <p className="text-gray-700 mb-3">
                    Amazon Alexa has been adopted in over 100 million homes worldwide, enabling voice control of 100,000+ 
                    smart home devices and creating a $20 billion smart home market.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://developer.amazon.com/en-US/alexa/smart-home" className="text-aiwia-blue hover:underline">Amazon Smart Home</a>
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
                  <li>• <strong>IoT device vulnerabilities</strong> in smart home systems</li>
                  <li>• <strong>Unauthorized access</strong> to home security cameras</li>
                  <li>• <strong>Network intrusions</strong> through connected appliances</li>
                  <li>• <strong>Smart lock exploits</strong> compromising physical security</li>
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
                  <li>• <strong>Voice recording</strong> by smart assistants</li>
                  <li>• <strong>Behavioral tracking</strong> through usage patterns</li>
                  <li>• <strong>Location inference</strong> from device interactions</li>
                  <li>• <strong>Third-party data sharing</strong> with service providers</li>
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
                  <li>• <strong>Discriminatory pricing</strong> in real estate algorithms</li>
                  <li>• <strong>Biased mortgage decisions</strong> affecting minorities</li>
                  <li>• <strong>Data breaches</strong> exposing personal habits</li>
                  <li>• <strong>Platform lock-in</strong> limiting device choices</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Notable Security Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Ring Camera Breaches (2019):</strong> Hundreds of Ring security cameras were hacked, with attackers 
                speaking to children and accessing home footage, raising serious privacy and security concerns.
              </p>
              <p>
                <strong>Nest Thermostat Ransomware (2016):</strong> Attackers increased home temperatures to uncomfortable 
                levels and demanded ransom payments, demonstrating IoT device vulnerabilities.
              </p>
              <p>
                <strong>Amazon Echo Eavesdropping (2018):</strong> Multiple incidents where Alexa devices recorded private 
                conversations and sent them to random contacts, highlighting voice assistant privacy risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Housing;
