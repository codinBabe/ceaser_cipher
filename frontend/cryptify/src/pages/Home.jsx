import { Link } from "react-router-dom";
import homeimg1 from "../assets/home-img1.svg";
import fileEncrypt from "../assets/file-encrypt.svg";
import fileDecrypt from "../assets/file-decrypt.svg";
import fileEdit from "../assets/edit-files.svg";
import editAllFiles from "../assets/edit_all_files.svg";
import folderEncryption from "../assets/folder-encryption.svg";
import folderDecryption from "../assets/easyeditor.svg";

const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 mt-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              We make encryption easy.
            </h1>
            <p className="text-lg max-w-md mb-4">
              Upload your PDFs, CSVs, or text files for quick encryption and
              decryption. Simple, fast, and secure.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#tools"
                className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md"
              >
                Get started
              </a>
              <a
                href="#tools"
                className="px-6 py-3 bg-pink-700 hover:bg-pink-800 text-white rounded-md"
              >
                Explore All Tools
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={homeimg1}
              alt="Illustration showing encryption"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section id="tools" className="mx-auto max-w-5xl px-4 mt-20 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-4">
            Most Popular Tools
          </h2>
          <p className="text-lg mb-8">
            All tools to encrypt, decrypt and edit your files for free. Try it
            out today!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
          <Link
            to="/encrypt"
            className="flex items-start gap-4 bg-gray-200 border border-gray-700 rounded-md p-4"
          >
            <img
              src={fileEncrypt}
              alt="File encryption icon"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">
                File encryption
              </h3>
              <p>Convert your files into unreadable formats.</p>
            </div>
          </Link>
          <Link
            to="/decrypt"
            className="flex items-start gap-4 bg-gray-200 border border-gray-700 rounded-md p-4"
          >
            <img
              src={fileDecrypt}
              alt="File decryption icon"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">
                File decryption
              </h3>
              <p>Convert your files back to readable formats.</p>
            </div>
          </Link>
          <Link
            to="/edit"
            className="flex items-start gap-4 bg-gray-200 border border-gray-700 rounded-md p-4"
          >
            <img
              src={fileEdit}
              alt="File editing icon"
              width={40}
              height={40}
            />
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">
                File editing
              </h3>
              <p>Edit your files with ease.</p>
            </div>
          </Link>
        </div>
        <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-10">
          Explore All Tools
        </button>
      </section>
      <section className="mx-auto max-w-xl px-4 mt-32 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Keep Your Simple Tasks Simple
        </h2>
        <p className="text-lg text-left">
          We make sure that your simple tasks are kept simple. With our tools,
          you can encrypt, decrypt, and edit your files with ease. Try it out
          today!
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Work Directly on Your Files
            </h2>
            <p className="text-lg max-w-xl">
              With our tools, you can work directly on your files. No need to
              download and upload them again. Try it out today! It’s free. It’s
              secure. It’s easy.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={editAllFiles}
              alt="Editing files illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
          <div className="w-full md:w-[40%]">
            <img
              src={folderEncryption}
              alt="Folder encryption icon"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Easy File Encryption
            </h2>
            <p className="text-lg max-w-xl">
              With our tools, you can encrypt your files with ease. Simply
              upload your files and encrypt them with a click of a button. Try
              it out today!
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
              Perfect File Decryption
            </h2>
            <p className="text-lg max-w-xl">
              With our tools, you can decrypt your files to perfection. Edit
              your files with ease and make sure that they are perfect for your
              needs. Try it out today!
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={folderDecryption}
              alt="Folder decryption illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
