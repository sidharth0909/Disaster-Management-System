import React, { useState } from "react";
import PredictCard from "./PredictCard";
import axios from "axios";

export function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
const Predict = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [response, setResponse] = useState();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const data = await convertToBase64(file);
      setPreview(data);
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    // Perform any additional actions with the image and text data here
    const res = await axios.post("http://127.0.0.1:5000/predict", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.status == 200) {
      setResponse(res.data);
    }
  };

  return (
    <div>
      <div className="flex gap-8 justify-between">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-32">
          <h2 className="text-2xl font-semibold mb-6">
            Disaster Classification
          </h2>
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <label className="block mb-4">
              Upload Image:
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mt-2"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>

          {preview && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Preview:</h3>
              <img
                src={preview}
                alt="Uploaded"
                className="max-w-full mb-4 rounded h-60"
              />
            </div>
          )}
        </div>
        <div className=" w-[35rem] mx-auto p-6 bg-white rounded-lg shadow-md mt-32">
          <h2 className="text-2xl font-semibold mb-6">Output</h2>
          {response && (
            <div>
              <div className="text-2xl font-bold mb-4">{response.class}</div>
              <div>{response.info}</div>
            </div>
          )}
        </div>
      </div>
      <PredictCard title={"Infrastructure Vulnerability"} />
    </div>
  );
};

export default Predict;
