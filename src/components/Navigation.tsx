
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, ChevronDown } from 'lucide-react';

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

  const aiApplicationsItems = [
    { href: '/ai-applications/healthcare', label: 'Healthcare' },
    { href: '/ai-applications/finance-insurance', label: 'Finance & Insurance' },
    { href: '/ai-applications/energy', label: 'Energy' },
    { href: '/ai-applications/transportation', label: 'Transportation' },
    { href: '/ai-applications/housing', label: 'Housing' },
    { href: '/ai-applications/defence', label: 'Defence' },
  ];

  const aiRegulationsItems = [
    { href: '/ai-regulations/singapore', label: 'Singapore AI Framework' },
    { href: '/ai-regulations/eu-ai-act', label: 'EU AI Act' },
    { href: '/ai-regulations/usa', label: 'USA AI Regulations' },
    { href: '/ai-regulations/china', label: 'China AI Law' },
    { href: '/ai-regulations/global', label: 'Other Global Regulations' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  const NavLinks = ({ className = "", onClick = () => {} }) => (
    <div className={className}>
      <Link
        to="/"
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
          isActive('/')
            ? 'bg-aiwia-blue text-white'
            : 'text-aiwia-gray-dark hover:text-white'
        }`}
      >
        Home
      </Link>
      <Link
        to="/services"
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
          isActive('/services')
            ? 'bg-aiwia-blue text-white'
            : 'text-aiwia-gray-dark hover:text-white'
        }`}
      >
        Services
      </Link>
      <Link
        to="/about"
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
          isActive('/about')
            ? 'bg-aiwia-blue text-white'
            : 'text-aiwia-gray-dark hover:text-white'
        }`}
      >
        About
      </Link>
      <Link
        to="/news"
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
          isActive('/news')
            ? 'bg-aiwia-blue text-white'
            : 'text-aiwia-gray-dark hover:text-white'
        }`}
      >
        News
      </Link>
      <Link
        to="/contact"
        onClick={onClick}
        className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
          isActive('/contact')
            ? 'bg-aiwia-blue text-white'
            : 'text-aiwia-gray-dark hover:text-white'
        }`}
      >
        Contact
      </Link>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/321b7cf0-83e8-43bd-a713-056398c2c403.png"
              alt="AIWIA Consultancy Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
                isActive('/')
                  ? 'bg-aiwia-blue text-white'
                  : 'text-aiwia-gray-dark hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
                isActive('/services')
                  ? 'bg-aiwia-blue text-white'
                  : 'text-aiwia-gray-dark hover:text-white'
              }`}
            >
              Services
            </Link>
            
            {/* AI Applications Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark">
                    AI Applications
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-aiwia-blue/50 to-aiwia-blue p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              AI Applications
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore AI adoption across various industries
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        {aiApplicationsItems.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* AI Regulations Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark">
                    AI Regulations
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-aiwia-blue/50 to-aiwia-blue p-6 no-underline outline-none focus:shadow-md">
                            <div className="mb-2 mt-4 text-lg font-medium text-white">
                              AI Regulations
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Explore AI regulatory frameworks worldwide
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </div>
                      <div className="grid gap-2">
                        {aiRegulationsItems.map((item) => (
                          <NavigationMenuLink key={item.href} asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/about"
              className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
                isActive('/about')
                  ? 'bg-aiwia-blue text-white'
                  : 'text-aiwia-gray-dark hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/news"
              className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
                isActive('/news')
                  ? 'bg-aiwia-blue text-white'
                  : 'text-aiwia-gray-dark hover:text-white'
              }`}
            >
              News
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white ${
                isActive('/contact')
                  ? 'bg-aiwia-blue text-white'
                  : 'text-aiwia-gray-dark hover:text-white'
              }`}
            >
              Contact
            </Link>
          </div>

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
                    src="/lovable-uploads/321b7cf0-83e8-43bd-a713-056398c2c403.png"
                    alt="AIWIA Consultancy Logo"
                    className="h-16 w-auto"
                  />
                </div>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                >
                  Services
                </Link>
                
                {/* Mobile AI Applications */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-aiwia-gray-dark mb-2">AI Applications</h3>
                  <div className="flex flex-col space-y-2 pl-4">
                    {aiApplicationsItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile AI Regulations */}
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-aiwia-gray-dark mb-2">AI Regulations</h3>
                  <div className="flex flex-col space-y-2 pl-4">
                    {aiRegulationsItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                >
                  About
                </Link>
                <Link
                  to="/news"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                >
                  News
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md transition-colors hover:bg-aiwia-blue-light hover:text-white text-aiwia-gray-dark"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
