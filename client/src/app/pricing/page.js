// app/pricing/page.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold">Our Pricing Plans</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Basic"
          price="$9.99/mo"
          features={["Real-time spot discovery", "Basic parking navigation"]}
        />
        <PricingCard
          title="Pro"
          price="$19.99/mo"
          features={[
            "Advanced spot discovery",
            "Turn-by-turn GPS",
            "Priority support",
          ]}
        />
        <PricingCard
          title="Enterprise"
          price="$49.99/mo"
          features={[
            "Unlimited access",
            "Custom integration",
            "Dedicated support",
          ]}
        />
      </div>
    </main>
  );
}

function PricingCard({ title, price, features }) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{price}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
