
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const newsArticles = [
    {
      id: "openai-agentic-ai-revolution",
      title: "OpenAI's Agentic AI Services Transform Enterprise Operations",
      excerpt: "OpenAI unveils new agentic AI capabilities that enable autonomous task execution and multi-step reasoning across enterprise workflows",
      date: "July 28, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "microsoft-copilot-agentic-update",
      title: "Microsoft Copilot 2.0: Advanced Agentic AI for Business Productivity",
      excerpt: "Microsoft's latest Copilot update introduces autonomous agents that can manage complex business processes with minimal human intervention",
      date: "July 15, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "google-agent-spaces-launch",
      title: "Google Agent Spaces: Collaborative AI Agents for Team Productivity",
      excerpt: "Google's new Agent Spaces platform enables multiple AI agents to collaborate seamlessly within shared digital workspaces",
      date: "June 30, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "agentic-ai-enterprise-adoption",
      title: "Enterprise Adoption of Agentic AI: A Comprehensive Analysis",
      excerpt: "How Fortune 500 companies are implementing agentic AI systems to achieve unprecedented levels of automation and efficiency",
      date: "June 20, 2025",
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "agentic-ai-governance-framework",
      title: "Building Governance Frameworks for Agentic AI Deployment",
      excerpt: "Best practices for establishing oversight and control mechanisms for autonomous AI agents in enterprise environments",
      date: "June 10, 2025",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "aiwia-pca-framework",
      title: "AIWIA Launches Comprehensive AI Adoption Framework",
      excerpt: "New PCA framework integrates Privacy, Cybersecurity, and Agile methodologies for responsible AI implementation",
      date: "December 15, 2024",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "iso-42001-game-changer",
      title: "ISO 42001 AI Management System: A Game Changer for Organizations",
      excerpt: "Understanding the new international standard for AI management systems and its impact on business operations",
      date: "December 10, 2024", 
      category: "Industry Insights",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "singapore-data-protection-trustmark",
      title: "Data Protection Trustmark: Singapore's Approach to Privacy Compliance",
      excerpt: "How Singapore's Data Protection Trustmark certification helps businesses build customer trust",
      date: "December 5, 2024",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "future-rag-technologies",
      title: "The Future of RAG Technologies in Customer Service",
      excerpt: "Exploring how Retrieval-Augmented Generation is revolutionizing customer support systems",
      date: "November 28, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "agile-transformation-beyond-software",
      title: "Agile Transformation: Beyond Software Development",
      excerpt: "How agile methodologies are being adopted across all business functions for enhanced productivity",
      date: "November 20, 2024",
      category: "Agile",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cybersecurity-ai-age",
      title: "Cybersecurity in the Age of AI: New Challenges and Solutions",
      excerpt: "Addressing the evolving cybersecurity landscape as organizations adopt AI technologies",
      date: "November 15, 2024",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Company News", "Industry Insights", "Compliance", "Technology", "Agile", "Cybersecurity"];

  const filteredArticles = selectedCategory === "All" 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-aiwia-black to-aiwia-gray-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">News & Insights</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay updated with the latest developments in AI adoption, cybersecurity, 
              and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition-colors ${
                  selectedCategory === category
                    ? 'bg-aiwia-blue text-white border-aiwia-blue'
                    : 'border-aiwia-blue text-aiwia-blue hover:bg-aiwia-blue hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-aiwia-gray-dark mb-2">
                    <span className="bg-aiwia-blue text-white px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-aiwia-blue transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link 
                    to={`/news/${article.id}`}
                    className="text-aiwia-blue hover:text-aiwia-blue-dark font-semibold"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Show message when no articles found */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
