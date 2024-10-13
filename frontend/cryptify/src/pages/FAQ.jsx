import React from "react";

const FAQ = () => {
  return (
    <section className="mx-auto max-w-3xl mt-20 ">
      <div className="text-center">
        <h2 className="text-4xl fontheading font-bold mb-2">
          Hi! Welcome to the Cryptify helpdesk!
        </h2>
        <p className="text-xl">
          Here you find all solutions to the most common issues. And of course,
          you can also submit a support request or ask for a new feature!
        </p>
      </div>
      <div className="mt-8">
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4">
          <h3 className="text-xl font-heading font-bold mb-2">
            What is Cryptify?
          </h3>
          <p>
            Cryptify is a free online tool that allows you to encrypt, decrypt,
            and edit your files with ease.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4 mt-4">
          <h3 className="text-xl font-heading font-bold mb-2">
            How do I use Cryptify?
          </h3>
          <p>
            Simply upload your file, choose the tool you want to use, and click
            the "Encrypt", "Decrypt", or "Edit" button.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4 mt-4">
          <h3 className="text-xl font-heading font-bold mb-2">
            Is Cryptify secure?
          </h3>
          <p>
            Yes, Cryptify uses end-to-end encryption to ensure that your files
            are secure.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-300 rounded-md p-4 mt-4">
          <h3 className="text-xl font-heading font-bold mb-2">
            How do I get started?
          </h3>
          <p>
            Click the "Get started" button on the homepage to start using
            Cryptify.
          </p>
        </div>
        {/* more faq */}
      </div>
      <div className="text-center mt-20">
        <p className="font-heading font-bold">
          Couldn’t find a solution to your problem or just want to suggest a new
          feature?
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-6">
            Write a Report
          </button>
          <button className="px-6 py-3 bg-pink-700 hover:bg-pink-800 text-white rounded-md mt-6">
            Suggest a feature
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
