import { Heart, Leaf } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sukino-forest text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <h3 className="text-2xl font-bold">Sukino</h3>
              <span className="text-sukino-mint ml-2">Cafe & Kitchen</span>
            </div>
            <p className="text-sm opacity-80">Sustainable dining, exceptional coffee</p>
          </div>

          <div className="flex items-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <Leaf className="h-4 w-4 mr-1" />
              <span>Locally Sourced</span>
            </div>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              <span>Community Focused</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p className="text-sm opacity-70">
            © {currentYear} Sukino Cafe & Kitchen. All rights reserved. | 
            <span className="ml-1">Made with care for our community</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;