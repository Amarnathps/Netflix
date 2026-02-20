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
import Series from "./pages/Series/Series";
import PosterDetails from "./pages/PosterDetails/PosterDetails";


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
        <Route path="/series" element={<Series />} />
        <Route path="/posters/:id" element={<PosterDetails />} />
        <Route path="/details/:id" element={<PosterDetails />} />
  </Routes>
    </BrowserRouter>
  );


}

export default App;
