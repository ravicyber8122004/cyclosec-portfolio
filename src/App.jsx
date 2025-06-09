import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Base, ScrollToTop } from "./components";
import { Homepage } from "./pages";
import { navLinks } from "./components/index";

//note: import all the components for better routing.


export default function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<Homepage />} />

            {navLinks.map((link) => {
              if (link.hasSubmenu && link.subMenu) {
                return (
                  <Route
                    key={link.label}
                    path={link.path}
                    element={<link.element />}
                  >
                    {link.subMenu.map((submenu) => (
                      <Route
                        key={submenu.name}
                        path={submenu.path.replace(`${link.path}/`, "")}
                        element={<submenu.element />}
                      />
                    ))}
                  </Route>
                );
              } else {
                return (
                  <Route
                    key={link.label}
                    path={link.path}
                    element={<link.element />}
                  />
                );
              }
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
