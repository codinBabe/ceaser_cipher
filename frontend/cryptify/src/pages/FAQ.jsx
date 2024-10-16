import React from "react";

const FAQ = () => {
  return (
    <section className="mx-auto max-w-3xl mt-20 px-4 sm:px-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
          Hi! Welcome to the Cryptify helpdesk!
        </h2>
        <p className="text-base sm:text-xl">
          Here you find all solutions to the most common issues. And of course,
          you can also submit a support request or ask for a new feature!
        </p>
      </div>
      <div className="mt-8 space-y-4">
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4">
          <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
            What is Cryptify?
          </h3>
          <p className="text-sm sm:text-base">
            Cryptify is a free online tool that allows you to encrypt, decrypt,
            and edit your files with ease.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4">
          <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
            How do I use Cryptify?
          </h3>
          <p className="text-sm sm:text-base">
            Simply upload your file, choose the tool you want to use, and click
            the "Encrypt", "Decrypt", or "Edit" button.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4">
          <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
            Is Cryptify secure?
          </h3>
          <p className="text-sm sm:text-base">
            Yes, Cryptify uses end-to-end encryption to ensure that your files
            are secure.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4">
          <h3 className="text-lg sm:text-xl font-heading font-bold mb-2">
            How do I get started?
          </h3>
          <p className="text-sm sm:text-base">
            Click the "Get started" button on the homepage to start using
            Cryptify.
          </p>
        </div>
      </div>
      <div className="text-center mt-20">
        <p className="font-heading font-bold text-sm sm:text-base">
          Couldn’t find a solution to your problem or just want to suggest a new
          feature?
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <button className="w-full sm:w-auto px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md">
            Write a Report
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-pink-700 hover:bg-pink-800 text-white rounded-md">
            Suggest a Feature
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
