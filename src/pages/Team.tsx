import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "Environmental engineer with 15+ years of experience in sustainable waste management.",
    },
    {
      name: "Priya Sharma",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "Expert in logistics and supply chain optimization for environmental organizations.",
    },
    {
      name: "Dr. Anand Patel",
      role: "Technical Advisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      bio: "PhD in Environmental Science, specializing in organic waste processing technologies.",
    },
  ];

  const team = [
    {
      name: "Meera Singh",
      role: "Community Outreach Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Vikram Desai",
      role: "Processing Unit Supervisor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Kavita Reddy",
      role: "Quality Control Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Amit Gupta",
      role: "Volunteer Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
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
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Dedicated professionals working together to create a sustainable devotional ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Guiding our mission with vision and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.map((member, index) => (
              <Card key={index} className="hover:shadow-soft transition-all hover:-translate-y-1">
                <CardContent className="pt-8 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                    >
                      <Mail className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Core Team</h2>
            <p className="text-xl text-muted-foreground">
              The backbone of our daily operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-soft transition-all hover:-translate-y-1">
                <CardContent className="pt-8 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Join Our Team</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're always looking for passionate individuals who want to make a difference. 
              Whether as staff or volunteers, there's a place for you in our mission.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:careers@haarwala.org"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-semibold"
              >
                <Mail className="w-5 h-5" />
                careers@haarwala.org
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
