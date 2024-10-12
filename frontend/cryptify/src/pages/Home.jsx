import homeimg1 from "../assets/home-img1.svg";
const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl mt-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-heading font-extrabold mb-8">
              We make encryption easy.
            </h1>
            <p className="text-lg max-w-md">
              Upload your PDFs, CSVs, or text files for quick encryption and
              decryption. Simple, fast, and secure.
            </p>
            <div className="flex items-center gap-5">
              <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-6">
                Get started
              </button>
              <button className="px-6 py-3 bg-pink-700 hover:bg-pink-800 text-white rounded-md mt-6">
                Explore All Tools
              </button>
            </div>
          </div>
          <div className="space-x-6">
            <img src={homeimg1} alt="" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl mt-20 text-center">
        <div>
          <h2 className="text-4xl font-heading font-extrabold mb-4">
            Most Popular Tools
          </h2>
          <p className="text-lg">
            All tools to encrypt, decrypt and edit your files for free. Try it
            out today!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black text-left mt-8">
          <div className="bg-gray-200 border border-gray-700 rounded-md p-4">
            <h3 className="text-xl font-heading font-bold mb-2">
              File encryption
            </h3>
            <p>Convert your files into unreadable formats.</p>
          </div>
          <div className="bg-gray-200 border border-gray-700 rounded-md p-4">
            <h3 className="text-xl font-heading font-bold mb-2">
              File decryption
            </h3>
            <p>Convert your files back to readable formats.</p>
          </div>
          <div className="bg-gray-200 border border-gray-700 rounded-md p-4">
            <h3 className="text-xl font-heading font-bold mb-2">
              File editing
            </h3>
            <p>Edit your files with ease.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-6">
          Explore All Tools
        </button>
      </section>
      <section className="mx-auto max-w-xl mt-20 text-center">
        <h2 className="text-4xl font-heading font-bold mb-2">
          Keep Your Simple Tasks Simple
        </h2>
        <p className="text-left">
          We make sure that your simple tasks are kept simple. With our tools,
          you can encrypt, decrypt, and edit your files with ease. Try it out
          today!
        </p>
      </section>
    </>
  );
};

export default Home;
