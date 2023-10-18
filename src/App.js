import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";
import Profile from "./components/profile/Profile";
import { NotFound } from "./components/pages/NotFound";
import Home from "./components/pages/Home";

const App = () => {
  const location = useLocation();
  const [value, setValue] = useState(null);
  return (
    <PrimeReactProvider value={value}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/profile/cv-template/:id"
          element={<Profile path={location.pathname} />}
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </PrimeReactProvider>
  );
};

export default App;
