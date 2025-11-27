import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Users, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Respect for Tradition",
      description: "We honor the sacred significance of devotional materials while ensuring their proper disposal.",
    },
    {
      icon: Leaf,
      title: "Environmental Stewardship",
      description: "Committed to protecting our planet through sustainable recycling practices.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Working together with temples, volunteers, and communities for collective impact.",
    },
    {
      icon: Target,
      title: "Innovation & Excellence",
      description: "Continuously improving our processes to achieve the highest standards in waste management.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              About Haarwala
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering the transformation of sacred floral waste into environmental blessings since 2018
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018, Haarwala Environment & Devotional Care Foundation emerged from a simple yet profound observation: sacred floral offerings, once used in temples and religious ceremonies, were ending up in rivers and landfills, creating environmental pollution.
                </p>
                <p>
                  Our founders recognized that these offerings carried deep spiritual significance and deserved a respectful end-of-life treatment that honored both their sacred purpose and environmental responsibility.
                </p>
                <p>
                  Today, we've grown into a pioneering social enterprise working across Mumbai and Maharashtra, partnering with over 150 temples and engaging hundreds of volunteers in our mission to create a sustainable devotional ecosystem.
                </p>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1703250347337-489efcb90620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Temple flowers"
                className="rounded-lg shadow-strong w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/30 hover:shadow-soft transition-all">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To prevent sacred organic waste from polluting our environment by implementing sustainable recycling practices that honor both devotion and nature. We strive to create a circular economy for devotional materials across India.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 hover:shadow-soft transition-all">
              <CardContent className="pt-8">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To build a sustainable devotional ecosystem across India where every offering returns to nature with dignity. We envision a future where spirituality and environmental consciousness coexist harmoniously.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-soft transition-all hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Journey So Far</h2>
            <p className="text-xl text-muted-foreground">Making a measurable difference since 2018</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Tons Recycled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">150+</div>
              <p className="text-muted-foreground">Temple Partners</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Communities Served</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
