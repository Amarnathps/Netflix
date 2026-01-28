import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/Header/Header";
import Content from "./component/Content/Content";
import Pages from "./component/Pages/Pages";
import Page2 from "./component/Pages/Page2";
import Page3 from "./component/Pages/Page3";
import Page4 from "./component/Pages/Page4";
import Footer from "./component/Footer/Footer"
import Home from "./pages/Home/Home";

import Signin from "./pages/Sign-in/Sign-in";

function App() {
  return (
    <BrowserRouter>
      <Routes>

      
        <Route
          path="/"
          element={
            <>
              <Header />
              <Content />
              <Pages />
              <Page2 />
              <Page3 />
              <Page4 />
              <Footer />
              {/* <Home /> */}
            </>
          }
        />

        {/* Signup Page */}
        <Route path="/signup" element={<Signin />} />
        <Route path="/home" element={<Home />} />
  </Routes>
    </BrowserRouter>
  );


}

export default App;
