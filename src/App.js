import { BrowserRouter, Routes, Route } from "react-router-dom";
import Integral from "./pages/Integral";
import Turunan from "./pages/Turunan"; // Ganti nama impor
import Limit from "./pages/Limit"; // Ganti nama impor
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Integral />} />
        <Route path="/integral" element={<Integral />} />
        <Route path="/Limit" element={<Limit />} />
        <Route path="/derivative" element={<Turunan />} />{" "}
        {/* Sesuaikan rute */}
      </Routes>
    </BrowserRouter>
  );
}
