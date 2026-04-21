import React, { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const [pin, setPin] = useState("");
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/files/upload",
        formData,
        {
          onUploadProgress: (data) => {
            setProgress(Math.round((data.loaded * 100) / data.total));
          },
        }
      );

      setPin(res.data.pin);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <input type="file" onChange={handleFileChange} />
      <br /><br />

      <button onClick={handleUpload}>Upload</button>

      {progress > 0 && <p>Upload Progress: {progress}%</p>}

      {pin && <h3>Your PIN: {pin}</h3>}
    </div>
  );
}

export default Upload;