import { useState } from "react";
import "./App.scss";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
