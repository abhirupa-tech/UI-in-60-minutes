import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
// import ProjectPage from "./ProjectPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/project/:id" element={<ProjectPage />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

