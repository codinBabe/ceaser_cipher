import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="shadow-md sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <Link
          to={"/"}
          className="text-2xl font-bold font-heading flex items-center justify-center"
        >
          <img src={Logo} width={60} height={60} alt="logo" />
          <p className="m-[-25px]">Cryptify</p>
        </Link>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/encrypt" className="hover:text-pink-400">
              Edit
            </Link>
          </li>
          <li>
            <Link to="/encrypt" className="hover:text-pink-400">
              Encrypt
            </Link>
          </li>
          <li>
            <Link to="/decrypt" className="hover:text-pink-400">
              Decrypt
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
