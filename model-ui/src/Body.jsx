import React, { useState } from "react";
import axios from "axios";

const Header = () => (
  <header className="text-center mb-6">
    <h1 className="text-2xl font-semibold text-blue-800">
      Plant Leaf Disease Detection Incorporating IoT and XAI-Enhanced Deep
      Learning
    </h1>
    <p className="text-base text-gray-700 mt-3">
      This system is a part of a reserch project that leverages deep learning to
      predict plant diseases from leaf images. Upload an image of a leaf to
      analyze its status.
    </p>
  </header>
);

const UploadSection = ({ onFileChange, onFileUpload, loading }) => (
  <section className="mb-6">
    <h2 className="text-lg font-medium text-blue-800 mb-3">
      Upload a Leaf Image
    </h2>
    <input
      type="file"
      onChange={onFileChange}
      className="mb-4 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-blue-100"
    />
    <button
      onClick={onFileUpload}
      disabled={loading}
      className={`w-full p-2 text-sm text-white rounded ${
        loading
          ? "bg-gray-500 cursor-not-allowed"
          : "bg-blue-700 hover:bg-blue-600 transition-colors"
      }`}
    >
      {loading ? "Uploading..." : "Predict"}
    </button>
  </section>
);

const PredictionResult = ({ prediction }) =>
  prediction && (
    <section className="mt-6">
      <h2 className="text-lg font-medium text-blue-800">Prediction Result:</h2>
      <p className="text-base mt-2">
        <strong>Prediction:</strong> {prediction}
      </p>
      <p className="text-gray-600 mt-2">
        This prediction is generated using a trained deep learning model on
        plant leaf images. It provides a reliable diagnosis based on the visible
        symptoms.
      </p>
    </section>
  );

const ImagePreview = ({ imagePreview }) =>
  imagePreview && (
    <section className="mt-6">
      <h3 className="text-lg font-medium text-blue-800 text-center mb-4">
        Uploaded Image:
      </h3>
      <img
        src={imagePreview}
        alt="Uploaded Preview"
        className="w-full h-auto rounded-md border border-gray-300 shadow-md mx-auto"
      />
    </section>
  );

const Footer = () => (
  <footer className="mt-10 text-center">
    <h2 className="text-lg font-medium text-blue-800">How It Works</h2>
    <p className="text-sm text-gray-600 mt-2">
      The uploaded image is analyzed using a convolutional neural network (CNN),
      extracting key features to provide a prediction.
    </p>
  </footer>
);

function Body() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const onFileUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setPrediction(data.prediction);
    } catch (error) {
      console.error("There was an error!", error);
      alert("An error occurred while making the prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Header />
          <UploadSection
            onFileChange={onFileChange}
            onFileUpload={onFileUpload}
            loading={loading}
          />
          <PredictionResult prediction={prediction} />
          <Footer />
        </div>
        <div className="flex-0.4">
          <ImagePreview imagePreview={imagePreview} />
        </div>
      </div>
    </div>
  );
}

export default Body;
