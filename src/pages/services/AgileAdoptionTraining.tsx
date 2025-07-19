
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
import { Award, Users, Clock, DollarSign } from 'lucide-react';

const AgileAdoptionTraining = () => {
  const form = useForm();

  const frameworks = [
    {
      name: "Scrum Framework",
      description: "Master the Scrum methodology for enhanced project delivery",
      duration: "1 day",
      price: "SGD 200 per pax",
      features: ["Sprint Planning", "Daily Standups", "Sprint Reviews", "Retrospectives"]
    },
    {
      name: "Kanban System", 
      description: "Implement visual workflow management for continuous improvement",
      duration: "1 day",
      price: "SGD 200 per pax",
      features: ["Work in Progress Limits", "Visual Boards", "Flow Metrics", "Continuous Delivery"]
    },
    {
      name: "Professional Scrum Master (PSM) in the Age of AI",
      description: "Comprehensive PSM certification training with exam preparation focused on modern AI-driven development",
      duration: "3 days",
      price: "SGD 800 per pax",
      certification: true,
      features: ["Scrum Theory & Principles", "Scrum Master Role", "Team Facilitation", "Certification Exam"],
      link: "/services/professional-scrum-master"
    },
    {
      name: "Professional Product Owner (PSPO) in the Age of AI",
      description: "Comprehensive PSPO certification training with AI focus and exam preparation", 
      duration: "3 days",
      price: "SGD 800 per pax",
      certification: true,
      features: ["AI Product Vision & Strategy", "AI-Powered Backlog Management", "Ethical AI Frameworks", "Certification Exam"],
      link: "/services/professional-product-owner"
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agile Adoption Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive training on Scrum and Kanban frameworks for enhanced team productivity and project delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Transform Your Team's Productivity</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Learn proven agile methodologies to improve collaboration and delivery speed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frameworks.map((framework, index) => (
              <Card key={index} className="relative">
                {framework.certification && (
                  <div className="absolute top-4 right-4">
                    <Award className="w-6 h-6 text-aiwia-green" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {framework.name}
                    {framework.certification && (
                      <span className="text-sm bg-aiwia-green text-white px-2 py-1 rounded">
                        Certification
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{framework.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-aiwia-gray-dark mt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{framework.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{framework.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {framework.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-2"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {framework.link && (
                    <div className="mt-4">
                      <Button asChild className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark mb-2">
                        <Link to={framework.link}>Learn More About This Course</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Register for Training</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Sign up for our agile training programs and transform your team's productivity
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Training Registration Form
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for our agile training programs
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
                    name="course"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Training Course *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose a training course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="scrum-framework">Scrum Framework (1 day - SGD 200)</SelectItem>
                            <SelectItem value="kanban-system">Kanban System (1 day - SGD 200)</SelectItem>
                            <SelectItem value="professional-scrum-master">Professional Scrum Master (3 days - SGD 800)</SelectItem>
                            <SelectItem value="professional-product-owner">Professional Product Owner (3 days - SGD 800)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="participants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Participants</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select number of participants" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 participant</SelectItem>
                            <SelectItem value="2-5">2-5 participants</SelectItem>
                            <SelectItem value="6-10">6-10 participants</SelectItem>
                            <SelectItem value="11-20">11-20 participants</SelectItem>
                            <SelectItem value="20+">More than 20 participants</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific requirements or questions about the training?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                    Register for Training
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Agile?</h2>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Contact Us for Custom Training</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgileAdoptionTraining;
