import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookAppointment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    type: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Connect to backend API when ready
    setTimeout(() => {
      toast({
        title: "Appointment Requested!",
        description: "We'll confirm your appointment within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        type: "",
        date: "",
        time: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Book an Appointment
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a visit to discuss how we can help with your devotional waste recycling needs
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="pt-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 1234567890"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="organization">Organization/Temple Name</Label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Your temple or organization"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="type">Appointment Type *</Label>
                      <Select
                        value={formData.type}
                        onValueChange={(value) => setFormData({ ...formData, type: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select appointment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                          <SelectItem value="partnership">Temple Partnership</SelectItem>
                          <SelectItem value="collection">Collection Service Setup</SelectItem>
                          <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => setFormData({ ...formData, time: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time slot" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="9-10">9:00 AM - 10:00 AM</SelectItem>
                            <SelectItem value="10-11">10:00 AM - 11:00 AM</SelectItem>
                            <SelectItem value="11-12">11:00 AM - 12:00 PM</SelectItem>
                            <SelectItem value="12-13">12:00 PM - 1:00 PM</SelectItem>
                            <SelectItem value="14-15">2:00 PM - 3:00 PM</SelectItem>
                            <SelectItem value="15-16">3:00 PM - 4:00 PM</SelectItem>
                            <SelectItem value="16-17">4:00 PM - 5:00 PM</SelectItem>
                            <SelectItem value="17-18">5:00 PM - 6:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us more about your needs or any specific requirements..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90"
                      size="lg"
                    >
                      {isSubmitting ? "Submitting..." : "Request Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Available Days</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Response Time</h3>
                  </div>
                  <p className="text-muted-foreground">
                    We typically confirm appointments within 24 hours via email or phone.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">Visit Us</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Haarwala Foundation<br />
                    Mumbai, Maharashtra<br />
                    India - 400001
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment;
