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
            
            <div className="flex flex-col sm:flex-row gap-4">
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
                  Get Kindle Edition
                </a>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-aiwia-blue text-aiwia-blue hover:bg-aiwia-blue hover:text-white"
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
                <div className="aspect-[3/4] bg-gradient-to-br from-aiwia-blue to-aiwia-green rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative text-center text-white p-6">
                    <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-90" />
                    <h3 className="text-2xl font-bold mb-2">Responsible AI Bible</h3>
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