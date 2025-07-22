
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
import { Award, Users, Clock, DollarSign, Calendar, CheckCircle, Target, Book } from 'lucide-react';

const ProfessionalScrumMaster = () => {
  const form = useForm();

  const upcomingDates = [
    "18-20 Aug 2025",
    "22 Sep to 24 Sep 2025"
  ];

  const courseModules = [
    {
      day: "Day 1",
      title: "The Foundations of Scrum & The Scrum Master's Stance",
      modules: [
        {
          name: "The Case for Scrum: Complexity and Empiricism",
          description: "Understanding complexity theory and empirical process control"
        },
        {
          name: "The Scrum Framework: Accountabilities",
          description: "Product Owner, Developers, and Scrum Master roles"
        },
        {
          name: "The Scrum Framework: Events", 
          description: "Sprint, Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective"
        },
        {
          name: "The Scrum Values",
          description: "Commitment, Focus, Openness, Respect, and Courage"
        }
      ]
    },
    {
      day: "Day 2", 
      title: "Bringing Scrum to Life - Artifacts and Application",
      modules: [
        {
          name: "Artifacts & Their Commitments",
          description: "Product Backlog, Sprint Backlog, Increment and Definition of Done"
        },
        {
          name: "Managing the Product with Agility",
          description: "Product Backlog Refinement, User Stories, and Story Mapping"
        },
        {
          name: "Agile Planning & Estimation",
          description: "Relative sizing, Story Points, and Planning Poker"
        },
        {
          name: "The Art of Facilitation",
          description: "Facilitating Scrum events and Sprint Retrospectives"
        }
      ]
    },
    {
      day: "Day 3",
      title: "The Professional Scrum Master - Leadership and Organizational Change", 
      modules: [
        {
          name: "The Scrum Master as a Servant Leader",
          description: "Leadership principles and fostering self-managing teams"
        },
        {
          name: "The Scrum Master as Coach and Teacher",
          description: "Coaching, mentoring, and teaching stances"
        },
        {
          name: "Serving the Organization",
          description: "Organizational impediments and change management"
        },
        {
          name: "Certification & Continued Journey",
          description: "PSM I exam preparation and continuous learning"
        }
      ]
    }
  ];

  const keyFeatures = [
    "Comprehensive 3-day PSM certification training",
    "Focus on AI-driven development challenges",
    "Hands-on workshops and interactive exercises", 
    "Free PSM I certification attempt included",
    "Modern approach to traditional Scrum challenges",
    "Practical experience with real-world scenarios"
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
              <Award className="w-8 h-8" />
              <span className="bg-aiwia-green text-white px-3 py-1 rounded text-sm font-medium">
                Certification Course
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Scrum Master (PSM) in the Age of AI
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              A 3-day intensive certification course designed for mastering Scrum in modern AI-augmented development environments
            </p>
            <div className="flex items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>SGD 800 per pax</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>PSM I Certification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Course Introduction</h2>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                This intensive Professional Scrum Master course is designed for individuals dedicated to mastering the Scrum framework and excelling in the Scrum Master accountability in the modern era of AI-assisted development.
              </p>
              <p className="text-lg text-aiwia-gray-dark mb-6">
                Fully aligned with the globally recognized Professional Scrum Master I (PSM I) certification from Scrum.org, this program provides deep, practical understanding of Scrum theory, principles, and values while addressing the unique challenges of AI-augmented development teams.
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
                      <li>• 3-day intensive training</li>
                      <li>• Free PSM I certification attempt</li>
                      <li>• Course materials and resources</li>
                      <li>• Certificate of completion</li>
                      <li>• Discount on PSM II certification</li>
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
              This course is designed for anyone involved in product delivery using the Scrum framework
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Aspiring Scrum Masters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Practitioners interested in starting a career as a Scrum Master
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Existing Scrum Masters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Agile/Scrum Coaches and consultants seeking to deepen their understanding
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Book className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Team Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Managers and Developers accountable for implementing Scrum
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-aiwia-blue mx-auto mb-4" />
                <CardTitle className="text-lg">Product Owners</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-aiwia-gray-dark">
                  Those wishing to gain a firmer foundation in the Scrum framework
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
              Comprehensive 3-day program covering all PSM I competency areas
            </p>
          </div>
          <div className="space-y-8">
            {courseModules.map((day, dayIndex) => (
              <Card key={dayIndex} className="overflow-hidden">
                <CardHeader className="bg-aiwia-blue text-white">
                  <CardTitle className="text-xl">{day.day}: {day.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {day.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="p-6 border-b md:border-b-0 md:border-r border-gray-200 last:border-0">
                        <h4 className="font-bold text-aiwia-black mb-2">{module.name}</h4>
                        <p className="text-sm text-aiwia-gray-dark">{module.description}</p>
                      </div>
                    ))}
                  </div>
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
              Secure your spot in the next Professional Scrum Master certification course
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                PSM Certification Registration
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for the Professional Scrum Master course
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
                            <SelectItem value="18-20-aug-2025">18-20 August 2025</SelectItem>
                            <SelectItem value="22-24-sep-2025">22 Sep to 24 Sep 2025</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Experience Level with Scrum</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner - New to Scrum</SelectItem>
                            <SelectItem value="intermediate">Intermediate - Some Scrum experience</SelectItem>
                            <SelectItem value="advanced">Advanced - Experienced with Scrum</SelectItem>
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
                            placeholder="Any specific goals or questions about the course?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                    Register for PSM Course
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-aiwia-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Master Scrum in the AI Era?</h2>
          <p className="text-xl mb-8">
            Join our comprehensive PSM certification course and become a leader in modern agile development
          </p>
          <Button asChild className="bg-white text-aiwia-blue hover:bg-aiwia-gray-light text-lg px-8 py-3">
            <Link to="/contact">Contact Us for More Information</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalScrumMaster;
