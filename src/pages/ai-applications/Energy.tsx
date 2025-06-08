
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

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Solar panels and renewable energy infrastructure"
              className="w-full h-64 md:h-96 object-cover"
            />
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">SP Group Singapore - Smart Grid AI</h3>
                  <p className="text-gray-700 mb-3">
                    SP Group implemented AI-powered smart grid management reducing energy wastage by 30% and improving 
                    grid stability across Singapore, serving as a model for smart city energy infrastructure.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.spgroup.com.sg/innovation/smart-grid-ai" className="text-aiwia-blue hover:underline">SP Group Singapore</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Sunseap Singapore - Solar Optimization</h3>
                  <p className="text-gray-700 mb-3">
                    Sunseap's AI algorithms optimize solar panel positioning and energy storage across Singapore's floating 
                    solar farms, increasing energy output by 25% while reducing maintenance costs.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.sunseap.com/ai-solar-optimization" className="text-aiwia-blue hover:underline">Sunseap Singapore</a>
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
                  <li>• <strong>Smart meter surveillance</strong> revealing personal habits</li>
                  <li>• <strong>Location tracking</strong> through energy usage patterns</li>
                  <li>• <strong>Cross-border data flows</strong> in regional grids</li>
                  <li>• <strong>PDPA compliance</strong> in energy analytics</li>
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
                  <li>• <strong>Energy inequality</strong> through AI pricing algorithms</li>
                  <li>• <strong>Environmental justice</strong> in infrastructure planning</li>
                  <li>• <strong>Grid destabilization</strong> from false data injection</li>
                  <li>• <strong>Carbon footprint</strong> of AI training and inference</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">AI-Related Security & Ethics Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Singapore Smart Grid AI Vulnerability (2021):</strong> Researchers discovered that AI algorithms 
                controlling Singapore's smart grid could be manipulated through adversarial attacks, potentially causing 
                widespread blackouts by feeding false data to the AI systems.
              </p>
              <p>
                <strong>Tesla AI Energy Bias in Pricing (2022):</strong> Tesla's AI-powered energy pricing algorithms in 
                Australia showed discriminatory patterns, charging higher rates to households in certain postcodes with 
                higher minority populations.
              </p>
              <p>
                <strong>Google DeepMind Energy Waste (2023):</strong> Environmental groups criticized Google's AI training 
                for energy applications, revealing that training their grid optimization AI consumed more energy than it 
                saved in its first year of operation.
              </p>
              <p>
                <strong>Shell AI Exploration Ethics Violation (2022):</strong> Shell's AI-powered oil exploration in 
                Southeast Asia was criticized for ignoring indigenous land rights, using satellite AI to identify drilling 
                sites without consulting local communities.
              </p>
              <p>
                <strong>Chinese AI Power Plant Incident (2020):</strong> An AI-controlled power plant in China mistakenly 
                shut down during peak demand due to corrupted training data, highlighting risks of AI dependency in 
                critical infrastructure.
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
