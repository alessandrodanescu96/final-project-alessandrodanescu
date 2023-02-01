import { React, useEffect } from "react";
import AOS from "aos";
import { Route, Routes } from "react-router-dom";

import routes from "./pages";
import Music from "./pages/Music";
import Header from "./components/header/Header";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Header />

      <Routes>
        {routes.map((data, idx) => (
          <Route key={idx} path={data.path} element={data.component} exact />
        ))}

        <Route path="*" element={<Music />} />
      </Routes>
    </>
  );
}

export default App;
