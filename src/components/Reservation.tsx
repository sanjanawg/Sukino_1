import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Users, Phone, Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Reservation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields except special requests are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate successful reservation
    setIsSubmitted(true);
    toast({
      title: "Reservation Submitted!",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="reservation" className="py-20 px-4 bg-gradient-to-br from-sukino-green/5 to-sukino-mint/10">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-sukino-green/20">
            <CardContent className="pt-16 pb-16">
              <CheckCircle className="h-16 w-16 text-sukino-green mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-sukino-forest mb-4">
                Reservation Submitted Successfully!
              </h3>
              <p className="text-sukino-sage mb-6">
                Thank you for choosing Sukino. We'll contact you within 24 hours to confirm your reservation.
              </p>
              <Button 
                variant="sukino" 
                onClick={() => setIsSubmitted(false)}
              >
                Make Another Reservation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="reservation" className="py-20 px-4 bg-gradient-to-br from-sukino-green/5 to-sukino-mint/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sukino-forest mb-4">
            Reserve Your Table
          </h2>
          <p className="text-lg text-sukino-sage max-w-2xl mx-auto">
            Secure your spot at Sukino and enjoy our fresh, sustainable cuisine in our welcoming atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reservation Form */}
          <Card className="bg-white/90 backdrop-blur-sm border-sukino-green/20">
            <CardHeader>
              <CardTitle className="text-2xl text-sukino-forest flex items-center">
                <Calendar className="mr-3 h-6 w-6 text-sukino-green" />
                Book Your Table
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll confirm your reservation within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="7:00">7:00 AM</SelectItem>
                        <SelectItem value="8:00">8:00 AM</SelectItem>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="13:00">1:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests">Guests *</Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="# of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                        <SelectItem value="5">5 Guests</SelectItem>
                        <SelectItem value="6">6 Guests</SelectItem>
                        <SelectItem value="7">7 Guests</SelectItem>
                        <SelectItem value="8">8 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests (Optional)</Label>
                  <Input
                    id="requests"
                    type="text"
                    placeholder="Dietary restrictions, celebrations, etc."
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  />
                </div>

                <Button type="submit" variant="sukino" className="w-full" size="lg">
                  Reserve Table
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <div className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-sukino-green/20">
              <CardHeader>
                <CardTitle className="text-xl text-sukino-forest flex items-center">
                  <Clock className="mr-3 h-5 w-5 text-sukino-green" />
                  Hours & Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sukino-forest mb-2">Opening Hours</h4>
                  <div className="space-y-1 text-sukino-sage">
                    <p>Monday - Friday: 7:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sukino-forest mb-2">Reservation Policy</h4>
                  <div className="space-y-1 text-sukino-sage text-sm">
                    <p>• Reservations confirmed within 24 hours</p>
                    <p>• Tables held for 15 minutes past reservation time</p>
                    <p>• Cancellations appreciated 2+ hours in advance</p>
                    <p>• Large parties (8+) may require deposit</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-sukino-green text-white">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  Need Immediate Assistance?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Call us directly for same-day reservations or special requests.</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    <span>(555) 123-CAFE</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    <span>hello@sukino.cafe</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;