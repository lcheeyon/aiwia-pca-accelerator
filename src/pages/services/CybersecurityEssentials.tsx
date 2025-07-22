import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { Shield, Users, Clock, DollarSign, Calendar, CheckCircle, Lock, AlertTriangle } from 'lucide-react';

const CybersecurityEssentials = () => {
  const form = useForm();

  const upcomingDates = [
    "28 Aug 2025",
    "3 Oct 2025"
  ];

  const courseModules = [
    {
      title: "Threat Landscape Awareness",
      duration: "2.5 hours",
      topics: [
        "Current Cybersecurity Threats",
        "Attack Vectors and Methods",
        "Industry-Specific Risks",
        "Threat Intelligence Basics"
      ]
    },
    {
      title: "Password Security & Authentication",
      duration: "2 hours",
      topics: [
        "Strong Password Practices",
        "Multi-Factor Authentication",
        "Password Management Tools",
        "Biometric Security"
      ]
    },
    {
      title: "Phishing & Social Engineering Prevention",
      duration: "2.5 hours",
      topics: [
        "Identifying Phishing Attempts",
        "Email Security Best Practices",
        "Social Engineering Tactics",
        "Safe Browsing Habits"
      ]
    },
    {
      title: "Incident Response & Recovery",
      duration: "2 hours",
      topics: [
        "Incident Detection",
        "Response Procedures",
        "Communication Protocols",
        "Recovery Planning"
      ]
    }
  ];

  const keyFeatures = [
    "Comprehensive 1-day cybersecurity training",
    "Hands-on phishing simulation exercises",
    "Real-world case studies and scenarios",
    "Certificate of completion",
    "Security awareness toolkit",
    "Expert cybersecurity instructor"
  ];

  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <Lock className="w-8 h-8" />
              <span className="bg-aiwia-green text-white px-3 py-1 rounded text-sm font-medium">
                Security Training
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cybersecurity Essentials
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Build your organization's first line of defense against cyber threats with comprehensive security awareness training
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>1 Day</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>SGD 480 per pax</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Security Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                In today's digital landscape, every employee is a potential target for cyber attacks. This comprehensive 
                one-day course equips your team with essential cybersecurity knowledge and practical skills to identify, 
                prevent, and respond to security threats.
              </p>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Through interactive sessions, real-world simulations, and practical exercises, participants will develop 
                the security mindset needed to protect both personal and organizational digital assets.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-aiwia-green mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-aiwia-gray-light">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Course Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {upcomingDates.map((date, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium">{date}</span>
                        <Button size="sm" className="bg-aiwia-blue hover:bg-aiwia-blue-dark">
                          Register
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-aiwia-blue text-white rounded-lg">
                    <h4 className="font-bold mb-2">What's Included:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 1-day intensive training</li>
                      <li>• Live phishing simulation</li>
                      <li>• Security awareness toolkit</li>
                      <li>• Certificate of completion</li>
                      <li>• Incident response checklist</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Target Audience</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Essential security training for all organizational roles and levels
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">All Employees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Everyone who uses computers and digital devices
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">IT Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Technical staff responsible for system security
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Leaders responsible for organizational security
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Lock className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Remote Workers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Staff working from home or remote locations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Practical cybersecurity knowledge for the modern workplace
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-aiwia-blue text-white">
                  <CardTitle className="flex items-center justify-between">
                    <span>{module.title}</span>
                    <span className="text-sm bg-white/20 px-2 py-1 rounded">{module.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-aiwia-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Register for the Course</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Secure your spot in the next Cybersecurity Essentials training
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Cybersecurity Training Registration
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for the Cybersecurity Essentials course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your job title" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="courseDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Course Date *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your preferred course date" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="28-aug-2025">28 August 2025</SelectItem>
                            <SelectItem value="3-oct-2025">3 October 2025</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specialRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requirements or Questions</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any special requirements, dietary restrictions, or questions about the course"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                    Register for Cybersecurity Essentials
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Questions About This Course?</h2>
          <p className="text-lg text-aiwia-gray-dark mb-8">
            Our cybersecurity experts are ready to help you build a stronger security posture
          </p>
          <Button asChild className="bg-aiwia-green hover:bg-aiwia-green/90 text-lg px-8 py-3">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecurityEssentials;