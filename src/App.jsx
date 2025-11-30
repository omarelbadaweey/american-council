import React from "react";
import { Routes, Route } from "react-router-dom";
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
import Test from "./pages/Test";

function App() {
  return (
    <>
      <div className="">
        {/* <Header /> */}
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Test />} />
            <Route path="/courses" element={<Coures />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/booking" element={<BookingtPage targetNumber={"201095922032"}/>} />
            <Route path="/trainingterms" element={<TrainingTerms />} />
          </Routes>
        </AnimatePresence>

        {/* <Footer /> */}
      </div>
    </>
  );
}
export default App;