import React from "react";
import Upload from "./components/Upload";
import Download from "./components/Download";

function App() {
  return (
    <div style={styles.app}>
  <div style={styles.wrapper}>
    <h1 style={styles.heading}>File Sharing System</h1>

    <div style={styles.card}>
      <Upload />
      <Download />
    </div>
  </div>
</div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  wrapper: {
    textAlign: "center",
  },

  heading: {
    color: "#fff",
    marginBottom: "20px",
  },

  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "15px",
    width: "400px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
};

export default App;