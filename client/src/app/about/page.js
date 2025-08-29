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
            src="/member.jpg" // Replace with your image path
            alt="Mutasim Mahmud"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-medium">Mutasim Mahmud</h3>
          <p className="text-muted-foreground">Most Dedicated Team Member</p>
        </div>

        {/* Team Member 2 */}
        {/* <div className="text-center">
          <Image
            src="/member2.jpg" // Replace with your image path
            alt="Bob Smith"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-medium">Bob Smith</h3>
          <p className="text-muted-foreground">CTO & Co-Founder</p>
        </div> */}

        {/* Team Member 3 */}
        {/* <div className="text-center">
          <Image
            src="/member3.jpg" // Replace with your image path
            alt="Carol Lee"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h3 className="mt-4 text-xl font-medium">Carol Lee</h3>
          <p className="text-muted-foreground">Head of Product</p>
        </div> */}
      </div>
    </main>
  );
}
