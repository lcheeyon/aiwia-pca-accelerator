import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface SearchResult {
  title: string;
  url: string;
  type: 'page' | 'service' | 'news' | 'ai-application' | 'ai-regulation';
  excerpt: string;
  category: string;
}

// Searchable content data
const searchableContent: SearchResult[] = [
  // Main pages
  { title: 'Home', url: '/', type: 'page', excerpt: 'AIWIA Consultancy - Leading AI and technology consulting services', category: 'Main' },
  { title: 'About Us', url: '/about', type: 'page', excerpt: 'Learn about AIWIA Consultancy and our mission', category: 'Main' },
  { title: 'Services', url: '/services', type: 'page', excerpt: 'Comprehensive AI and technology consulting services', category: 'Main' },
  { title: 'News & Insights', url: '/news', type: 'page', excerpt: 'Latest news and insights in AI and technology', category: 'Main' },
  { title: 'Contact', url: '/contact', type: 'page', excerpt: 'Get in touch with our experts', category: 'Main' },
  
  // Services
  { title: 'AI Adoption', url: '/services/ai-adoption', type: 'service', excerpt: 'Strategic AI implementation and adoption services', category: 'Services' },
  { title: 'AI Technology Training', url: '/services/ai-technology-training', type: 'service', excerpt: 'Comprehensive AI technology training programs', category: 'Services' },
  { title: 'Agile Adoption Training', url: '/services/agile-adoption-training', type: 'service', excerpt: 'Agile methodology training and implementation', category: 'Services' },
  { title: 'Automated Reporting', url: '/services/automated-reporting', type: 'service', excerpt: 'Automated reporting solutions and implementation', category: 'Services' },
  { title: 'Compliance Services', url: '/services/compliance', type: 'service', excerpt: 'Regulatory compliance consulting and implementation', category: 'Services' },
  { title: 'Compliance Implementation', url: '/services/compliance-implementation', type: 'service', excerpt: 'End-to-end compliance implementation services', category: 'Services' },
  { title: 'Cybersecurity Essentials', url: '/services/cybersecurity-essentials', type: 'service', excerpt: 'Essential cybersecurity training and consulting', category: 'Services' },
  { title: 'DPO Service', url: '/services/dpo-service', type: 'service', excerpt: 'Data Protection Officer services and consulting', category: 'Services' },
  { title: 'Data Protection Fundamentals', url: '/services/data-protection-fundamentals', type: 'service', excerpt: 'Fundamental data protection training and consulting', category: 'Services' },
  { title: 'Data Protection Trustmark', url: '/services/data-protection-trustmark', type: 'service', excerpt: 'Data Protection Trustmark certification services', category: 'Services' },
  { title: 'Digital Transformation', url: '/services/digital-transformation', type: 'service', excerpt: 'Comprehensive digital transformation consulting', category: 'Services' },
  { title: 'Generative AI Usage', url: '/services/generative-ai-usage', type: 'service', excerpt: 'Generative AI implementation and usage training', category: 'Services' },
  { title: 'ISO 27001', url: '/services/iso27001', type: 'service', excerpt: 'ISO 27001 certification and implementation', category: 'Services' },
  { title: 'ISO 42001', url: '/services/iso42001', type: 'service', excerpt: 'ISO 42001 AI management system certification', category: 'Services' },
  { title: 'Microsoft Copilot', url: '/services/microsoft-copilot', type: 'service', excerpt: 'Microsoft Copilot implementation and training', category: 'Services' },
  { title: 'Professional Product Owner', url: '/services/professional-product-owner', type: 'service', excerpt: 'Professional Product Owner certification training', category: 'Services' },
  { title: 'Professional Scrum Master', url: '/services/professional-scrum-master', type: 'service', excerpt: 'Professional Scrum Master certification training', category: 'Services' },
  { title: 'Customer Service AI', url: '/services/customer-service-ai', type: 'service', excerpt: 'AI-powered customer service solutions', category: 'Services' },
  { title: 'Fraud Detection', url: '/services/fraud-detection', type: 'service', excerpt: 'AI-powered fraud detection systems', category: 'Services' },
  { title: 'HR Optimization', url: '/services/hr-optimization', type: 'service', excerpt: 'AI-powered HR optimization solutions', category: 'Services' },
  { title: 'Privacy & Security Training', url: '/services/privacy-security-training', type: 'service', excerpt: 'Comprehensive privacy and security training', category: 'Services' },

  // AI Applications
  { title: 'AI in Healthcare', url: '/ai-applications/healthcare', type: 'ai-application', excerpt: 'AI applications and innovations in healthcare industry', category: 'AI Applications' },
  { title: 'AI in Finance & Insurance', url: '/ai-applications/finance-insurance', type: 'ai-application', excerpt: 'AI applications in financial services and insurance', category: 'AI Applications' },
  { title: 'AI in Energy', url: '/ai-applications/energy', type: 'ai-application', excerpt: 'AI applications in energy sector and sustainability', category: 'AI Applications' },
  { title: 'AI in Transportation', url: '/ai-applications/transportation', type: 'ai-application', excerpt: 'AI applications in transportation and logistics', category: 'AI Applications' },
  { title: 'AI in Housing', url: '/ai-applications/housing', type: 'ai-application', excerpt: 'AI applications in housing and real estate', category: 'AI Applications' },
  { title: 'AI in Defence', url: '/ai-applications/defence', type: 'ai-application', excerpt: 'AI applications in defense and security sectors', category: 'AI Applications' },

  // AI Regulations
  { title: 'Singapore AI Framework', url: '/ai-regulations/singapore', type: 'ai-regulation', excerpt: 'Singapore AI governance framework and regulations', category: 'AI Regulations' },
  { title: 'EU AI Act', url: '/ai-regulations/eu-ai-act', type: 'ai-regulation', excerpt: 'European Union AI Act and compliance requirements', category: 'AI Regulations' },
  { title: 'USA AI Regulations', url: '/ai-regulations/usa', type: 'ai-regulation', excerpt: 'United States AI regulations and frameworks', category: 'AI Regulations' },
  { title: 'China AI Law', url: '/ai-regulations/china', type: 'ai-regulation', excerpt: 'China AI regulations and governance framework', category: 'AI Regulations' },
  { title: 'Global AI Regulations', url: '/ai-regulations/global', type: 'ai-regulation', excerpt: 'Global AI regulations and international frameworks', category: 'AI Regulations' },

  // News articles (sample entries)
  { title: 'AI WIAPC Framework', url: '/news/ai-wiapc-framework', type: 'news', excerpt: 'Understanding the AI WIAPC framework for organizations', category: 'News' },
  { title: 'Agile Transformation Beyond Software', url: '/news/agile-transformation-beyond-software', type: 'news', excerpt: 'Extending agile methodologies beyond software development', category: 'News' },
  { title: 'Cybersecurity in AI Age', url: '/news/cybersecurity-ai-age', type: 'news', excerpt: 'Cybersecurity challenges and solutions in the AI era', category: 'News' },
  { title: 'Future of RAG Technologies', url: '/news/future-rag-technologies', type: 'news', excerpt: 'Future developments in Retrieval-Augmented Generation', category: 'News' },
  { title: 'ISO 42001 Game Changer', url: '/news/iso42001-game-changer', type: 'news', excerpt: 'How ISO 42001 is transforming AI governance', category: 'News' },
  { title: 'Singapore Data Protection Trustmark', url: '/news/singapore-data-protection-trustmark', type: 'news', excerpt: 'Singapore Data Protection Trustmark certification program', category: 'News' },
];

interface SearchBarProps {
  onSearchTrack?: (query: string, resultCount: number) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchTrack }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length > 2) {
      const searchResults = searchableContent.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6); // Limit to 6 results

      setResults(searchResults);
      setIsOpen(true);
      
      // Track search
      if (onSearchTrack) {
        onSearchTrack(query, searchResults.length);
      }
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query, onSearchTrack]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  const handleResultClick = () => {
    setIsOpen(false);
    setQuery('');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-blue-100 text-blue-800';
      case 'news': return 'bg-green-100 text-green-800';
      case 'ai-application': return 'bg-purple-100 text-purple-800';
      case 'ai-regulation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          type="text"
          placeholder="Search services, news, AI applications..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-10 pr-10 w-full"
          onFocus={() => query.length > 2 && setIsOpen(true)}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 z-50 mt-1 max-h-96 overflow-auto shadow-lg">
          <CardContent className="p-0">
            {results.map((result, index) => (
              <Link
                key={index}
                to={result.url}
                onClick={handleResultClick}
                className="block p-4 hover:bg-accent transition-colors border-b last:border-b-0"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-sm truncate">{result.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                        {result.category}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{result.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
            {query.length > 2 && results.length === 0 && (
              <div className="p-4 text-center text-muted-foreground">
                No results found for "{query}"
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;