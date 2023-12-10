import Header from "./(components)/header";
import Footer from "./(components)/footer";
import { headers } from '@/next.config';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      <Header />
      <main className="flex-grow p-8 flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Right Side (Text Content) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <section className="mb-4">
            <h1 className="text-4xl font-bold mb-2">Find Your Appointment</h1>
            <p className="text-lg text-gray-600">
              Schedule your appointments with ease. We provide quality healthcare services.
            </p>
          </section>

          {/* Additional Text Content */}
          <section className="mb-4">
            <p className="text-lg text-gray-800">
              Explore our services and book your appointment today. Our experienced team of
              doctors is here to assist you.
            </p>
          </section>

          {/* Buttons */}
          <div className="flex space-x-4">
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            </button> */}
            <Link href="/booking" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Book Appointment
            </Link>
            <Link href="/cancel" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300">
              Cancel Appointment
            </Link>
          </div>
        </div>

        {/* Left Side (Image and Description) */}
        <div className="flex-shrink-0 w-full md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <div className="flex items-center flex-col">
            <Image
              src="/assests/images/doctor.avif" // Replace with your image URL
              alt="Doctor Image"
              width={200}
              height={200}
              className="rounded-full shadow-lg mb-4"
            />
            <div>
              <h3 className="text-xl font-bold mb-2">Dr. John Doe</h3>
              <p className="text-gray-600">
                Experienced doctor providing top-notch healthcare services.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>



  )
}
