import Header from "../(components)/header";
import Footer from "../(components)/footer";
import Image from "next/image";


const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn more about our team and the quality healthcare services we provide.
          </p>
        </section>


        {/* Team Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <div className="flex flex-wrap justify-center">
            {/* Team Member 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              <div className="relative overflow-hidden rounded-lg mx-2">
                <Image
                  src="/assests/images/doctor1.jpg"
                  alt="Team Member 1"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
                />
              </div>
              <p className="text-center mt-2">Dr. John Doe</p>
            </div>

            {/* Team Member 2 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              <div className="relative overflow-hidden rounded-lg mx-2">
                <Image
                  src="/assests/images/doctor1.jpg"
                  alt="Team Member 2"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
                />
              </div>
              <p className="text-center mt-2">Dr. Jane Smith</p>
            </div>

            {/* Team Member 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              <div className="relative overflow-hidden rounded-lg mx-2">
                <Image
                  src="/assests/images/doctor1.jpg"
                  alt="Team Member 3"
                  width={800}
                  height={400}
                  className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
                />
              </div>
              <p className="text-center mt-2">Dr. Sarah Johnson</p>
            </div>
          </div>
        </section>

        {/* Additional Content */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ante ac
            lectus fermentum interdum. Proin vitae efficitur leo.
          </p>
          <p className="text-lg mb-4">
            Vestibulum venenatis, justo in bibendum hendrerit, tortor elit ultricies
            ligula, vel dignissim lectus arcu nec odio.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;