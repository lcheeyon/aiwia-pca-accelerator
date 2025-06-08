
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const Transportation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Transportation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing mobility through autonomous systems while addressing safety, 
              privacy, and cybersecurity challenges
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">AI Applications in Transportation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Autonomous Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Self-driving cars, trucks, and delivery vehicles using computer vision and machine learning for navigation.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Traffic Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Smart traffic light systems, congestion prediction, and route optimization for urban mobility.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Logistics Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-powered supply chain management, delivery route planning, and warehouse automation.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Predictive Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Vehicle health monitoring, fleet management, and maintenance scheduling for transportation assets.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Aviation Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-assisted pilot training, flight path optimization, and automated air traffic control systems.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Maritime Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Autonomous ships, port automation, and maritime route optimization for cargo and passenger vessels.</p>
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Waymo - Autonomous Vehicle Leadership</h3>
                  <p className="text-gray-700 mb-3">
                    Waymo has driven over 20 million miles on public roads with a safety record 10x better than human drivers, 
                    demonstrating the potential for AI to reduce traffic accidents and fatalities.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://waymo.com/safety/" className="text-aiwia-blue hover:underline">Waymo Safety Report</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">UPS ORION - Route Optimization</h3>
                  <p className="text-gray-700 mb-3">
                    UPS's AI-powered ORION system optimizes delivery routes for 55,000 drivers daily, saving 100 million 
                    miles and 10 million gallons of fuel annually while improving delivery efficiency.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.ups.com/us/en/services/tracking/orion.page" className="text-aiwia-blue hover:underline">UPS ORION</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Singapore Smart Traffic</h3>
                  <p className="text-gray-700 mb-3">
                    Singapore's AI traffic management system reduced travel times by 25% and emissions by 15% through 
                    real-time traffic optimization and predictive congestion management.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.lta.gov.sg/content/ltagov/en/industry_innovations/technologies/intelligent_transport_systems.html" className="text-aiwia-blue hover:underline">Singapore LTA</a>
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
                  <li>• <strong>Vehicle hacking</strong> compromising autonomous systems</li>
                  <li>• <strong>GPS spoofing</strong> misdirecting navigation systems</li>
                  <li>• <strong>V2X communication attacks</strong> disrupting vehicle networks</li>
                  <li>• <strong>Infrastructure targeting</strong> of traffic control systems</li>
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
                  <li>• <strong>Location tracking</strong> and movement profiling</li>
                  <li>• <strong>Biometric data collection</strong> in vehicle systems</li>
                  <li>• <strong>Cross-platform data sharing</strong> between services</li>
                  <li>• <strong>Surveillance integration</strong> with law enforcement</li>
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
                  <li>• <strong>Algorithmic bias</strong> in autonomous decisions</li>
                  <li>• <strong>Sensor data poisoning</strong> affecting AI models</li>
                  <li>• <strong>Edge computing vulnerabilities</strong> in vehicles</li>
                  <li>• <strong>Mass transportation disruption</strong> from system failures</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Notable Security Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Jeep Cherokee Hack (2015):</strong> Security researchers remotely took control of a vehicle's steering, 
                brakes, and transmission through the entertainment system, leading to massive recalls.
              </p>
              <p>
                <strong>Tesla Model S Key Fob Attack (2018):</strong> Researchers demonstrated how to steal a Tesla in under 
                2 minutes by cloning the key fob, highlighting wireless security vulnerabilities.
              </p>
              <p>
                <strong>NotPetya Transport Disruption (2017):</strong> Ransomware attack severely impacted global shipping 
                by disrupting Maersk operations, causing billions in damages and supply chain delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Transportation;
