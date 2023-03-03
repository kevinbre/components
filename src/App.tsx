import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Components } from "./pages/Components";

import { Home } from "./pages/Home";
import { Info } from "./pages/Info";
import { ShowHtmlCode } from "./pages/ShowHtmlCode";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/ejemplo" element={<Home />} />
      </Route>
      <Route path="/components" element={<Components />} />
      <Route path="/" element={<Info />} />
      <Route path="/htmlcode" element={<ShowHtmlCode />} />
    </Routes>
  );
}

export default App;
