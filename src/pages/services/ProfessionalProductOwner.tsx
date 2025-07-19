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
import { Award, Users, Clock, DollarSign, CheckCircle, Target, Brain, Calendar } from 'lucide-react';

const ProfessionalProductOwner = () => {
  const form = useForm();

  const upcomingDates = [
    { date: "15 Aug 2025", location: "Singapore", status: "Available" },
    { date: "15 Sep 2025", location: "Singapore", status: "Available" }
  ];

  const targetAudience = [
    "Existing Product Owners, Product Managers, and Business Analysts looking to specialize in AI products",
    "Aspiring Product Owners who want to build a strong, future-focused foundation in both Scrum and AI",
    "Scrum Masters and Agile Coaches who support and guide Product Owners in AI-driven teams",
    "Executives, managers, and stakeholders who need to understand how to steer AI product strategy"
  ];

  const courseModules = [
    {
      day: "Day 1",
      title: "Foundations of AI Product Ownership",
      modules: [
        {
          number: "1",
          name: "The AI Product Challenge: Complexity, Empiricism, and Uncertainty",
          description: "Understanding unique characteristics of AI-driven products and the role of empiricism"
        },
        {
          number: "2", 
          name: "The AI Product Owner Accountability",
          description: "Expanded skills and accountabilities for AI Product Owners"
        },
        {
          number: "3",
          name: "Defining and Measuring AI Value",
          description: "AI-specific value metrics and Value Proposition Canvas"
        },
        {
          number: "4",
          name: "The Scrum Values in an AI Context",
          description: "Applying Scrum Values to AI product development challenges"
        }
      ]
    },
    {
      day: "Day 2",
      title: "The Craft of AI Product Ownership",
      modules: [
        {
          number: "5",
          name: "The AI-Powered Product Backlog",
          description: "Managing backlogs with traditional features, data acquisition tasks, and model experimentation"
        },
        {
          number: "6",
          name: "Prompting for Value: Communicating Intent",
          description: "Prompt engineering principles for communicating AI feature requirements"
        },
        {
          number: "7",
          name: "User Story Mapping for AI Journeys",
          description: "Adapting story mapping for non-linear, probabilistic user journeys"
        },
        {
          number: "8",
          name: "Engaging Stakeholders on AI",
          description: "Managing expectations and communicating about uncertainty to stakeholders"
        }
      ]
    },
    {
      day: "Day 3",
      title: "Advanced Strategy & Responsible Leadership",
      modules: [
        {
          number: "9",
          name: "Forecasting and Planning with Uncertainty",
          description: "Agile forecasting techniques and release strategies for AI projects"
        },
        {
          number: "10",
          name: "The Ethics of AI: The PO as a Guardian",
          description: "Ethical AI frameworks and incorporating ethics into product decisions"
        },
        {
          number: "11",
          name: "The PO as an AI Change Agent",
          description: "Leading organizational AI adoption and creating business cases"
        },
        {
          number: "12",
          name: "Certification and Continued Journey",
          description: "PSPO exam preparation and professional development planning"
        }
      ]
    }
  ];

  const keyFeatures = [
    "PSPO I and PSPO II competency alignment",
    "AI-specific Product Backlog management",
    "Hands-on workshops and case studies",
    "Ethical AI framework and risk mitigation",
    "Stakeholder engagement strategies",
    "Prompt engineering for product requirements",
    "User story mapping for AI journeys",
    "Release planning with uncertainty",
    "Professional certification preparation",
    "Continued learning resources"
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <Award className="w-8 h-8" />
              <span className="bg-aiwia-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                PSPO Certification
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Product Owner (PSPO) in the Age of AI
            </h1>
            <p className="text-xl max-w-4xl mx-auto mb-8">
              Master product ownership in the AI era with this comprehensive 3-day certification course designed for modern Product Owners operating at the intersection of Agile and Artificial Intelligence.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                <span>SGD 800 per participant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>Interactive Workshops</span>
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
                This intensive three-day program is fully aligned with the Professional Scrum Product Owner (PSPO) certification competencies while addressing the unique challenges of building AI-powered products. Learn to navigate probabilistic outcomes, data dependencies, and complex ethical considerations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-aiwia-gray-light rounded-lg">
                  <Target className="w-8 h-8 mx-auto mb-2 text-aiwia-blue" />
                  <div className="font-semibold">Strategic Focus</div>
                  <div className="text-sm text-aiwia-gray-dark">AI Product Vision</div>
                </div>
                <div className="text-center p-4 bg-aiwia-gray-light rounded-lg">
                  <Brain className="w-8 h-8 mx-auto mb-2 text-aiwia-blue" />
                  <div className="font-semibold">AI Literacy</div>
                  <div className="text-sm text-aiwia-gray-dark">Data & Ethics</div>
                </div>
              </div>
              <Button className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
                Register Now
              </Button>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Upcoming Course Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDates.map((date, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-semibold">{date.date}</div>
                          <div className="text-sm text-aiwia-gray-dark">{date.location}</div>
                        </div>
                        <span className="bg-aiwia-green text-white px-3 py-1 rounded-full text-sm">
                          {date.status}
                        </span>
                      </div>
                    ))}
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
            <h2 className="text-3xl font-bold mb-4">Key Features & Benefits</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive training designed for the modern AI product landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-aiwia-green mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Target Audience</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Essential for anyone accountable for product success in AI-driven organizations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {targetAudience.map((audience, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-aiwia-blue mt-1 flex-shrink-0" />
                    <p className="text-sm">{audience}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive 3-day program covering all aspects of AI product ownership
            </p>
          </div>
          <div className="space-y-8">
            {courseModules.map((day, dayIndex) => (
              <Card key={dayIndex}>
                <CardHeader>
                  <CardTitle className="text-xl text-aiwia-blue">{day.day}: {day.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {day.modules.map((module, moduleIndex) => (
                      <div key={moduleIndex} className="border rounded-lg p-4 bg-white">
                        <div className="flex items-start space-x-3">
                          <span className="bg-aiwia-blue text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                            {module.number}
                          </span>
                          <div>
                            <h4 className="font-semibold text-sm mb-2">{module.name}</h4>
                            <p className="text-xs text-aiwia-gray-dark">{module.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Register for the Course</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Secure your spot in this comprehensive PSPO certification course
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Course Registration Form
              </CardTitle>
              <CardDescription>
                Fill out the form below to register for the Professional Product Owner course
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
                              <SelectValue placeholder="Choose your preferred date" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="aug-2025">15 Aug 2025 - Singapore</SelectItem>
                            <SelectItem value="sep-2025">15 Sep 2025 - Singapore</SelectItem>
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
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Product Management Experience</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your experience level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">No experience</SelectItem>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">More than 5 years</SelectItem>
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
                            placeholder="Any specific requirements, questions, or AI product experience you'd like to share?"
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark">
                    Register for Course
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Master AI Product Ownership?</h2>
          <p className="text-xl text-aiwia-gray-dark mb-8">
            Have questions about the course or need a custom training solution for your organization?
          </p>
          <Button asChild className="bg-aiwia-blue hover:bg-aiwia-blue-dark text-lg px-8 py-3">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfessionalProductOwner;