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

  const scrollToHowItWorks = () => {
    const section = document.getElementById("how-it-works");
    section.scrollIntoView({ behavior: "smooth" });
  };

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
              <Button
                className="px-6 py-3 bg-secondary text-black hover:bg-gray-700 hover:text-white rounded-lg"
                onClick={scrollToHowItWorks}
              >
                Learn More
              </Button>
            </div>
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

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
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

      {/* The Problem & Our Solution */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-6 md:p-8 h-full flex flex-col justify-start">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[color:var(--pe-navy)]">
              The Problem
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-black/60">
              Urban drivers waste 30% of their time searching for parking. This
              creates traffic congestion, increases emissions, and frustrates
              millions daily. Traditional parking systems lack real-time data,
              leaving drivers to circle endlessly through crowded streets.
            </p>
          </div>
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-6 md:p-8 h-full flex flex-col justify-start">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-[color:var(--pe-navy)]">
              Our Solution
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-black/60">
              ParkEase provides real-time parking discovery through smart sensors
              and AI-powered optimization. Find, reserve, and navigate to available
              parking spots instantly, reducing search time by 80%.
            </p>
          </div>
        </div>
      </section>

      {/* Starting in Bangladesh, Scaling Globally */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-[color:var(--pe-navy)]">
              Starting in Bangladesh, Scaling Globally
            </h2>
            <p className="mt-2 text-[15px] text-black/60">
              Massive market opportunity in emerging urban centers.
            </p>
            <ul className="mt-4 space-y-1.5 text-[15px] text-black/60">
              <li>18M+ registered vehicles nationwide</li>
              <li>5M+ vehicles in Dhaka metropolitan area</li>
              <li>15% annual vehicle growth rate</li>
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-black/5 shadow-sm">
            <Image
              src="/market-map.jpg"
              alt="Market Map"
              width={800}
              height={400}
              className="saturate-75 contrast-105"
            />
            <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_100%_0%,rgba(37,99,235,.06),transparent_60%)] pointer-events-none"></div>
          </div>
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
