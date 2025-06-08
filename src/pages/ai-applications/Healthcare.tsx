
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp } from 'lucide-react';

const Healthcare = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI in Healthcare</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing patient care through artificial intelligence while navigating 
              complex privacy and security challenges
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="Medical professionals using AI technology"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-aiwia-black">AI Applications in Healthcare</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Medical Imaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-powered diagnostic imaging for radiology, pathology, and dermatology with enhanced accuracy and speed.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Drug Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Accelerating pharmaceutical research through AI-driven molecule identification and clinical trial optimization.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Early warning systems for patient deterioration, readmission risk assessment, and outbreak prediction.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Virtual Health Assistants</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI chatbots and virtual nurses providing 24/7 patient support and triage services.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Robotic Surgery</CardTitle>
              </CardHeader>
              <CardContent>
                <p>AI-assisted surgical robots enhancing precision and reducing invasiveness in complex procedures.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-aiwia-blue">Personalized Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Genomic analysis and treatment recommendations tailored to individual patient profiles.</p>
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Singapore General Hospital - AI Pneumonia Detection</h3>
                  <p className="text-gray-700 mb-3">
                    SGH implemented AI-powered chest X-ray analysis that reduced pneumonia diagnosis time from hours to minutes, 
                    achieving 95% accuracy and improving patient outcomes in emergency departments.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.sgh.com.sg/about-us/newsroom/News-Articles-Reports/Pages/SGH-AI-pneumonia-detection.aspx" className="text-aiwia-blue hover:underline">Singapore General Hospital</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">NUH - AI-Powered Drug Discovery</h3>
                  <p className="text-gray-700 mb-3">
                    National University Hospital Singapore partnered with AI companies to accelerate drug discovery for 
                    tropical diseases, reducing research timelines by 60% and identifying potential treatments for dengue fever.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.nuh.com.sg/Pages/Newsroom/Research-News/NUH-AI-drug-discovery.aspx" className="text-aiwia-blue hover:underline">National University Hospital</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Babylon Health - AI Triage</h3>
                  <p className="text-gray-700 mb-3">
                    Babylon's AI-powered triage system demonstrated accuracy comparable to human doctors in symptom checking, 
                    serving over 4 million users and reducing unnecessary emergency department visits by 30%.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.babylonhealth.com/clinical-evidence" className="text-aiwia-blue hover:underline">Babylon Health Clinical Evidence</a>
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
                  <li>• <strong>Ransomware attacks</strong> targeting hospital systems (e.g., WannaCry 2017)</li>
                  <li>• <strong>Medical device vulnerabilities</strong> in connected IoT devices</li>
                  <li>• <strong>AI model poisoning</strong> compromising diagnostic accuracy</li>
                  <li>• <strong>Network infiltration</strong> through unsecured AI endpoints</li>
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
                  <li>• <strong>PDPA violations</strong> in Singapore healthcare data handling</li>
                  <li>• <strong>Patient re-identification</strong> from anonymized datasets</li>
                  <li>• <strong>Unauthorized data sharing</strong> with third-party vendors</li>
                  <li>• <strong>Genetic privacy breaches</strong> affecting families</li>
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
                  <li>• <strong>Algorithmic bias</strong> leading to healthcare disparities</li>
                  <li>• <strong>Data poisoning</strong> affecting model training</li>
                  <li>• <strong>Consent management</strong> in multi-ethnic populations</li>
                  <li>• <strong>Cultural sensitivity</strong> in AI diagnostic tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">AI-Related Security & Ethics Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Singapore AI Diagnostic Bias Discovery (2023):</strong> Research at NUS revealed that AI diagnostic 
                tools trained primarily on Western datasets showed 23% lower accuracy for Asian patients, particularly 
                affecting skin cancer detection in darker skin tones.
              </p>
              <p>
                <strong>IBM Watson Cancer Treatment Bias (2018):</strong> IBM's AI system was found to recommend unsafe 
                and incorrect cancer treatments, with particular bias against patients from non-Western backgrounds, 
                leading to its withdrawal from several Asian hospitals.
              </p>
              <p>
                <strong>Google AI Dermatology Tool Bias (2021):</strong> Google's AI skin condition detector showed 
                significant accuracy gaps for darker skin tones, missing up to 34% of conditions in Southeast Asian 
                populations during trials.
              </p>
              <p>
                <strong>DeepMind Health Data Controversy (2017):</strong> DeepMind's partnership with UK's NHS faced 
                criticism for processing sensitive patient data without proper consent, raising concerns about similar 
                AI health partnerships in Asia-Pacific regions.
              </p>
              <p>
                <strong>Babylon Health AI Misdiagnosis (2020):</strong> The AI chatbot provided potentially dangerous 
                medical advice, including recommending emergency care for minor issues while missing serious symptoms, 
                particularly problematic in underserved Asian communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;
