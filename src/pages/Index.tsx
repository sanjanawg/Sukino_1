import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Menu />
      <Reservation />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
