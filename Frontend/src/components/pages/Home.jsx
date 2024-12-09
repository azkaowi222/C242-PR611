import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import { useEffect } from "react";
import AOS from "aos";
import UploadSection from "../UploadSection";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  });
  return (
    <div className="overflow-x-hidden ">
      <Navbar />
      <HeroSection />
      <UploadSection />
    </div>
  );
};

export default Home;
