import UploadFile from "../components/UploadFile";
import pdfImg from "../assets/pdf-img.svg";
import fileEncryption from "../assets/howencryptionwork.svg";
import easyDownload from "../assets/easydownload.svg";
import allFiles from "../assets/howtofile.svg";
import { Link } from "react-router-dom";

const Encrypt = () => {
  return (
    <>
      <UploadFile
        heading={"Encrypt Files"}
        bgColor={"bg-pink-600"}
        bgDrag={"bg-pink-400"}
      />
      <section className="mx-auto max-w-6xl px-4 text-lg">
        <div className="flex items-start justify-between gap-8">
          <p className="max-w-2xl">
            Securely encrypt your files with Cryptify. Our file encryption tool
            encrypt files online easily for free. Our tools are here to help you
            get things done—better, faster, smarter.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
                className="bg-green-500 p-1 rounded-full"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>Securely encrypt your files</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
                className="bg-green-500 p-1 rounded-full"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>Quickly decrypt your files</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
                className="bg-green-500 p-1 rounded-full"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
              <span>Simple, fast, and secure</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="my-20">
        <p className="text-center text-lg bg-gray-900 p-2">
          Were you looking for{" "}
          <Link to="/decrypt" className="text-purple-400">
            Decrypt file
          </Link>{" "}
          or{" "}
          <Link to="/edit" className="text-purple-400">
            Edit file
          </Link>{" "}
          instead?
        </p>
      </section>
      <section className="mx-auto max-w-7xl px-4 text-center mt-32">
        <h2 className="text-5xl font-bold font-heading text-white mb-4">
          Best Online File Encryptor
        </h2>
        <p className="mb-4 text-lg">
          Our encrypt file is an online tool made for encrypting large PDFs,
          CSVs or text files online for
          <br /> free. Whether you need to encrypt documents for easier
          emailing, sharing,
          <br /> or storage, you’ll be ready to go within seconds.
        </p>
      </section>
      <section className="mx-auto max-w-7xl my-24">
        <div className="flex items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold font-heading text-white mb-4">
              Flexible File Encryption
            </h2>
            <p className="text-lg">
              Quick, professional results you can trust—every time. Choose from
              a variety of encryption shift to suit your needs. Our file
              encryptor is designed to make complex encryption simple.
            </p>
          </div>
          <div className="w-full h-full object-contain">
            <img src={pdfImg} alt="" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="flex flex-row-reverse items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold font-heading text-white mb-4">
              How Does File Encryption Work
            </h2>
            <p className="mb-4 text-lg">
              File encryption is a process that encodes your data in a way that
              only authorized users can access it. Our file encryptor uses a
              unique key to scramble your data, making it unreadable to anyone
              without the key.
            </p>
          </div>
          <div className="w-full h-full object-contain">
            <img src={fileEncryption} alt="" />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 mt-32">
        <div className="flex items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold font-heading text-white mb-4">
              Easy Sharing Once You’re Done
            </h2>
            <p className="text-lg">
              Share your encrypted files with anyone, anywhere. Our file
              encryptor is designed to make sharing files simple and secure.
            </p>
          </div>
          <div className="w-full h-full object-contain">
            <img src={easyDownload} alt="" />
          </div>
        </div>
      </section>
      {/* TUTORIAL */}
      <section className="mx-auto max-w-5xl px-4 mt-32">
        <div className="bg-purple-200 rounded-md p-10 text-black">
          <div className="flex items-start justify-between mt-8">
            <div className="w-full h-full object-contain">
              <img src={allFiles} alt="" />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4">
                How to Encrypt a File Online for Free
              </h2>
              <div className="flex flex-col items-start gap-3 text-lg">
                <p>
                  1. Import or drag and drop your file to our encryption tools
                </p>
                <p>2. Choose the number of shift you want to use</p>
                <p>3. Click the “Encrypt Now” button to encrypt your file</p>
                <p>4. Download your encrypted file in seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQS */}
      <section>
        <div className="mx-auto max-w-2xl px-4 mt-32">
          <h2 className="text-3xl font-bold font-heading text-white mb-4 text-center">
            FAQs About Our Tools
          </h2>
          <div className="flex flex-col items-start justify-start gap-4 mt-8">
            <div className="border-b border-gray-600">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                How do I encrypt a file?
              </h3>
              <p className="text-lg mb-4">
                To encrypt a file, simply upload it to our file encryptor and
                click the encrypt button. You’ll be able to download your
                encrypted file in seconds.
              </p>
            </div>
            <div className="border-b border-gray-600">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                How secure is file encryption?
              </h3>
              <p className="text-lg mb-4">
                Our file encryptor uses the latest encryption technology to
                ensure your files are secure. We take your privacy seriously and
                never store your files on our servers.
              </p>
            </div>
            <div className="border-b border-gray-600">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Can I decrypt my files later?
              </h3>
              <p className="text-lg mb-4">
                Yes, you can decrypt your files at any time using our file
                decryptor. Simply upload your encrypted file and click the
                decrypt button.
              </p>
            </div>
            <div className="border-b border-gray-600">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Is file encryption free?
              </h3>
              <p className="text-lg mb-4">
                Yes, our file encryptor is completely free to use. There are no
                hidden fees or charges—just fast, secure encryption for your
                files.
              </p>
            </div>
            <div className="border-b border-gray-600">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Can I encrypt large files?
              </h3>
              <p className="text-lg mb-4">
                Our file encryptor can handle files of any size. Whether you
                need to encrypt a small text file or a large PDF, we’ve got you
                covered.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <Link
            to="/faq"
            className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200"
          >
            Read More FAQs
          </Link>
        </div>
      </section>
    </>
  );
};

export default Encrypt;
