import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 to-purple-700 text-white">
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Experience the Thrill of Kabaddi
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Strength, strategy, and agility—be a part of this electrifying sport!
        </p>
        <Link
          href="/event-registration"
          className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition-all"
        >
          Register for Events
        </Link>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Why Join Kabaddi?</h2>
            <p className="text-lg text-gray-200 mb-6">
              Kabaddi is not just a game—it's a test of endurance, strength, and teamwork. Whether you're a seasoned
              player or a newcomer, experience the adrenaline rush like never before!
            </p>
            <Link
              href="/learn-more"
              className="inline-block bg-white text-blue-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Learn More
            </Link>
          </div>
          <div className="w-full">
            <Image
              src="kabaddi home.jpeg"
              alt="Kabaddi players in action"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
