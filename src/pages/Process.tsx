import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Recycle, Droplets, Leaf, Sprout, TrendingUp, CheckCircle2 } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Recycle,
      title: "Collection",
      description: "We collect devotional waste from temples, homes, and religious events through our network of trained collectors.",
      details: [
        "Daily collection from partner temples",
        "Scheduled pickup from residential areas",
        "Event-based collection services",
        "Proper handling of sacred materials",
      ],
      image: "https://images.unsplash.com/photo-1703250347337-489efcb90620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      icon: Droplets,
      title: "Sorting & Segregation",
      description: "Materials are carefully sorted and segregated based on their composition and potential for recycling.",
      details: [
        "Manual sorting by trained staff",
        "Separation of flowers, leaves, and other organics",
        "Removal of non-biodegradable items",
        "Quality control processes",
      ],
      image: "https://images.unsplash.com/photo-1759929549289-8317e24b4334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      icon: Leaf,
      title: "Eco-friendly Processing",
      description: "Using sustainable methods, we process the waste through composting, vermicomposting, and other green technologies.",
      details: [
        "Aerobic composting for rapid decomposition",
        "Vermicomposting using earthworms",
        "Temperature and moisture monitoring",
        "Natural additives for nutrient enrichment",
      ],
      image: "https://images.unsplash.com/photo-1580656256891-87365fb28938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
    {
      icon: Sprout,
      title: "Return to Nature",
      description: "The final products are distributed as organic compost, natural dyes, and other eco-friendly materials.",
      details: [
        "High-quality organic compost for farming",
        "Natural dyes and colors from flowers",
        "Incense and aromatic products",
        "Distribution to farmers and gardeners",
      ],
      image: "https://images.unsplash.com/photo-1679841665700-2c962e7e652a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    },
  ];

  const products = [
    {
      name: "Organic Compost",
      description: "Nutrient-rich compost for gardens and farms",
      icon: Sprout,
    },
    {
      name: "Natural Dyes",
      description: "Eco-friendly colors from flower extracts",
      icon: Droplets,
    },
    {
      name: "Incense Products",
      description: "Aromatic products from recycled flowers",
      icon: Leaf,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Recycling Process
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A systematic, sustainable approach to transforming devotional waste into environmental blessings
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  <div className={`${!isEven ? "lg:col-start-2" : ""} animate-slide-up`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-primary font-semibold text-lg">
                        Step {index + 1}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl font-bold mb-4 text-foreground">
                      {step.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${!isEven ? "lg:col-start-1 lg:row-start-1" : ""} animate-scale-in`}>
                    <img
                      src={step.image}
                      alt={step.title}
                      className="rounded-lg shadow-strong w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Products */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What We Create
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From sacred offerings to sustainable products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card key={index} className="hover:shadow-soft transition-all hover:-translate-y-1">
                  <CardContent className="pt-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{product.name}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-foreground">Environmental Impact</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our process prevents thousands of tons of organic waste from entering water bodies and landfills, 
              while producing valuable products that support sustainable agriculture and reduce chemical usage.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <p className="text-muted-foreground">Waste Diverted from Rivers</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">100%</div>
                <p className="text-muted-foreground">Natural Products</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <p className="text-muted-foreground">Chemical Additives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
