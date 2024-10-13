import React from "react";

const ProcessFile = () => {
  const [uploadedFileLink, setUploadedFileLink] = React.useState(null);
  const [shift, setShift] = React.useState(0);

  React.useEffect(() => {
    //get file uploaded by user
  }, [uploadedFileLink]);

  const handleFileProcess = (e) => {
    e.preventDefault;
    // handle file processing here
  };

  return (
    <section>
      <div className="grid grid-cols-3">
        <Link
          to={"/"}
          className="text-2xl font-bold font-heading flex items-center justify-center"
        >
          <img src={Logo} width={60} height={60} alt="logo" />
          <p className="m-[-23px]">Cryptify</p>
        </Link>
        {uploadedFileLink && (
          <div className="bg-gray-200 border border-gray-700 rounded-md p-4">
            {/* open the file in whatever format that ends it */}
          </div>
        )}
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleFileProcess}
        >
          <h2 className="text-4xl font-heading font-extrabold mb-4">
            {/* display based on user slected process(encrypt/decrypt) */}
          </h2>

          <div className="flex items-center gap-5">
            <input
              type="file"
              className="border border-gray-700 rounded-md p-2 mt-6"
              value={uploadedFileLink}
            />
            <input
              type="number"
              placeholder="Shift"
              value={shift}
              className="border border-gray-700 rounded-md p-2 mt-6"
              onChange={(e) => setShift(e.target.value)}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-6"
            >
              {/* display based on user slected process(encrypt/decrypt) */}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProcessFile;
