
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const NavLinks = ({ className = "", onClick = () => {} }) => (
    <div className={className}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={onClick}
          className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
            isActive(item.href)
              ? 'bg-aiwia-blue text-white'
              : 'text-aiwia-gray-dark hover:text-white'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/8c862949-ea8c-434b-abb1-8edc26aa2707.png"
              alt="AIWIA Consultancy Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <NavLinks className="hidden md:flex space-x-2" />

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center mb-8">
                  <img 
                    src="/lovable-uploads/8c862949-ea8c-434b-abb1-8edc26aa2707.png"
                    alt="AIWIA Consultancy Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <NavLinks 
                  className="flex flex-col space-y-2" 
                  onClick={() => setIsOpen(false)} 
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
