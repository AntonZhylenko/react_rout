// About.jsx
import React, { useState } from "react";
import Button from "@mui/material/Button";

export default function About() {
  const [showContent, setShowContent] = useState(false);

  const handleButton = () => {
    setShowContent(!showContent);
  };

  return (
    <>
      <h2>About Page</h2>
      <Button onClick={handleButton} variant="contained">
        {showContent ? "Hide information" : "More information"}
      </Button>
      {showContent && (
        <div style={{ marginTop: "20px" }}>
          <p>This is additional information that toggles on button click.</p>
        </div>
      )}
    </>
  );
}
