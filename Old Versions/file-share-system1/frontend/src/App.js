import React from "react";
import Upload from "./components/Upload";
import Download from "./components/Download";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>File Sharing System</h1>

      <Upload />
      <Download />
    </div>
  );
}

export default App;