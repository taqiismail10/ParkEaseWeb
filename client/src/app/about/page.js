// app/about/page.js
import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      {/* About Us Section */}
      <h1 className="text-3xl font-semibold">About Us</h1>
      <div className="mt-8">
        <p className="text-lg text-muted-foreground">
          ParkEase is transforming urban mobility in Dhaka with AI-powered
          parking solutions that aim to reduce congestion, save time, and
          improve the driving experience.
        </p>
      </div>

      {/* Meet the Team Section */}
      <h2 className="mt-12 text-2xl font-semibold">Meet the Team</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="text-center">
          <Image
            src="/member1.jpg" // Replace with your image path
            alt="Mutasim Mahmud"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-medium">Mutasim Mahmud</h3>
          <p className="text-muted-foreground">Finance and Marketing Lead</p>
        </div>

        {/* Team Member 2 */}
        <div className="text-center">
          <Image
            src="/member2.jpg" // Replace with your image path
            alt="Sahib Abbas Bahar Chowdhury"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-medium">Sahib Abbas Bahar Chowdhury</h3>
          <p className="text-muted-foreground">Tech Co-Lead</p>
        </div>

        {/* Team Member 3 */}
        <div className="text-center">
          <Image
            src="/member3.jpg" // Replace with your image path
            alt="Taqi Ismail Mohammad"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-medium">Taqi Ismail Mohammad</h3>
          <p className="text-muted-foreground">Tech Co-Lead</p>
        </div>
      </div>

      {/* Achievements Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Achievements</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/achievement.jpg"
            alt="Our Achievements"
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
          <div>
            <h3 className="text-xl font-semibold">Our Incubator Journey</h3>
            <p className="mt-4 text-sm text-black/60">
              Selected from over 500 applications, ParkEase joined Bangladesh&apos;s
              premier startup incubator program in 2024. Through intensive
              mentorship and strategic guidance, we&apos;ve successfully secured
              pre-seed funding and built strategic partnerships with key
              stakeholders in the urban mobility ecosystem.
            </p>
            <div className="mt-6 rounded-xl border border-black/5 bg-white shadow-sm p-6">
              <h4 className="text-lg font-semibold">Pre-Seed Funding Milestone</h4>
              <p className="mt-2 text-sm text-black/60">
                Successfully raised $150K in pre-seed funding to accelerate
                product development and market validation across Dhaka&apos;s key
                commercial districts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <div className="inline-flex items-center gap-2">
              <span className="size-6 rounded-full bg-[color:var(--pe-teal)]"></span>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="mt-4 text-sm text-black/60">
              To revolutionize urban mobility in Bangladesh by creating
              intelligent parking solutions that reduce traffic congestion,
              minimize environmental impact, and improve quality of life for
              millions of drivers in Dhaka and beyond.
            </p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white shadow-sm p-6">
            <div className="inline-flex items-center gap-2">
              <span className="size-6 rounded-full bg-[color:var(--pe-navy)]"></span>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="mt-4 text-sm text-black/60">
              A future where every parking space is optimized, every journey is
              efficient, and Bangladesh&apos;s cities become models of smart urban
              planning and sustainable transportation infrastructure for the
              developing world.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
