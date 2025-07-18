
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Calendar, Clock, Users, Target, BookOpen, CheckCircle } from 'lucide-react';

const GenerativeAIUsage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm();

  const upcomingDates = [
    { date: "15 Aug 2025", slots: "Available" },
    { date: "15 Sep 2025", slots: "Available" }
  ];

  const modules = [
    {
      number: 1,
      title: "Introduction to Generative AI",
      description: "Foundational principles and concepts of generative AI technology",
      topics: ["Course Administration & Overview", "AI Definitions & Significance", "Historical Context", "Neural Networks & Deep Learning", "Types of Generative Models", "Current Limitations"]
    },
    {
      number: 2,
      title: "Understanding Key Tools and Platforms",
      description: "Overview of leading generative AI platforms and tools",
      topics: ["Text-based AI (ChatGPT, Gemini, Claude)", "Image Generation (DALL-E, Midjourney)", "Music & Video Tools", "Platform Comparison", "Safety & Security Risks"]
    },
    {
      number: 3,
      title: "Crafting Effective Prompts and Interacting with AI",
      description: "Master the art of prompt engineering for optimal results",
      topics: ["Prompt Engineering Fundamentals", "ACROSTIC Prompting", "Working with Long Text", "Task-Based Prompts", "Iterative Improvement"]
    },
    {
      number: 4,
      title: "Advanced Prompting Techniques and Multimedia Content",
      description: "Advanced prompting strategies and multimedia generation",
      topics: ["One/Few Shot Prompting", "Chain of Thought Prompting", "Structured Data Handling", "Voice Interaction", "Image & Video Generation"]
    },
    {
      number: 5,
      title: "Applications in Everyday Life and Work",
      description: "Practical applications across various domains and industries",
      topics: ["Productivity Tools", "Creative Applications", "Industry-Specific Uses", "RAG & Synthetic Data", "Workflow Automation", "Capstone Project Brief"]
    },
    {
      number: 6,
      title: "Ethics, Privacy, and Responsible AI Use",
      description: "Critical examination of ethical and societal dimensions",
      topics: ["Privacy & Data Security", "Copyright & Fair Use", "Bias Mitigation", "Misinformation & Deepfakes", "Best Practices"]
    },
    {
      number: 7,
      title: "Future Trends and Continued Learning",
      description: "Preparation for ongoing engagement with evolving AI field",
      topics: ["Emerging Trends", "AI Governance", "Continued Learning Resources", "Capstone Presentations", "Course Completion"]
    }
  ];

  const onSubmit = (data: any) => {
    console.log('Course registration:', data);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Generative AI Usage Course</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Master practical generative AI tools for creativity and productivity in your personal and professional life
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>3 weeks • 7 sessions</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>Beginner Level</span>
              </div>
              <div className="flex items-center">
                <Target className="w-5 h-5 mr-2" />
                <span>SGD 600</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-aiwia-black mb-6">Course Objectives</h2>
              <div className="space-y-4 mb-8">
                <p className="text-aiwia-gray-dark">
                  Educate adults on generative AI tools and capability to help integrate AI usage into everyday and work life. 
                  Increase productivity level of adults through practical, hands-on learning experiences.
                </p>
              </div>

              <h3 className="text-xl font-bold text-aiwia-black mb-4">What You'll Learn</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-aiwia-green mr-2 mt-0.5" />
                  <span>Master popular AI tools like ChatGPT, DALL-E, and Midjourney</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-aiwia-green mr-2 mt-0.5" />
                  <span>Develop advanced prompt engineering skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-aiwia-green mr-2 mt-0.5" />
                  <span>Apply AI to boost personal and professional productivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-aiwia-green mr-2 mt-0.5" />
                  <span>Understand ethical considerations and responsible AI use</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-aiwia-green mr-2 mt-0.5" />
                  <span>Stay current with emerging AI trends and technologies</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-aiwia-black mb-4">Technical Requirements</h3>
              <ul className="space-y-2 text-aiwia-gray-dark">
                <li>• Computer/tablet with internet access</li>
                <li>• Modern web browser</li>
                <li>• Account creation for various AI platforms (many offer free tiers)</li>
                <li>• Optional: Smartphone for mobile AI apps</li>
              </ul>
            </div>

            <div>
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Calendar className="w-6 h-6 mr-2" />
                    Upcoming Course Dates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDates.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                        <div>
                          <div className="font-semibold text-aiwia-black">{schedule.date}</div>
                          <div className="text-sm text-aiwia-gray-dark">7 Sessions • 3 Weeks</div>
                        </div>
                        <div className="text-sm font-medium text-aiwia-green">{schedule.slots}</div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700" onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}>
                    Register Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-6 h-6 mr-2" />
                    Course Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• 60% hands-on practical application</li>
                    <li>• Real-world workplace use cases</li>
                    <li>• Flexible pacing with optional live sessions</li>
                    <li>• Peer learning and discussion forums</li>
                    <li>• Practical projects instead of traditional tests</li>
                    <li>• Monthly "AI Tool Spotlight" sessions</li>
                    <li>• Access to community forum</li>
                    <li>• Resource library with updated tool lists</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-aiwia-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Course Modules</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Comprehensive curriculum covering all aspects of generative AI usage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {module.number}
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </div>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {module.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-start text-xs">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2 mt-1.5"></div>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-aiwia-black mb-4">Register for Generative AI Usage Course</h2>
            <p className="text-xl text-aiwia-gray-dark">
              Secure your spot in our upcoming course sessions
            </p>
          </div>

          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle>Course Registration</CardTitle>
              <CardDescription>
                Fill out the form below to register for the Generative AI Usage course. We'll contact you with confirmation and next steps.
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
                      name="preferredDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Course Date *</FormLabel>
                          <FormControl>
                            <select {...field} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Select preferred date</option>
                              <option value="15 Aug 2025">15 Aug 2025</option>
                              <option value="15 Sep 2025">15 Sep 2025</option>
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
                          <FormLabel>AI Experience Level</FormLabel>
                          <FormControl>
                            <select {...field} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                              <option value="">Select your experience level</option>
                              <option value="beginner">Beginner</option>
                              <option value="some-experience">Some Experience</option>
                              <option value="intermediate">Intermediate</option>
                            </select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
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
                      Thank you for registering for the Generative AI Usage course. We'll contact you within 24 hours with confirmation and next steps.
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-purple-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Master Generative AI?</h2>
          <p className="text-xl mb-8">
            Join our comprehensive course and transform how you work and create with AI technology.
          </p>
          <Button asChild className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GenerativeAIUsage;
