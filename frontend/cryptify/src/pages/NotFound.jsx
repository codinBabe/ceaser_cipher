import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-gray-800">404 | Page Not Found</h1>
      <p className="text-xl text-gray-600">
        Hmm... the page you're looking for doesn't exist
      </p>
      <Link to="/" className="text-pink-500 hover:underline">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
