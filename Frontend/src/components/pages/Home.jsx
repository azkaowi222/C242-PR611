import HeroSection from "../HeroSection";
import Navbar from "../Navbar";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";
import AOS from "aos";
import UploadSection from "../UploadSection";
import NavLayout from "../Layouts/NavLayout";
import Logo from "../Navbar/Logo";
import Logout from "../Navbar/Logout";
import Modal from "../Modal/Modal";
import * as tf from "@tensorflow/tfjs";
import loadModel from "../../models/LoadModel";
import "aos/dist/aos.css";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Home = () => {
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [isDisable, setIsDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [imgElement, setImgElement] = useState(null);
  const [label, setLabel] = useState(null);

  const showNav = () => {
    setIsOpen(true);
    return;
  };
  const AosInit = () => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  };

  const loginValidation = async () => {
    const { status, data } = await fetchApi("token/validation", {
      method: "POST",
      credentials: "include",
    });
    if (status !== "success") {
      setIsLogin(false);
      return;
    }
    localStorage.clear();
    setIsLogin(true);
    setUser(data);
  };

  const predictHandler = async () => {
    const predictRemaining = localStorage.getItem("predictRemaining");
    if (predictRemaining === "null") {
      alert("Maximum 1x check, signup to continue");
      return;
    }
    if (!isLogin) {
      localStorage.setItem("predictRemaining", "null");
    }
    setIsDisable(true);
    const model = await loadModel();
    const tensor = tf.browser
      .fromPixels(imgElement)
      .resizeNearestNeighbor([448, 448])
      .toFloat()
      .div(255.0)
      .expandDims(0);
    const predictions = await model.predict(tensor).data();
    const labelIndex = {
      0: "Bacterial Blight",
      1: "Brown Streak Disease",
      2: "Green Mottle",
      3: "Mosaic Disease",
      4: "Healthy",
    };
    const maxIndex = predictions.indexOf(Math.max(...predictions));
    const predictedLabel = labelIndex[maxIndex];
    setIsModal(true);
    setLabel(predictedLabel);
    setIsDisable(false);
  };

  useEffect(() => {
    AosInit();
    loginValidation();
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        {!isLogin ? (
          <Navbar isOpen={isOpen} showNav={showNav} />
        ) : (
          <NavLayout>
            <Logo />
            <Logout user={user} showNav={showNav} isOpen={isOpen} />
          </NavLayout>
        )}
      </div>
      <div className="overflow-hidden" onClick={() => setIsOpen(false)}>
        <HeroSection setIsOpen={setIsOpen} />
        <UploadSection
          predictHandler={predictHandler}
          setImgElement={setImgElement}
          imgElement={imgElement}
          isDisable={isDisable}
        />
        <About />
        <Contact />
        <Modal isModal={isModal} setIsModal={setIsModal} label={label} />
      </div>
    </>
  );
};

export default Home;
