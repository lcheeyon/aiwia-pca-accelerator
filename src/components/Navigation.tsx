
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
          <div className="hidden md:flex items-center space-x-2">
            <NavLinks className="flex space-x-2" />
            
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
                    src="/lovable-uploads/8c862949-ea8c-434b-abb1-8edc26aa2707.png"
                    alt="AIWIA Consultancy Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <NavLinks 
                  className="flex flex-col space-y-2" 
                  onClick={() => setIsOpen(false)} 
                />
                
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
