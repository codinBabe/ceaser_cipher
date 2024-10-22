import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import typeoffile from "../assets/type-of-file.svg";
import deleteicon from "../assets/delete-icon.svg";

const ProcessFile = () => {
  const [uploadedFileLink, setUploadedFileLink] = React.useState(true);
  const [shift, setShift] = React.useState(0);

  React.useEffect(() => {
    //get file uploaded by user
  }, [uploadedFileLink]);

  const handleFileProcess = (e) => {
    e.preventDefault;
    // handle file processing here
  };

  return (
    <section className="min-h-screen">
      <div className="grid grid-cols-4">
        <Link
          to={"/"}
          className="text-2xl font-bold font-heading flex items-center"
        >
          <img src={Logo} width={60} height={60} alt="logo" />
          <p className="m-[-23px]">Cryptify</p>
        </Link>
        <div className="bg-gray-200 border border-gray-700 rounded-md p-4 col-span-2 flex flex-col items-center justify-center">
          {uploadedFileLink && (
            <div>
              {/* open the file in whatever format that ends it */}
              <img
                src={typeoffile}
                alt="type of file"
                width={100}
                height={100}
              />
            </div>
          )}
          <button className="text-blue-500">
            <img src={deleteicon} alt="delete icon" />
            Cancel
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-heading font-extrabold mb-4">
            {/* display based on user selected process(encrypt/decrypt) */}
            Encrypt File
          </h2>

          <input
            type="number"
            placeholder="Shift"
            value={shift}
            className="border border-gray-700 rounded-md p-2 mt-6 text-black"
            onChange={(e) => setShift(e.target.value)}
          />
          <button className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-6">
            {/* display based on user slected process(encrypt/decrypt) */}
            Encrypt Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessFile;
