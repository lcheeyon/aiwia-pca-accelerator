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
import { FileCheck, Users, Clock, DollarSign, Calendar, CheckCircle, BookOpen, AlertTriangle } from 'lucide-react';

const ComplianceImplementation = () => {
  const form = useForm();

  const upcomingDates = [
    "2 Sep 2025",
    "7 Oct 2025"
  ];

  const courseModules = [
    {
      title: "Policy Development Framework",
      duration: "3 hours",
      topics: [
        "Compliance Policy Structure",
        "Legal Requirements Analysis",
        "Policy Documentation Standards",
        "Stakeholder Consultation Process"
      ]
    },
    {
      title: "Risk Assessment Methodologies",
      duration: "2.5 hours",
      topics: [
        "Risk Identification Techniques",
        "Impact Assessment Methods",
        "Likelihood Evaluation",
        "Risk Mitigation Strategies"
      ]
    },
    {
      title: "Audit Preparation & Management",
      duration: "2 hours",
      topics: [
        "Audit Readiness Checklists",
        "Documentation Organization",
        "Auditor Communication",
        "Evidence Management"
      ]
    },
    {
      title: "Breach Response Procedures",
      duration: "1.5 hours",
      topics: [
        "Incident Classification",
        "Response Team Activation",
        "Notification Requirements",
        "Recovery Planning"
      ]
    }
  ];

  const keyFeatures = [
    "Comprehensive 1-day implementation training",
    "Regulatory compliance framework design",
    "Practical templates and checklists",
    "Certificate of completion",
    "Post-training implementation support",
    "Expert compliance instructor"
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
              <FileCheck className="w-8 h-8" />
              <span className="bg-aiwia-green text-white px-3 py-1 rounded text-sm font-medium">
                Compliance Training
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compliance Implementation
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Master the systematic approach to implementing robust compliance frameworks and procedures in your organization
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>1 Day</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>SGD 520 per pax</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                <span>Implementation Certificate</span>
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
                This intensive one-day course provides practical guidance on implementing comprehensive compliance frameworks 
                within your organization. Learn to design, deploy, and maintain effective compliance systems that meet 
                regulatory requirements while supporting business objectives.
              </p>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Designed for compliance professionals, managers, and organizational leaders, this training combines 
                theoretical knowledge with hands-on implementation strategies to ensure sustainable compliance practices.
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
                      <li>• Compliance implementation toolkit</li>
                      <li>• Policy templates and frameworks</li>
                      <li>• Certificate of completion</li>
                      <li>• 60-day implementation support</li>
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
              Essential training for professionals responsible for organizational compliance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <FileCheck className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Compliance Officers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Professionals responsible for organizational compliance
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Risk Managers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Specialists managing organizational risk frameworks
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Legal Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Legal professionals overseeing regulatory compliance
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Senior Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Leaders accountable for compliance oversight
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
              Systematic approach to compliance implementation
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
              Secure your spot in the next Compliance Implementation training
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                Compliance Implementation Registration
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for the Compliance Implementation course
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
                            <SelectItem value="2-sep-2025">2 September 2025</SelectItem>
                            <SelectItem value="7-oct-2025">7 October 2025</SelectItem>
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
                    Register for Compliance Implementation
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
            Our compliance experts are ready to help you build effective compliance frameworks
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

export default ComplianceImplementation;