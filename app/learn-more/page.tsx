import Image from "next/image";
import Link from "next/link";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
          Learn More About Kabaddi
        </h1>

        {/* About Kabaddi Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What is Kabaddi?</h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200 mb-4">
                Kabaddi is an intense team sport that originated in ancient India. 
                It blends elements of wrestling, rugby, and tag, making it a unique and thrilling game.
              </p>
              <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                The game requires exceptional strength, agility, and teamwork. Whether you're an athlete 
                or a fan, Kabaddi guarantees high-energy action and excitement.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://source.unsplash.com/500x350/?kabaddi,sports"
                alt="Kabaddi match in action"
                width={500}
                height={350}
                className="rounded-xl shadow-lg border-4 border-white w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Our Sponsors</h2>
          <p className="text-base sm:text-lg text-gray-300 text-center mb-8">
            We appreciate our sponsors for supporting Kabaddi and helping the sport grow!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3, 4].map((sponsor) => (
              <div
                key={sponsor}
                className="bg-white bg-opacity-20 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-lg flex items-center justify-center w-40 h-24 sm:w-52 sm:h-28 hover:scale-105 transition duration-300"
              >
                <Image
                  src={`https://source.unsplash.com/200x100/?sports,logo`}
                  alt={`Sponsor ${sponsor}`}
                  width={200}
                  height={100}
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Ready to Join the Action?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Whether you're looking to play, sponsor, or simply enjoy the game, be a part of the Kabaddi community!
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/event-registration"
              className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition-all shadow-md w-full sm:w-auto"
            >
              Register for Events
            </Link>
            <Link
              href="/contact"
              className="bg-gray-200 text-blue-900 font-semibold px-6 py-3 rounded-lg text-lg hover:bg-gray-300 transition-all shadow-md w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
