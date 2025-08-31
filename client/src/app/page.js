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

      {/* The Problem & Our Solution */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* The Problem Card */}
          <div className="rounded-2xl bg-red-50 border border-red-100 p-6 md:p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                The Problem
              </h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Urban drivers waste 30% of their time searching for parking.
                This creates traffic congestion, increases emissions, and
                frustrates millions daily.
              </p>
              <p>
                Traditional parking systems lack real-time data, leaving drivers
                to circle endlessly through crowded streets.
              </p>
            </div>
          </div>

          {/* Our Solution Card */}
          <div className="rounded-2xl bg-green-50 border border-green-100 p-6 md:p-8 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900">
                Our Solution
              </h3>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                ParkEase provides real-time parking discovery through smart
                sensors and AI-powered optimization.
              </p>
              <p>
                Find, reserve, and navigate to available parking spots
                instantly, reducing search time by 80%.
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center text-green-600 hover:text-green-700 font-medium transition-colors">
                  See our Mission →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
        <h3 className="text-xl md:text-l font-medium text-gray-500">
          Three simple steps to smarter parking
        </h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Feature
            icon={<MapPin className="h-6 w-6" />}
            title="Find"
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
