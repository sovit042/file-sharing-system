import React, { useState } from "react";

function Download() {
  const [pin, setPin] = useState("");

  const handleDownload = () => {
    window.open(`http://localhost:5000/api/files/${pin}`);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <input
        type="text"
        placeholder="Enter PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      />
      <br /><br />

      <button onClick={handleDownload}>Download File</button>
    </div>
  );
}

export default Download;