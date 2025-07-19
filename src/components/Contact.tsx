import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-sukino-green text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Come experience the Sukino difference. We're located in the heart of downtown, ready to serve you exceptional coffee and cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MapPin className="mr-3 h-6 w-6" />
                  Location & Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Address</h4>
                  <p className="opacity-90">
                    123 Green Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    Operating Hours
                  </h4>
                  <div className="space-y-1 opacity-90">
                    <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                    <p className="text-sm opacity-70">Kitchen closes 30 minutes before closing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Phone className="mr-3 h-6 w-6" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 opacity-70" />
                  <div>
                    <p className="font-medium">(555) 123-CAFE</p>
                    <p className="text-sm opacity-70">Reservations & General Inquiries</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 opacity-70" />
                  <div>
                    <p className="font-medium">hello@sukino.cafe</p>
                    <p className="text-sm opacity-70">Email Us Anytime</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon" className="border-white/30 text-white  text:text-green-600">
                      <Instagram className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white/30 text-white text:text-green-600">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="border-white/30 text-white  text:text-green-600">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-96">
              <CardContent className="p-0 h-full">
                <div className="bg-gradient-to-br from-green-100/20 to-green-200/30 h-full rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4 opacity-60" />
                    <p className="text-lg font-medium mb-2">Interactive Map</p>
                    <p className="opacity-70 text-sm">Map integration available</p>
                    <Button variant="outline" className="mt-4 border-white/30 text-green  text:text-green-600">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 text-white">Parking & Transit</h4>
                <div className="space-y-3 text-sm opacity-90">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Street parking available with 2-hour limit</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Public parking garage 2 blocks away</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Metro station within walking distance</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p>Bike-friendly with secure bike parking</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4">Ready to Visit?</h3>
          <p className="opacity-90 mb-6 max-w-2xl mx-auto">
            Whether you're looking for your morning coffee, a business lunch, or a cozy dinner, Sukino is ready to welcome you with open arms and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 text-lg font-medium border-2 border-white/60 text-white bg-transparent  text:text-green-700 transition-all duration-300 rounded-md"
              onClick={() => {
                const element = document.getElementById('reservation');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Make a Reservation
            </button>
            <button 
              className="px-6 py-3 text-lg font-medium bg-white text-green-700 hover:bg-green-100 hover:text-green-800 transition-all duration-300 rounded-md"
              onClick={() => {
                const element = document.getElementById('menu');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
