import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base, ScrollToTop } from "./components";
import { Homepage, Pricing } from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />
            <Route path="pricing" element={<Pricing />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
