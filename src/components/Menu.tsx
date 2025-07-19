import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, Utensils, Cookie } from 'lucide-react';

const Menu = () => {
  const menuCategories = [
    {
      title: "Artisanal Coffee",
      icon: Coffee,
      items: [
        { name: "Sukino Signature Blend", price: "$4.50", description: "Our house blend with hints of chocolate and caramel", badge: "Popular" },
        { name: "Single Origin Pour Over", price: "$5.50", description: "Carefully selected beans from our partner farms", badge: "Premium" },
        { name: "Cold Brew Float", price: "$5.00", description: "Cold brew with vanilla ice cream", badge: "Seasonal" },
        { name: "Matcha Latte", price: "$4.80", description: "Premium Japanese matcha with steamed milk" },
      ]
    },
    {
      title: "Fresh Kitchen",
      icon: Utensils,
      items: [
        { name: "Sukino Breakfast Bowl", price: "$12.50", description: "Quinoa, avocado, poached egg, and seasonal greens", badge: "Healthy" },
        { name: "Artisan Sandwich", price: "$11.00", description: "Sourdough with locally sourced ingredients" },
        { name: "Green Goddess Salad", price: "$10.50", description: "Mixed greens with herbed yogurt dressing", badge: "Vegan" },
        { name: "Seasonal Soup", price: "$8.50", description: "Daily rotating soup made with local ingredients" },
      ]
    },
    {
      title: "Sweet Treats",
      icon: Cookie,
      items: [
        { name: "House-made Pastries", price: "$3.50", description: "Daily selection of croissants and muffins" },
        { name: "Matcha Cheesecake", price: "$6.00", description: "Creamy cheesecake with matcha flavor", badge: "Signature" },
        { name: "Seasonal Tart", price: "$5.50", description: "Fresh fruit tart with vanilla custard" },
        { name: "Energy Balls", price: "$2.50", description: "Date, nuts, and coconut energy bites", badge: "Healthy" },
      ]
    }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Popular": return "default";
      case "Premium": return "secondary";
      case "Seasonal": return "destructive";
      case "Healthy": return "outline";
      case "Vegan": return "outline";
      case "Signature": return "default";
      default: return "secondary";
    }
  };

  return (
    <section id="menu" className="py-20 px-4 bg-sukino-green-light/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-sukino-forest mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-sukino-sage max-w-2xl mx-auto">
            Carefully crafted dishes and beverages using the finest local and sustainable ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-sukino-green/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-sukino-green/10 rounded-full">
                    <category.icon className="h-8 w-8 text-sukino-green" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-sukino-forest font-cursive">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-sukino-green/10 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sukino-forest font-handwritten text-lg">{item.name}</h4>
                          {item.badge && (
                            <Badge variant={getBadgeVariant(item.badge)} className="text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-sukino-sage">{item.description}</p>
                      </div>
                      <span className="font-bold text-sukino-green ml-4 font-cursive text-lg">{item.price}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sukino-sage mb-4">All prices include locally sourced, sustainable ingredients</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="border-sukino-green text-sukino-green">Locally Sourced</Badge>
            <Badge variant="outline" className="border-sukino-green text-sukino-green">Sustainable</Badge>
            <Badge variant="outline" className="border-sukino-green text-sukino-green">Fresh Daily</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;