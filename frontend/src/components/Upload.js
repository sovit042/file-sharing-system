import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

function Upload() {
  const [file, setFile] = useState(null);
  const [pin, setPin] = useState("");
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600);
  
  useEffect(() => {
    if (!pin) return;

    const interval = setInterval(() => {
        setTimeLeft((prev) => prev -1);
    }, 1000);

    return () => clearInterval(interval);
  }, [pin]);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleUpload = async () => {
    if (!file) return alert("Select or drop a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
  setProgress(0);

  const res = await axios.post(
    "http://(your ip address):5000/api/files/upload",
    formData,
    {
      onUploadProgress: (data) => {
        setProgress(Math.round((data.loaded * 100) / data.total));
      },
    }
  );

  if (res.data.pin) {
    setPin(res.data.pin);
  } else {
    alert("Upload failed");
  }
} catch (err) {
  console.error(err);
  alert("Upload error: backend not reachable");
}};

  return (
    <div style={styles.container}>
      <div {...getRootProps()} style={styles.dropzone}>
        <input {...getInputProps()} />
        {file ? (
          <p>{file.name}</p>
        ) : (
          <p>Drag & drop file here or click to select</p>
        )}
      </div>

      <button style={styles.button} onClick={handleUpload}>
        Upload
      </button>

      {progress > 0 && (
  <>
    <div style={styles.progressBar}>
      <div style={{ ...styles.progressFill, width: `${progress}%` }} />
    </div>
    <p>{progress}% Uploaded</p>
  </>
)}

      {pin && (
  <>
    <h3>Your PIN: {pin}</h3>
    <button onClick={() => navigator.clipboard.writeText(pin)}>
      Copy PIN
    </button>
    <p>
      Expires in: {Math.floor(timeLeft / 60)}m {timeLeft % 60}s
    </p>
  </>
)}
    </div>
  );
}

const styles = {
  container: {
    marginTop: "30px",
  },
  dropzone: {
    border: "2px dashed #888",
    padding: "30px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  progressBar: {
    width: "100%",
    height: "10px",
    background: "#eee",
    borderRadius: "5px",
    overflow: "hidden",
    marginTop: "15px",
  },

progressFill: {
  height: "100%",
  background: "linear-gradient(to right, #4facfe, #00f2fe)",
},
};

export default Upload;