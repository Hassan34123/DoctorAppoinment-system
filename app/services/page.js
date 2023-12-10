import Header from "../(components)/header";
import Footer from "../(components)/footer";
import Image from "next/image";


const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">
            Explore the comprehensive range of healthcare services we offer to our patients.
          </p>
        </section>

        {/* Service Section 1 */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/assests/images/doctor1.jpg"
                alt="Service Image 1"
                width={800}
                height={400}
                className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-2">Service Title 1</h2>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ante ac
                lectus fermentum interdum. Proin vitae efficitur leo.
              </p>
              <p className="text-lg mb-4">
                Vestibulum venenatis, justo in bibendum hendrerit, tortor elit ultricies
                ligula, vel dignissim lectus arcu nec odio.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Service Section 2 */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/assests/images/doctor1.jpg"
                alt="Service Image 2"
                width={800}
                height={400}
                className="object-cover w-full h-full rounded-lg transition-transform transform hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold mb-2">Service Title 2</h2>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in ante ac
                lectus fermentum interdum. Proin vitae efficitur leo.
              </p>
              <p className="text-lg mb-4">
                Vestibulum venenatis, justo in bibendum hendrerit, tortor elit ultricies
                ligula, vel dignissim lectus arcu nec odio.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Additional Service Sections */}
        {/* ... (add more service sections as needed) */}
      </main>
      <Footer />
    </div>
  );
};

export default Services;