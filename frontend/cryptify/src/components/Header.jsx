import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Header = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false);
    setIsMobileMenuOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeModal = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-md sticky top-0 z-50 w-full bg-gray-900">
      <nav className="flex items-center justify-between px-4 py-2">
        <Link
          to="/"
          className="text-2xl font-bold font-heading flex items-center justify-center"
        >
          <img src={Logo} width={60} height={60} alt="logo" />
          <p className="m-[-23px]">Cryptify</p>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 text-lg bg-gray-900 md:bg-transparent absolute md:static top-14 left-0 w-full md:w-auto transition-all duration-300`}
        >
          <li className="border-b border-gray-700 md:border-none">
            <Link
              to="#"
              onClick={() => alert("Feature coming soon! 🚀")}
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Edit
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              to="/encrypt"
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Encrypt
            </Link>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <Link
              to="/decrypt"
              className="block md:inline-block py-2 px-4 hover:text-pink-400"
            >
              Decrypt
            </Link>
          </li>
          <li>
            <button
              onClick={openLoginModal}
              className="block md:inline-block w-full text-center py-2 px-4 bg-pink-700 text-white rounded-md md:hover:bg-pink-900"
            >
              Log in
            </button>
          </li>
        </ul>
      </nav>

      {(isSignUpModalOpen || isLoginModalOpen) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className={`transform transition-transform duration-500 ease-in-out bg-gray-900 rounded-lg shadow-lg w-full max-w-5xl p-2 relative mx-auto mt-20 ${
              isLoginModalOpen || isSignUpModalOpen
                ? "md:translate-x-[24%]"
                : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="text-2xl font-bold font-heading flex items-center justify-center"
              >
                <img src={Logo} width={60} height={60} alt="logo" />
                <p className="m-[-23px]">Cryptify</p>
              </Link>
              <button
                onClick={closeModal}
                className="absolute top-4 right-5 text-xl text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            {isLoginModalOpen && <Login onClick={openSignUpModal} />}
            {isSignUpModalOpen && <SignUp onClick={openLoginModal} />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
