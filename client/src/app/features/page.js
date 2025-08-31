// app/features/page.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Smartphone,
  CreditCard,
  Shield,
  Clock,
  Zap,
  Navigation,
  Bell,
  BarChart3,
  Users,
  Car,
  Wifi,
} from "lucide-react";

export default function Features() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Powerful Features for{" "}
          <span className="text-primary">Smart Parking</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover all the innovative features that make ParkEase the ultimate
          parking solution
        </p>
      </section>

      {/* Core Features */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<MapPin className="h-8 w-8" />}
            title="Real-Time Spot Discovery"
            description="Find available parking spots instantly with live data from smart sensors across the city."
          />
          <FeatureCard
            icon={<Navigation className="h-8 w-8" />}
            title="GPS Navigation"
            description="Get turn-by-turn directions to your reserved parking spot with optimized routing."
          />
          <FeatureCard
            icon={<CreditCard className="h-8 w-8" />}
            title="Secure Payments"
            description="Pay for parking seamlessly through the app with multiple payment options and digital receipts."
          />
          <FeatureCard
            icon={<Clock className="h-8 w-8" />}
            title="Advanced Booking"
            description="Reserve parking spots up to 24 hours in advance for important meetings and events."
          />
          <FeatureCard
            icon={<Bell className="h-8 w-8" />}
            title="Smart Notifications"
            description="Get timely alerts about parking availability, booking confirmations, and time reminders."
          />
          <FeatureCard
            icon={<Shield className="h-8 w-8" />}
            title="Secure Parking"
            description="All partner locations are verified and monitored for your vehicle's safety and security."
          />
        </div>
      </section>

      {/* AI & Technology */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              AI-Powered Intelligence
            </h2>
            <p className="text-muted-foreground mb-6">
              Our advanced AI algorithms learn from traffic patterns, user
              behavior, and real-time data to provide you with the best parking
              recommendations.
            </p>
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Predictive Analytics</h3>
                  <p className="text-sm text-muted-foreground">
                    Forecast parking availability based on historical patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">Dynamic Pricing</h3>
                  <p className="text-sm text-muted-foreground">
                    Fair pricing that adapts to demand and location
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wifi className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-medium">IoT Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Connected sensors provide real-time occupancy data
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">80% Time Saved</h3>
            <p className="text-muted-foreground">
              Average time reduction in finding parking spots
            </p>
          </div>
        </div>
      </section>

      {/* Mobile App Features */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Mobile App Features
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-2xl p-8 text-center">
            <Smartphone className="h-20 w-20 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Available Soon</h3>
            <p className="text-muted-foreground">
              Native iOS and Android apps coming in Q2 2025
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">User-Friendly Interface</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive design that makes parking simple for everyone
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2">
                <Car className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Vehicle Management</h3>
                <p className="text-sm text-muted-foreground">
                  Save multiple vehicles and get size-appropriate
                  recommendations
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 rounded-lg p-2">
                <BarChart3 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Usage Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Track your parking history and spending patterns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">Coming Soon</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Car className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">EV Charging Integration</h3>
            <p className="text-sm text-muted-foreground">
              Find parking spots with electric vehicle charging stations
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Corporate Plans</h3>
            <p className="text-sm text-muted-foreground">
              Enterprise solutions for businesses and organizations
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Wifi className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Smart City Integration</h3>
            <p className="text-sm text-muted-foreground">
              Connect with city traffic management systems
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 rounded-lg p-2 text-primary">
            {icon}
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
