import React from "react";
import UploadFile from "../components/UploadFile";
import Light from "../assets/bulb.svg";
import Award from "../assets/award.svg";
import Cloud from "../assets/cloud.svg";
import Lock from "../assets/lock.svg";
import ThumbsUp from "../assets/thumbsup.svg";
import Nail from "../assets/nail.svg";
import decryptFiles from "../assets/decrypting-file.svg";

const Decrypt = () => {
  return (
    <>
      <UploadFile
        heading={"Decrypt Files"}
        bgColor={"bg-purple-600"}
        bgDrag={"bg-purple-400"}
      />
      <section className="mx-auto max-w-6xl px-4 text-lg">
        <div className="flex items-start justify-between gap-8">
          <p className="max-w-2xl">
            Easily decrypt your files with Cryptify. Upload your encrypted file
            and get the decrypted file in seconds. Our decryption tool is
            simple, fast, and secure and doesn't add watermarks to your files.
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
              <span>Convert your files into readable formats</span>
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
              <span>Simply drag & drop your filesto get started.</span>
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
              <span>No watermarks added to your files</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 text-lg mt-32">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-gray-400 rounded-full w-10 h-10 text-center p-1">
              <img src={Light} alt="bulb-icon" />
            </div>
            <h3 className="font-heading font-bold text-lg">
              Simple Online Tool to Decrypt Files
            </h3>
            <p>
              Cryptify is a simple online tool to decrypt your files. Upload
              your encrypted files and get the decrypted files in seconds.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-gray-400 rounded-full w-10 h-10 text-center p-1">
              <img src={Award} alt="award-icon" />
            </div>
            <h3 className="font-heading font-bold text-lg">
              Fast and Secure Decryption
            </h3>
            <p>
              Our decryption tool is fast and secure. We don't store your files
              and don't add watermarks to your files.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-gray-400 rounded-full w-10 h-10 text-center p-1">
              <img src={Cloud} alt="cloud-icon" />
            </div>
            <h3 className="font-heading font-bold text-lg">
              Drag & Drop Your Files
            </h3>
            <p>
              Simply drag and drop your files to get started. No need to install
              any software.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-gray-400 rounded-full w-10 h-10 text-center p-1">
              <img src={Lock} alt="lock-icon" />
            </div>
            <h3 className="font-heading font-bold text-lg">
              Secure Decryption
            </h3>
            <p>
              Cryptify ensures secure decryption of your files. Your files are
              safe with us.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-gray-400 rounded-full w-10 h-10 text-center p-1">
              <img src={ThumbsUp} alt="thumbsup-icon" />
            </div>
            <h3 className="font-heading font-bold text-lg">
              No Watermarks Added
            </h3>
            <p>
              Cryptify doesn't add watermarks to your files. Your files are
              decrypted as is.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-gray-400 rounded-full w-10 h-10 text-center p-1">
              <img src={Nail} alt="nail-icon" />
            </div>
            <h3 className="font-heading font-bold text-lg">
              Easy-to-Use Interface
            </h3>
            <p>
              Cryptify has an easy-to-use interface. Simply upload your files
              and get started.
            </p>
          </div>
        </div>
      </section>
      {/* TUTORIAL */}
      <section className="mx-auto max-w-5xl px-4 mt-32">
        <div className="bg-pink-200 rounded-md p-10 text-black">
          <div className="flex items-center justify-center mt-8">
            <div className="w-full h-full object-contain">
              <img src={decryptFiles} alt="file decryption icon" />
            </div>
            <div>
              <h2 className="text-4xl font-bold font-heading mb-4">
                How to Decrypt a File Online for Free
              </h2>
              <div className="flex flex-col items-start gap-3 text-lg">
                <p>
                  1. Import or drag and drop your file to our decryption tools
                </p>
                <p>2. Choose the number of shift you want to use</p>
                <p>3. Click the “Decrypt Now” button to decrypt your file</p>
                <p>.4 Download your decrypted file in seconds</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Decrypt;
