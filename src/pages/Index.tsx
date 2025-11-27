import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Building2, MapPin, Users, Leaf, Recycle, Droplets, Sprout } from "lucide-react";

const Index = () => {
  const stats = [
    { value: "5000+", label: "Tons of floral waste recycled" },
    { value: "150+", label: "Temples partnered" },
    { value: "200+", label: "Volunteers engaged" },
    { value: "50+", label: "Communities impacted" },
  ];

  const process = [
    {
      icon: Recycle,
      title: "Collection",
      description: "Collection of devotional waste from temples and homes",
    },
    {
      icon: Droplets,
      title: "Sorting & Segregation",
      description: "Careful sorting and segregation of materials",
    },
    {
      icon: Leaf,
      title: "Eco-friendly Recycling",
      description: "Processing waste through sustainable methods",
    },
    {
      icon: Sprout,
      title: "Return to Nature",
      description: "Converting waste into natural products",
    },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1703250347337-489efcb90620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1580656256891-87365fb28938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1759929549289-8317e24b4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1758599669016-acedd3942ca2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1679841665700-2c962e7e652a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroCarousel />

      {/* Who We Are Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src="https://images.unsplash.com/photo-1759929549289-8317e24b4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Flower recycling process"
                className="rounded-lg shadow-strong w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Who We Are
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Haarwala Environment & Devotional Care Foundation is a pioneering social enterprise dedicated to transforming sacred floral waste into environmental blessings. Since our inception in 2018, we have been at the forefront of devotional waste recycling in India.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Based in Mumbai, Maharashtra, our team of dedicated professionals works tirelessly to prevent sacred organic waste from polluting our environment while honoring the spiritual significance of these materials.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Founded</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">2018</p>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      <span className="text-sm text-muted-foreground">Location</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">Mumbai</p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">Team Size</span>
                    </div>
                    <p className="text-2xl font-bold text-foreground">11-50</p>
                  </CardContent>
                </Card>
                
                <Card className="border-secondary/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Leaf className="w-5 h-5 text-secondary" />
                      <span className="text-sm text-muted-foreground">Focus</span>
                    </div>
                    <p className="text-lg font-bold text-foreground">Recycling</p>
                  </CardContent>
                </Card>
              </div>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <NavLink to="/about">Know Our Journey</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/30 hover:shadow-soft transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To prevent sacred organic waste from polluting our environment by implementing sustainable recycling practices that honor both devotion and nature. We strive to create a circular economy for devotional materials across India.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 hover:shadow-soft transition-shadow">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build a sustainable devotional ecosystem across India where every offering returns to nature with dignity. We envision a future where spirituality and environmental consciousness coexist harmoniously.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures every sacred offering is treated with respect while protecting our environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover:shadow-soft transition-all hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <NavLink to="/process">Learn More About Our Process</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Together, we're making a measurable difference in protecting our environment and honoring sacred traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Work in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A glimpse into our daily efforts to transform devotional waste into environmental blessings
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Whether you're a temple, organization, or individual, you can be part of this transformative journey
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button size="lg" asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <NavLink to="/book-appointment">Book an Appointment</NavLink>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
