import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import cafeHero from '@/assets/cafe-hero-bright.jpg';

const Hero = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Better Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cafeHero}
          alt="Sukino Cafe Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sukino-forest/60 via-sukino-green/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sukino-mint/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-sukino-green/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content with Better Contrast */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-white drop-shadow-lg">
            Welcome to <span className="text-sukino-mint font-cursive text-6xl md:text-8xl">Sukino</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-slide-up text-sukino-mint font-cursive">
            Cafe & Kitchen
          </p>
          <p className="text-lg md:text-xl mb-8 animate-slide-up max-w-2xl mx-auto text-white/90">
            Experience the perfect blend of artisanal coffee, fresh cuisine, and warm hospitality in our modern, green-inspired space.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <Button 
            variant="sukino" 
            size="lg" 
            onClick={scrollToReservation}
            className="bg-sukino-green text-white hover:bg-sukino-green-dark shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Reserve Your Table
          </Button>
          <Button 
            variant="sukino-outline" 
            size="lg"
            onClick={scrollToMenu}
            className="border-white text-white hover:bg-white hover:text-sukino-green shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Clock className="mr-2 h-5 w-5" />
            View Menu
          </Button>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-white/80 animate-fade-in bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            Open Daily 7AM - 10PM
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            Downtown Location
          </div>
        </div>
      </div>

      {/* Enhanced Floating elements */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-sukino-mint rounded-full animate-float opacity-70 shadow-lg"></div>
      <div className="absolute bottom-20 right-10 w-8 h-8 bg-white rounded-full animate-float opacity-50 shadow-lg" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-4 h-4 bg-sukino-sage rounded-full animate-float opacity-60 shadow-lg" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-32 right-32 w-5 h-5 bg-sukino-green-light rounded-full animate-float opacity-50 shadow-lg" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;