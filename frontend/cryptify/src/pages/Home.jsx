import { Link } from "react-router-dom";
import homeimg1 from "../assets/home-img1.svg";
import fileEncrypt from "../assets/file-encrypt.svg";
import fileDecrypt from "../assets/file-decrypt.svg";
import fileEdit from "../assets/edit-files.svg";
import editAllFiles from "../assets/edit_all_files.svg";
import folderEncryption from "../assets/folder-encryption.svg";
import folderDecryption from "../assets/easyeditor.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
              <button
                onClick={() => navigate("#tools")}
                className="px-6 py-3 bg-pink-700 hover:bg-pink-800 text-white rounded-md mt-6"
              >
                Explore All Tools
              </button>
            </div>
          </div>
          <div className="space-x-6">
            <img src={homeimg1} alt="" />
          </div>
        </div>
      </section>
      <section id="#tools" className="mx-auto max-w-5xl mt-20 text-center">
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
          <Link
            to="/encrypt"
            className="flex items-start gap-4 bg-gray-200 border border-gray-700 rounded-md p-4"
          >
            <img src={fileEncrypt} alt="" width={40} height={40} />
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">
                File encryption
              </h3>
              <p>Convert your files into unreadable formats.</p>
            </div>
          </Link>
          <Link
            to={"/decrypt"}
            className="flex items-start gap-4 bg-gray-200 border border-gray-700 rounded-md p-4"
          >
            <img src={fileDecrypt} alt="" width={40} height={40} />
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">
                File decryption
              </h3>
              <p>Convert your files back to readable formats.</p>
            </div>
          </Link>
          <Link
            to={"/edit"}
            className="flex items-start gap-4 bg-gray-200 border border-gray-700 rounded-md p-4"
          >
            <img src={fileEdit} alt="" width={40} height={40} />
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
      <section className="mx-auto max-w-xl mt-32 text-center">
        <h2 className="text-4xl font-heading font-bold mb-2">
          Keep Your Simple Tasks Simple
        </h2>
        <p className="text-left">
          We make sure that your simple tasks are kept simple. With our tools,
          you can encrypt, decrypt, and edit your files with ease. Try it out
          today!
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold font-heading text-white mb-4">
              Work Directly on Your Files
            </h2>
            <p className="text-lg max-w-xl">
              With our tools, you can work directly on your files. No need to
              download and upload them again. Try it out today! It’s free. It’s
              secure. It’s easy.
            </p>
          </div>
          <div>
            <img src={editAllFiles} alt="placeholder for editing all files" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-20">
          <div className="w-2/4 object-contain">
            <img
              src={folderEncryption}
              alt="folder encryption icon"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold font-heading text-white mb-4">
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
            <h2 className="text-4xl font-bold font-heading text-white mb-4">
              Perfect File Decryption
            </h2>
            <p className="text-lg max-w-xl">
              With our tools, you can decrypt your files to perfection. Edit
              your files with ease and make sure that they are perfect for your
              needs. Try it out today!
            </p>
          </div>

          <div className="w-2/4 object-contain">
            <img src={folderDecryption} alt="" width={700} height={700} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
