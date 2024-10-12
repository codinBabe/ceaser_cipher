import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20">
        <h1 className="text-4xl font-extrabold text-pink-500 mb-8">
          Securely Encrypt and Decrypt Your Files
        </h1>
        <p className="text-xl mb-12 max-w-md">
          Upload your PDFs, CSVs, or text files for quick encryption and
          decryption. Simple, fast, and secure.
        </p>
        <div className="space-x-6">
          <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full">
            Upload to Encrypt
          </button>
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Upload to Decrypt
          </button>
        </div>
      </section>

      {/* File Upload Section */}
      <section id="encrypt" className="flex flex-col items-center mt-16">
        <div className="bg-gray-800 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-pink-400 mb-4">
            Encrypt Your Files
          </h2>
          <p className="mb-4">
            Drag and drop your files here or use the upload button below
          </p>
          <input
            type="file"
            className="block w-full px-4 py-2 text-lg text-gray-900 bg-gray-200 rounded-lg"
          />
          <button className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg">
            Encrypt Now
          </button>
        </div>
      </section>

      <section id="decrypt" className="flex flex-col items-center mt-16">
        <div className="bg-gray-800 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">
            Decrypt Your Files
          </h2>
          <p className="mb-4">
            Drag and drop your files here or use the upload button below
          </p>
          <input
            type="file"
            className="block w-full px-4 py-2 text-lg text-gray-900 bg-gray-200 rounded-lg"
          />
          <button className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
            Decrypt Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
