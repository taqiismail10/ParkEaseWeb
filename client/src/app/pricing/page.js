// app/pricing/page.js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-semibold text-center">Pricing Plans</h1>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          title="Basic Plan"
          price="$10/month"
          features={["Real-time spot discovery", "Basic parking navigation"]}
          gradientFrom="bg-gradient-to-br from-[color:var(--pe-gray)]"
          gradientTo="to-[color:var(--pe-blue)]"
          textColor="text-black"
        />
        <PricingCard
          title="Standard Plan"
          price="$25/month"
          features={[
            "Advanced spot discovery",
            "Turn-by-turn GPS",
            "Priority support",
          ]}
          gradientFrom="bg-gradient-to-br from-[color:var(--pe-teal)]"
          gradientTo="to-[color:var(--pe-yellow)]"
          textColor="text-black"
        />
        <PricingCard
          title="Premium Plan"
          price="$50/month"
          features={[
            "Unlimited access",
            "Custom integration",
            "Dedicated support",
          ]}
          gradientFrom="bg-gradient-to-br from-[color:var(--pe-navy)]"
          gradientTo="to-[color:var(--pe-blue)]"
          textColor="text-white"
        />
      </div>
    </main>
  );
}

function PricingCard({ title, price, features, gradientFrom, gradientTo, textColor }) {
  return (
    <Card className={`shadow-lg rounded-2xl border border-black/5 ${gradientFrom} ${gradientTo} ${textColor} transition-transform hover:shadow-lg hover:-translate-y-1`}>
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
