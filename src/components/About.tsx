import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainable Sourcing",
      description: "We partner with local farms and suppliers who share our commitment to environmental sustainability and quality."
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Sukino is more than a cafe - we're a gathering place where neighbors become friends and ideas flourish."
    },
    {
      icon: Users,
      title: "Artisan Crafted",
      description: "Every dish and drink is prepared with care by our skilled team using traditional techniques and fresh ingredients."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "From our signature coffee blends to our seasonal menu, we maintain the highest standards in everything we serve."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sukino-forest mb-4">
            About Sukino
          </h2>
          <p className="text-lg text-sukino-sage max-w-3xl mx-auto">
            Born from a passion for exceptional coffee and sustainable cuisine, Sukino represents the harmony between traditional craftsmanship and modern dining.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-sukino-forest font-cursive">Our Story</h3>
            <div className="space-y-4 text-sukino-sage">
              <p>
                Founded in 2020, Sukino began as a simple dream: to create a space where exceptional coffee meets conscious cuisine. Our founders, inspired by Japanese aesthetics and sustainable practices, designed Sukino to be a refuge from the bustling city—a place where every detail reflects our commitment to quality and community.
              </p>
              <p>
                The name "Sukino" comes from the Japanese concept of finding beauty in simplicity. This philosophy guides everything we do, from our minimalist design to our carefully curated menu featuring locally sourced, seasonal ingredients.
              </p>
              <p>
                Today, Sukino has become a beloved neighborhood gathering place, serving discerning coffee lovers and food enthusiasts who appreciate the intersection of sustainability, quality, and genuine hospitality.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-sukino-green-light to-sukino-mint p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-bold text-sukino-forest mb-4 font-cursive">Our Mission</h4>
                <p className="text-sukino-sage mb-4">
                  To cultivate community through exceptional coffee, sustainable cuisine, and warm hospitality while supporting local farmers and artisans.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sukino-green-light text-sukino-forest text-sm rounded-full">Local Sourcing</span>
                  <span className="px-3 py-1 bg-sukino-green-light text-sukino-forest text-sm rounded-full">Zero Waste</span>
                  <span className="px-3 py-1 bg-sukino-green-light text-sukino-forest text-sm rounded-full">Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-sukino-green/20 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-sukino-green-light rounded-full group-hover:bg-sukino-green group-hover:text-white transition-all duration-300">
                    <value.icon className="h-6 w-6 text-sukino-green group-hover:text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-sukino-forest mb-3">{value.title}</h4>
                <p className="text-sm text-sukino-sage">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-sukino-forest mb-8 font-cursive">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-sukino-green-light to-sukino-mint rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-sukino-forest">MS</span>
              </div>
              <h4 className="text-lg font-bold text-sukino-forest">Maya Suzuki</h4>
              <p className="text-sukino-sage">Head Chef & Co-founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-sukino-sage to-sukino-green-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-sukino-forest">AK</span>
              </div>
              <h4 className="text-lg font-bold text-sukino-forest">Alex Kim</h4>
              <p className="text-sukino-sage">Coffee Director & Co-founder</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-sukino-mint to-sukino-green rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JR</span>
              </div>
              <h4 className="text-lg font-bold text-sukino-forest">Jordan Rivera</h4>
              <p className="text-sukino-sage">General Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;