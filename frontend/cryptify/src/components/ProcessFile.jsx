import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import typeoffilecsv from "../assets/type-of-file-csv.svg";
import typeoffilepdf from "../assets/type-of-file-pdf.svg";
import typeoffiletxt from "../assets/type-of-file-txt.svg";
import deleteicon from "../assets/delete-icon.svg";
import { uploadFile } from "../utils/api";

const ProcessFile = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(true);
  const [uploadError, setUploadError] = useState(null);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);
  const [shift, setShift] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const file = location.state?.file;
  const processType = location.hash === "#r=decrypt" ? "decrypt" : "encrypt";

  const iconSrc = () => {
    if (file.name.endsWith(".csv")) return typeoffilecsv;
    if (file.name.endsWith(".pdf")) return typeoffilepdf;
    if (file.name.endsWith(".txt")) return typeoffiletxt;
    return "";
  };

  useEffect(() => {
    if (!file) return;

    const upload = async () => {
      try {
        await uploadFile(file, (ProgressEvent) => {
          const percentCompleted = Math.round(
            (ProgressEvent.loaded * 100) / ProgressEvent.total
          );
          console.log("Upload Progress:", percentCompleted);
          setUploadProgress(percentCompleted);
        });
        setUploading(false);
        setIsUploadSuccessful(true);
      } catch (error) {
        setUploadError("Failed to upload file");
        setUploading(false);
      }
    };
    upload();
  }, [file]);

  const handleRetry = () => {
    navigate(processType === "encrypt" ? "/encrypt" : "/decrypt");
  };

  const handleCancel = () => {
    setIsUploadSuccessful(false);
  };

  const renderFileIcon = () => (
    <img src={iconSrc()} alt="Type of file icon" className="w-60 h-60" />
  );

  const renderFileInfo = () => (
    <p className="text-center text-lg font-medium text-gray-600">
      {file ? `${file.name}` : "Uploading File..."}
    </p>
  );

  const renderErrorSection = () => (
    <div className="col-span-2 bg-blue-50 border border-gray-300 rounded-md p-6 flex flex-col items-center">
      {renderFileIcon()}
      {renderFileInfo()}
      <p className="text-red-500">{uploadError}</p>
      <button onClick={handleRetry} className="mt-2 text-blue-500">
        Try Again
      </button>
    </div>
  );

  const renderUploadingSection = () => (
    <div className="col-span-2 bg-blue-50 border border-gray-300 rounded-md p-6 flex flex-col items-center">
      <div className="mt-4">
        <p>Uploading: {uploadProgress}%</p>
        <progress value={uploadProgress} max="100" className="w-full" />
      </div>
      {renderFileIcon()}
      {renderFileInfo()}
      <button
        onClick={handleCancel}
        className="text-blue-500 text-base my-4 flex items-center underline"
      >
        <img src={deleteicon} alt="delete icon" className="mr-1 w-5" />
        Cancel
      </button>
    </div>
  );

  const renderProcessingSection = () => (
    <div className="bg-white flex flex-col items-center justify-center text-black rounded-md shadow-md p-6">
      <h2 className="text-3xl font-heading font-extrabold mb-4 text-gray-800 capitalize">
        {processType} File
      </h2>
      <input
        type="number"
        placeholder="Shift"
        value={shift}
        className="border border-gray-300 rounded-md p-2 mt-6 text-black w-full max-w-xs"
        onChange={(e) => setShift(e.target.value)}
      />
      <button
        onClick={() =>
          navigate(
            `/${processType}#r=result&t=${task_id}&i=${processType}&shift=${shift}`
          )
        }
        className="px-6 py-3 bg-purple-700 hover:bg-purple-800 text-white rounded-md mt-6 capitalize"
      >
        {processType} Now
      </button>
    </div>
  );

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl p-8 bg-white shadow-lg rounded-lg">
        {uploadError && renderErrorSection()}
        {uploading && isUploadSuccessful && renderUploadingSection()}
        {isUploadSuccessful && renderProcessingSection()}
      </div>
    </section>
  );
};

export default ProcessFile;
