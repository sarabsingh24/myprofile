import React from "react";

import "./style.css";

export default function index({ children }) {
  return (
    <main className="main">
      <div className="main-container">{children}</div>
    </main>
  );
}
