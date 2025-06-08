
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
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">Google DeepMind - Diabetic Retinopathy Detection</h3>
                  <p className="text-gray-700 mb-3">
                    DeepMind's AI system achieved over 90% accuracy in detecting diabetic retinopathy from retinal photographs, 
                    potentially preventing blindness in millions of patients worldwide.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.nature.com/articles/s41551-018-0195-0" className="text-aiwia-blue hover:underline">Nature Biomedical Engineering</a>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <TrendingUp className="w-8 h-8 text-green-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-aiwia-blue">IBM Watson for Oncology</h3>
                  <p className="text-gray-700 mb-3">
                    Memorial Sloan Kettering Cancer Center partnered with IBM Watson to analyze vast amounts of medical literature 
                    and patient data, improving cancer treatment recommendations and reducing diagnosis time by up to 96%.
                  </p>
                  <p className="text-sm text-gray-600">
                    Source: <a href="https://www.mskcc.org/about/innovative-collaborations/watson-oncology" className="text-aiwia-blue hover:underline">Memorial Sloan Kettering</a>
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
                  <li>• <strong>HIPAA violations</strong> through improper data handling</li>
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
                  <CardTitle className="text-purple-700">Data Risks</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Algorithmic bias</strong> leading to healthcare disparities</li>
                  <li>• <strong>Data poisoning</strong> affecting model training</li>
                  <li>• <strong>Interoperability failures</strong> causing data loss</li>
                  <li>• <strong>Cloud storage breaches</strong> exposing patient records</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Notable Security Incidents</h3>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Anthem Data Breach (2015):</strong> Healthcare insurer compromised affecting 78.8 million patients, 
                exposing names, Social Security numbers, and medical IDs.
              </p>
              <p>
                <strong>Universal Health Services Ransomware (2020):</strong> Major hospital chain's IT systems encrypted, 
                forcing facilities to use paper records and causing treatment delays.
              </p>
              <p>
                <strong>Change Healthcare Cyberattack (2024):</strong> Nation's largest health payment processor hit by ransomware, 
                disrupting prescription processing and insurance claims nationwide.
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
