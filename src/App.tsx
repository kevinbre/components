import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Info } from "./pages/Info";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/ejemplo" element={<Home />} />
      </Route>
      <Route path="/" element={<Info />} />
    </Routes>
  );
}

export default App;
