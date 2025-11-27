import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TreesIcon, Users, Building2, Check } from "lucide-react";

const Donate = () => {
  const impactAreas = [
    {
      icon: TreesIcon,
      title: "Environmental Conservation",
      description:
        "Your donation helps prevent thousands of tons of waste from polluting our rivers and environment.",
    },
    {
      icon: Users,
      title: "Community Development",
      description:
        "Support training programs for waste collectors and community awareness initiatives.",
    },
    {
      icon: Building2,
      title: "Infrastructure Growth",
      description:
        "Help us expand our processing facilities to reach more temples and communities.",
    },
  ];

  const benefits = [
    "Tax deduction benefits under 80G",
    "Regular updates on impact of your donation",
    "Recognition in our annual report",
    "Invitation to exclusive volunteer events",
    "Certificate of contribution",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Support Our Mission
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your contribution helps us transform devotional waste into
              environmental blessings
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Where Your Donation Goes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every rupee makes a difference in creating a sustainable
              devotional ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-soft transition-all hover:-translate-y-1"
                >
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Choose Your Contribution
            </h2>
            <p className="text-xl text-muted-foreground">
              Select an amount or enter a custom donation
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {["₹500", "₹1,000", "₹2,500", "₹5,000"].map((amount) => (
                  <Button
                    key={amount}
                    variant="outline"
                    size="lg"
                    className="h-20 text-xl font-bold hover:bg-primary hover:text-white transition-colors"
                  >
                    {amount}
                  </Button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Custom Amount (₹)
                </label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full h-12 px-4 border border-input rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Donation Benefits
                </h3>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                Proceed to Donate
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-4">
                Secure payment powered by trusted payment gateway
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Other Ways to Help
            </h2>
            <p className="text-xl text-muted-foreground">
              Support our mission beyond monetary contributions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-soft transition-all">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Volunteer
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join our team of volunteers and contribute your time and
                  skills
                </p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Partner Temple
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connect your temple with our waste collection network
                </p>
                <Button variant="outline">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-soft transition-all">
              <CardContent className="pt-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  Spread Awareness
                </h3>
                <p className="text-muted-foreground mb-4">
                  Share our mission on social media and in your community
                </p>
                <Button variant="outline">Share</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Your Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              See what we've achieved together
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Tons Recycled</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">150+</div>
              <p className="text-muted-foreground">Temples Partnered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Volunteers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">50+</div>
              <p className="text-muted-foreground">Communities</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
