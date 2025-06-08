
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const Energy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Energy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Powering the future with intelligent energy systems while securing critical 
              infrastructure against evolving cyber threats
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">AI Applications in Energy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Smart Grid Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-optimized power distribution, demand forecasting, and real-time grid balancing for improved efficiency.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Predictive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Machine learning algorithms predicting equipment failures in power plants, wind turbines, and transmission lines.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Renewable Energy Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Weather prediction models and energy storage optimization for solar and wind power generation.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Energy Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automated energy market trading, price forecasting, and portfolio optimization for energy commodities.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Drilling Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-guided drilling operations in oil and gas extraction, optimizing resource recovery and safety.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Carbon Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Emissions monitoring, carbon capture optimization, and sustainability reporting through AI analytics.</p>
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Google DeepMind - Wind Power Optimization</h3>
                  <p className="text-gray-700 mb-3">
                    DeepMind's AI increased wind farm energy output by 20% through predictive wind forecasting and turbine 
                    optimization, demonstrating significant potential for renewable energy efficiency.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://deepmind.com/blog/article/machine-learning-can-boost-value-wind-energy" className="text-aiwia-blue hover:underline">DeepMind Blog</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Shell - AI-Powered Exploration</h3>
                  <p className="text-gray-700 mb-3">
                    Shell uses AI to analyze seismic data for oil and gas exploration, reducing exploration time by 70% 
                    and increasing discovery success rates while minimizing environmental impact.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.shell.com/energy-and-innovation/digitalisation/artificial-intelligence.html" className="text-aiwia-blue hover:underline">Shell AI Innovation</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Siemens - Smart Grid Analytics</h3>
                  <p className="text-gray-700 mb-3">
                    Siemens' AI-powered grid management system reduced power outages by 30% and improved energy efficiency 
                    by 15% across multiple utility networks through predictive analytics and automated responses.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://new.siemens.com/global/en/products/energy/grid-software/analytics.html" className="text-aiwia-blue hover:underline">Siemens Grid Analytics</a>
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
                  <li>• <strong>Critical infrastructure attacks</strong> targeting power grids</li>
                  <li>• <strong>SCADA system vulnerabilities</strong> in industrial controls</li>
                  <li>• <strong>IoT device compromises</strong> in smart meters and sensors</li>
                  <li>• <strong>Supply chain attacks</strong> on energy management software</li>
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
                  <li>• <strong>Smart meter data</strong> revealing personal habits</li>
                  <li>• <strong>Location tracking</strong> through energy usage patterns</li>
                  <li>• <strong>Cross-border data flows</strong> in international grids</li>
                  <li>• <strong>Third-party analytics</strong> without consent</li>
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
                  <li>• <strong>Grid destabilization</strong> through false data injection</li>
                  <li>• <strong>Market manipulation</strong> via trading algorithms</li>
                  <li>• <strong>Environmental sensor spoofing</strong> affecting operations</li>
                  <li>• <strong>Cascading failures</strong> from AI decision errors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Notable Security Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Ukraine Power Grid Attack (2015, 2016):</strong> State-sponsored cyberattacks disrupted electricity 
                supply to hundreds of thousands of customers, demonstrating vulnerabilities in critical energy infrastructure.
              </p>
              <p>
                <strong>Colonial Pipeline Ransomware (2021):</strong> DarkSide ransomware shut down the largest fuel pipeline 
                in the US for six days, causing widespread fuel shortages and highlighting energy sector vulnerabilities.
              </p>
              <p>
                <strong>Triton/TRISIS Malware (2017):</strong> Sophisticated malware targeted safety instrumented systems 
                in a Middle Eastern petrochemical plant, potentially causing physical damage and safety hazards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Energy;
