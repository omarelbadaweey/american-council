import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Coures from "./pages/Coures";
import CourseDetails from "./pages/CourseDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import Payment from "./pages/Payment";
import Favorites from "./pages/Favorites";
import SearchPage from "./pages/SearchPage";
import BookingtPage from "./pages/BookingtPage";
import Home from "./pages/Home";
import TrainingTerms from "./pages/TrainingTerms";
import { Toaster } from "react-hot-toast";
// import Test from "./pages/Test";
import AmericanCode from "./pages/AmercanCode";
// import Alert from "./components/Alert";


function App() {
  const location = useLocation()
  return (
    <>
    <Toaster/>
      <div className="">
        {location.pathname !=="/american-code" && (
          <>
          <Header /> 
          {/* <Alert/> */}
          </>
      )}
      
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Coures />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<SearchPage />} />
            <Route
              path="/booking"
              element={<BookingtPage targetNumber={"201013003268"} />}
            />
            <Route path="/trainingterms" element={<TrainingTerms />} />
            <Route path="/american-code" element={<AmericanCode />} />
          </Routes>
        </AnimatePresence>

        {location.pathname !=="/american-code" && (
          <Footer />
        )}
      </div>
    </>
  );
}
export default App;