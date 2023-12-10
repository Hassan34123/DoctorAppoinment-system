import Header from "../(components)/header";
import Footer from "../(components)/footer";

const CancelAppointment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Cancel Appointment</h1>
          <p className="text-lg">
            If you need to cancel your appointment, please provide the necessary details
            below. We'll process your cancellation request promptly.
          </p>
        </section>

        {/* Cancellation Form */}
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="123-456-7890"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="appointmentId" className="block text-gray-700 text-sm font-bold mb-2">
              Appointment ID
            </label>
            <input
              type="text"
              id="appointmentId"
              name="appointmentId"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your appointment ID"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Additional Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Any specific details or reasons for cancellation?"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Cancel Appointment
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default CancelAppointment;