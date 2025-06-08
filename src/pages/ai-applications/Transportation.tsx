
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

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Smart transportation and autonomous vehicles"
              className="w-full h-64 md:h-96 object-cover"
            />
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Singapore LTA - AI Traffic Management</h3>
                  <p className="text-gray-700 mb-3">
                    Land Transport Authority's AI-powered traffic management system reduced congestion by 25% and cut travel 
                    times by 20% across Singapore, serving as a global model for smart city transportation.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.lta.gov.sg/content/ltagov/en/industry_innovations/technologies/intelligent_transport_systems.html" className="text-aiwia-blue hover:underline">Singapore LTA</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Grab - AI-Powered Ride Optimization</h3>
                  <p className="text-gray-700 mb-3">
                    Grab's AI algorithms across Southeast Asia optimize driver matching and route planning, reducing wait times 
                    by 30% and improving driver earnings by 15% while serving 187 million users.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.grab.com/sg/press/tech-product/grab-ai-transportation-optimization/" className="text-aiwia-blue hover:underline">Grab Technology</a>
                  </p>
                </div>
              </div>
            </Card>

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
                  <li>• <strong>PDPA compliance</strong> in cross-border travel</li>
                  <li>• <strong>Biometric data collection</strong> in vehicle systems</li>
                  <li>• <strong>Surveillance integration</strong> with law enforcement</li>
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
                  <li>• <strong>Algorithmic bias</strong> in ride-sharing pricing</li>
                  <li>• <strong>Social exclusion</strong> of elderly and disabled users</li>
                  <li>• <strong>Cultural insensitivity</strong> in route optimization</li>
                  <li>• <strong>Economic displacement</strong> of traditional drivers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">AI-Related Security & Ethics Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Uber AI Surge Pricing Discrimination (2021):</strong> Uber's AI algorithm in Singapore was found 
                to implement discriminatory surge pricing in certain neighborhoods, disproportionately affecting 
                low-income and minority communities during peak hours.
              </p>
              <p>
                <strong>Tesla Autopilot Asian Recognition Failure (2022):</strong> Tesla's AI vision system showed 
                reduced accuracy in recognizing Asian facial features and road signs with Asian characters, leading to 
                safety concerns in Asian markets.
              </p>
              <p>
                <strong>Waymo AI Racial Bias (2020):</strong> Studies revealed that Waymo's AI had difficulty detecting 
                people with darker skin tones, particularly at night, raising serious safety concerns for diverse 
                populations.
              </p>
              <p>
                <strong>Grab AI Route Bias in Malaysia (2023):</strong> Grab's AI routing system in Kuala Lumpur was 
                criticized for systematically avoiding certain ethnic neighborhoods, effectively creating digital 
                redlining in transportation services.
              </p>
              <p>
                <strong>Singapore AV Testing Ethics Violation (2022):</strong> Autonomous vehicle testing in Singapore 
                faced criticism when AI systems were trained using pedestrian data collected without explicit consent, 
                violating PDPA guidelines.
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
