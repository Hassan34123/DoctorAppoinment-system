import Link from "next/link";
const Header = () => {
    return (
      <header className="bg-blue-500 p-4">
        <nav className="flex justify-between items-center">
          <div>
            <Link href="/"className="text-white text-2xl font-bold hover:underline transition duration-300">
              Doctor App
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">
              About Us
            </Link>
            <Link href="/services"className="text-white hover:text-gray-300 transition duration-300">
              Services
            </Link>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Header;