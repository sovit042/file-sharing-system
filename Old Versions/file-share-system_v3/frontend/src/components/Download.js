import React, { useState } from "react";

function Download() {
  const [pin, setPin] = useState("");

  const handleDownload = () => {
    if (!pin) return alert("Enter PIN");
    window.open(`http://(your ip address):5000/api/files/${pin}`);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        type="text"
        placeholder="Enter PIN"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />

      <br /><br />

      <button onClick={handleDownload} style={{ padding: "10px 20px" }}>
        Download File
      </button>
    </div>
  );
}

export default Download;