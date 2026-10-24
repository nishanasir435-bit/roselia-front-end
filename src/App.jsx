
import { useState } from "react";
import Header from "./Components/Layout/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./Components/Layout/Footer";
import Products from "./Products"
import Shop from "./Shoplist"
import About from "./pages/LandingPage/about page/about";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Favourites from "./pages/LandingPage/Favourites";
import SignIn from "./pages/LandingPage/SignIn"
import SignUp from "./pages/LandingPage/SignUp/SignUp";
import Contact from "./Components/contact";
import Error from "./pages/LandingPage/errorpage";
import Layout from "./Components/Layout";
import Home from "./Components/Home/home";
import AdminPage from "./Components/Layout/Admin/AdminPage";


function App() {

  const userToken = localStorage.getItem("userToken");
  return userToken ? (

    <>
      <Routes>
        <Route path="/admin/*" element={<AdminPage />} />

        <Route
          path="*"
          element={

            <Layout>
              <Routes>

                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/products" element={<Products />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/error" element={<Error />} />
                <Route path="/contact" element={<Contact />} />


              </Routes>
            </Layout>
          }
        />
      </Routes>
    </>



    // <Header/>
    // <LandingPage/>
    // <Home/>
    // <About/> 
    // <Shop/> 
    // <Products/>
    // <Favourites/>
    // <SignIn/>
    // <SignUp/>
    //   <Error/>
    //   <Contact/>

  ) : (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="/sign-in" />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />


      </Routes>
    </>



  )
};

export default App;     