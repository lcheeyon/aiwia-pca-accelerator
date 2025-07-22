
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacySecurityTraining = () => {
  const trainingAreas = [
    {
      title: "Data Protection Fundamentals",
      topics: ["PDPA Requirements", "Data Classification", "Consent Management", "Privacy by Design"]
    },
    {
      title: "Cybersecurity Essentials",
      topics: ["Threat Awareness", "Password Security", "Phishing Prevention", "Incident Response"]
    },
    {
      title: "Compliance Implementation",
      topics: ["Policy Development", "Risk Assessment", "Audit Preparation", "Breach Procedures"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy & Security Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Essential training on data privacy protection and cybersecurity best practices for your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Protect Your Organization</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive training covering data privacy regulations and cybersecurity threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingAreas.map((area, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {area.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2"></div>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                    <Link to={`/services/${area.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Secure Your Organization Today</h2>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Schedule Training</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacySecurityTraining;
