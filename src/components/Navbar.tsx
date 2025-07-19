import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          
<div className="flex items-center">
  <img 
    src="/image/logo.jpeg" 
    alt="Sukino Logo" 
    className="h-10 w-auto" 
  />
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-sukino-green transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-sukino-green transition-colors duration-300 font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reservation')}
              className="text-foreground hover:text-sukino-green transition-colors duration-300 font-medium"
            >
              Reservations
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-sukino-green transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-sukino-green transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <Button variant="sukino" onClick={() => scrollToSection('reservation')}>
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-foreground hover:text-sukino-green w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block px-3 py-2 text-foreground hover:text-sukino-green w-full text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('reservation')}
                className="block px-3 py-2 text-foreground hover:text-sukino-green w-full text-left"
              >
                Reservations
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-sukino-green w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-sukino-green w-full text-left"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button variant="sukino" onClick={() => scrollToSection('reservation')} className="w-full">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;