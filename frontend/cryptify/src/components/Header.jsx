import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Header = () => {
  const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignUpModalOpen(false);
  };

  const closeModal = () => {
    setIsSignUpModalOpen(false);
    setIsLoginModalOpen(false);
  };

  return (
    <header className="shadow-md sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <Link
          to={"/"}
          className="text-2xl font-bold font-heading flex items-center justify-center"
        >
          <img src={Logo} width={60} height={60} alt="logo" />
          <p className="m-[-23px]">Cryptify</p>
        </Link>
        <ul className="flex items-center space-x-10 text-lg">
          <li>
            <Link
              onClick={() => alert("Feature coming soon! 🚀")}
              className="hover:text-pink-400"
            >
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
            <button
              onClick={openLoginModal}
              className="bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-900"
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
            className={`transform transition-transform duration-500 ease-in-out bg-gray-900 rounded-lg shadow-lg w-full max-w-5xl p-2 relative ${
              isLoginModalOpen || isSignUpModalOpen
                ? "translate-x-[48%]"
                : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <Link
                to={"/"}
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
