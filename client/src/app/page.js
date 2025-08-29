// app/page.js
"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistModal from "@/components/WaitlistModal";
import { Car, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold">
              Smart Parking,{" "}
              <span className="text-primary">Smarter Cities</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              Find, reserve, and navigate to available parking spots in seconds.
              No more circling blocks.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                className="px-6 py-3 bg-primary text-white rounded-lg"
                onClick={openModal}
              >
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5" /> Real-time spot discovery
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" /> Secure bookings & payments
              </li>
              <li className="flex items-center gap-2">
                <Car className="h-5 w-5" /> Turn-by-turn navigation to park
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
            <Image
              src="/parking-car.png" // Replace with your image path
              alt="City traffic"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Feature
            icon={<MapPin className="h-6 w-6" />}
            title="Search"
            text="Open the app and instantly see nearby available spots."
          />
          <Feature
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Book"
            text="Reserve your spot with one tap, payment secured."
          />
          <Feature
            icon={<Car className="h-6 w-6" />}
            title="Park"
            text="Follow GPS to your spot. Park with confidence and save time."
          />
        </div>
      </section>
      <WaitlistModal isOpen={isModalOpen} closeModal={closeModal} />
    </main>
  );
}

function Feature({ icon, title, text }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex-row items-center gap-3 space-y-0">
        <span className="inline-flex size-9 items-center justify-center rounded-lg border">
          {icon}
        </span>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        {text}
      </CardContent>
    </Card>
  );
}
