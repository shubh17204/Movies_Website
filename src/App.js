import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { MovieDetail } from "./components/MovieDetail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="moviee/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
