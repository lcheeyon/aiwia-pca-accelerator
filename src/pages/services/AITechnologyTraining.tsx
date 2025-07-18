import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Box, Wrench, User, TrendingUp, Scale, Bot, Palette } from 'lucide-react';

const AITechnologyTraining = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm();

  const certificationTracks = [
    {
      title: "Generative AI Usage",
      icon: Bot,
      color: "border-purple-400 bg-purple-50",
      iconColor: "text-purple-600",
      description: "Master practical generative AI tools for creativity and productivity",
      duration: "3 weeks",
      sessions: "7 sessions",
      price: "SGD 600",
      level: "Beginner",
      topics: ["ChatGPT & Prompting", "AI Creative Writing", "Image Generation", "Video & Music AI"]
    },
    {
      title: "Responsible AI",
      icon: Scale,
      color: "border-red-400 bg-red-50",
      iconColor: "text-red-600",
      description: "AI ethics, risk management, governance and verification frameworks",
      duration: "3 weeks",
      sessions: "6 sessions",
      price: "SGD 600",
      level: "Intermediate",
      topics: ["AI Ethics", "Risk Management", "Governance Controls", "AI Verification"]
    },
    {
      title: "AI Foundations Practitioner",
      icon: Box,
      color: "border-amber-400 bg-amber-50",
      iconColor: "text-amber-600",
      description: "Master the fundamentals of AI and machine learning",
      duration: "5 weeks",
      sessions: "10 sessions",
      price: "SGD 1000",
      level: "Beginner",
      topics: ["AI/ML Basics", "Data Requirements", "AI Applications", "Ethics & Bias", "Capstone Project"]
    },
    {
      title: "ML Developer Pro", 
      icon: Wrench,
      color: "border-blue-400 bg-blue-50",
      iconColor: "text-blue-600",
      description: "Advanced machine learning development and implementation",
      duration: "5 weeks",
      sessions: "10 sessions",
      price: "SGD 1000",
      level: "Intermediate",
      topics: ["Algorithm Design", "Model Training", "Performance Optimization", "Deployment", "Capstone Project"]
    },
    {
      title: "AI Product Strategist",
      icon: User,
      color: "border-orange-400 bg-orange-50", 
      iconColor: "text-orange-600",
      description: "Strategic AI product development and management",
      duration: "3 weeks",
      sessions: "6 sessions",
      price: "SGD 600",
      level: "Intermediate",
      topics: ["Product Strategy", "AI Integration", "User Experience", "Market Analysis"]
    },
    {
      title: "AI for Business Leaders",
      icon: TrendingUp,
      color: "border-green-400 bg-green-50",
      iconColor: "text-green-600", 
      description: "Executive-level AI strategy and transformation",
      duration: "3 weeks",
      level: "Executive",
      topics: ["AI Strategy", "ROI Assessment", "Change Management", "Risk Mitigation"]
    },
    {
      title: "Responsible AI Steward",
      icon: Scale,
      color: "border-teal-400 bg-teal-50",
      iconColor: "text-teal-600",
      description: "AI ethics, governance, and responsible implementation",
      duration: "4 weeks", 
      level: "Advanced",
      topics: ["AI Ethics", "Compliance", "Risk Assessment", "Governance Frameworks"]
    },
    {
      title: "Generative AI Engineer",
      icon: Bot,
      color: "border-purple-400 bg-purple-50",
      iconColor: "text-purple-600",
      description: "Specialized training in generative AI technologies",
      duration: "5 weeks",
      level: "Advanced", 
      topics: ["LLMs", "Prompt Engineering", "Fine-tuning", "RAG Systems"]
    },
    {
      title: "Creative AI Designer",
      icon: Palette,
      color: "border-red-400 bg-red-50",
      iconColor: "text-red-600",
      description: "AI-powered creative tools and design workflows",
      duration: "4 weeks",
      level: "Intermediate",
      topics: ["AI Art Tools", "Design Automation", "Creative Workflows", "Visual AI"]
    }
  ];

  const onSubmit = (data: any) => {
    console.log('Course signup:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-aiwia-blue to-aiwia-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Certification Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive AI certification programs designed to advance your career with industry-recognized credentials.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">AI Certification Tracks</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Choose your path to AI expertise with our structured certification programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certificationTracks.map((track, index) => {
              const IconComponent = track.icon;
              return (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${track.color}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-white shadow-md">
                        <IconComponent className={`h-8 w-8 ${track.iconColor}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold">{track.title}</CardTitle>
                    <CardDescription className="text-sm">{track.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Duration:</span>
                        <span>{track.duration}</span>
                      </div>
                      {track.sessions && (
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">Sessions:</span>
                          <span>{track.sessions}</span>
                        </div>
                      )}
                      {track.price && (
                        <div className="flex justify-between text-sm font-semibold text-aiwia-blue">
                          <span className="font-medium">Price:</span>
                          <span>{track.price}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">Level:</span>
                        <span>{track.level}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-sm mb-2">Key Topics:</h4>
                      <ul className="space-y-1">
                        {track.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start text-xs">
                            <div className="w-1.5 h-1.5 bg-aiwia-green rounded-full mr-2 mt-1.5"></div>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Register for Upcoming Courses</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Join our next scheduled online training sessions
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Course Registration</CardTitle>
              <CardDescription>
                Fill out the form below to register for our AI certification courses. We'll contact you with available schedules and next steps.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your first name" {...field} required />
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
                              <Input placeholder="Enter your last name" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} required />
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

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company/Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your company name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}  
                      name="certificationTrack"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Certification Track *</FormLabel>
                          <FormControl>
                            <select {...field} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Select a certification track</option>
                              {certificationTracks.map((track, index) => (
                                <option key={index} value={track.title}>{track.title}</option>
                              ))}
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>AI/Tech Experience Level</FormLabel>
                          <FormControl>
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Select your experience level</option>
                              <option value="beginner">Beginner</option>
                              <option value="intermediate">Intermediate</option>
                              <option value="advanced">Advanced</option>
                              <option value="expert">Expert</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-aiwia-blue hover:bg-aiwia-blue-dark text-white">
                      Register for Course
                    </Button>
                  </form>
                </Form>
              ) : (
                <div className="text-center py-8">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-aiwia-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-aiwia-black mb-2">Registration Successful!</h3>
                    <p className="text-aiwia-gray-dark">
                      Thank you for your interest in our AI certification programs. We'll contact you within 24 hours with course schedules and next steps.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">Why Choose Our AI Certification?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Industry-Recognized Credentials</h4>
                    <p className="text-aiwia-gray-dark text-sm">Certificates valued by top employers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Hands-On Learning</h4>
                    <p className="text-aiwia-gray-dark text-sm">Practical projects with real-world applications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Instructors</h4>
                    <p className="text-aiwia-gray-dark text-sm">Learn from industry professionals and AI researchers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-aiwia-green rounded-full mr-3 mt-2"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Online Format</h4>
                    <p className="text-aiwia-gray-dark text-sm">Learn at your own pace with live and recorded sessions</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-aiwia-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Course Features</h3>
              <ul className="space-y-2">
                <li>• Live online sessions with Q&A</li>
                <li>• Downloadable resources and templates</li>
                <li>• Peer networking opportunities</li>
                <li>• Final project and portfolio development</li>
                <li>• Ongoing career support and guidance</li>
                <li>• Access to exclusive AI community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-blue text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Advance Your AI Career?</h2>
          <p className="text-xl mb-8">
            Join thousands of professionals who have transformed their careers with our AI certification programs.
          </p>
          <Button asChild className="bg-white text-aiwia-blue hover:bg-gray-100 text-lg px-8 py-3">
            <Link to="/contact">Learn More</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AITechnologyTraining;
