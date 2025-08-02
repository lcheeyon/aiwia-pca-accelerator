import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Shield, Users, Lightbulb } from 'lucide-react';

const BookPromotion = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-aiwia-blue/5 to-aiwia-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-aiwia-green" />
              <span className="bg-aiwia-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                NOW ON SALE
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-aiwia-blue">
              The Responsible AI Bible
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Navigate the complex landscape of AI implementation with confidence. This comprehensive guide helps organizations understand the critical risks associated with AI adoption and establish robust frameworks for responsible AI governance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-aiwia-green mt-1" />
                <div>
                  <h4 className="font-semibold text-aiwia-blue">Risk Assessment</h4>
                  <p className="text-sm text-gray-600">Identify and mitigate AI-related risks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-aiwia-green mt-1" />
                <div>
                  <h4 className="font-semibold text-aiwia-blue">Cultural Framework</h4>
                  <p className="text-sm text-gray-600">Build responsible AI culture</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-aiwia-green mt-1" />
                <div>
                  <h4 className="font-semibold text-aiwia-blue">Best Practices</h4>
                  <p className="text-sm text-gray-600">Implement proven governance processes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <BookOpen className="h-5 w-5 text-aiwia-green mt-1" />
                <div>
                  <h4 className="font-semibold text-aiwia-blue">Practical Guide</h4>
                  <p className="text-sm text-gray-600">Real-world implementation strategies</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-start">
              <Button 
                asChild 
                size="lg" 
                className="bg-aiwia-green hover:bg-aiwia-green-dark text-white"
              >
                <a 
                  href="https://shorturl.at/jFPeQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on Amazon
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:order-first">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="aspect-[3/4] rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Innovation and bright ideas for Responsible AI"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-aiwia-blue/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 text-center text-white p-6">
                    <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-90" />
                    <h3 className="text-xl font-bold mb-1">Responsible AI Bible</h3>
                    <p className="text-sm opacity-90">Your Complete Guide to Ethical AI Implementation</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                    Limited Time Offer
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookPromotion;