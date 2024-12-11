import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordFill } from "react-icons/ri";
import fetchApi from "../../utils/fetch";
import "swiper/css";
import "swiper/css/scrollbar";

const RegisterForm = ({ setIsOpen, isRegister }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [verifCode, setVerifCode] = useState(null);
  const [isVerify, setIsVerify] = useState(false);
  const [isDisable, setIsDisable] = useState(false);
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    setErrMessage(null);
    const { status, message } = await fetchApi("register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
      credentials: "include",
    });
    if (status !== "pending") {
      setErrMessage(message);
      return;
    }
    setIsDisable(false);
    setIsVerify(true);
  };

  const verifyEmailHandler = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    setErrMessage(null);
    const { status, message } = await fetchApi("mail/verify", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ verifCode }),
    });
    if (status !== "success") {
      setErrMessage(message);
      return;
    }

    navigate("/login");
  };

  const resendEmailHandler = async (e) => {
    e.preventDefault();
    const { message } = await fetchApi("resend-otp", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    setErrMessage(message);
  };
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="flex wrapper mt-16 gap-10 bg-hero pt-3 max-sm:justify-center"
    >
      <div className="px-2 w-custom h-custom max-sm:hidden">
        <div className="px-2 w-custom h-custom">
          <Swiper
            modules={[Autoplay, Scrollbar]}
            spaceBetween={50}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 7000,
            }}
            scrollbar={{
              draggable: true,
            }}
          >
            <SwiperSlide className="w-custom h-custom">
              <div className="bg-image-1 w-full h-full rounded-2xl"></div>
            </SwiperSlide>
            <SwiperSlide className="w-custom h-custom">
              <div className="bg-image-2 w-full h-full rounded-2xl"></div>
            </SwiperSlide>
            <SwiperSlide className="w-custom h-custom">
              <div className="bg-image-3 w-full h-full rounded-2xl"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="flex flex-col login-form rounded-xl mt-2 max-sm:mt-7 w-99 max-sm:w-4/5 max-sm:h-screen">
        <h1 className="text-3xl font-bold text-white">
          Welcome To GreenLeaves
        </h1>
        <p className="my-3 text-white">
          Register your account for best experience
        </p>
        <div
          className={`relative verifyEmail ${!isVerify ? "hidden" : "block"}`}
        >
          <label className="text-white block">Verification code</label>
          <input
            type="text"
            required
            placeholder="OTP"
            onChange={(e) => setVerifCode(e.target.value)}
            className="my-4 block outline-none pl-10 p-2 rounded-md"
          />
          <RiLockPasswordFill className="absolute top-13 left-3" />
          <p className="text-red-500 mb-3">{errMessage}</p>
          <span className="block text-white mb-4">
            didn't receive code?{" "}
            <button onClick={resendEmailHandler} className="border-b green">
              resend
            </button>
          </span>
          <button
            className="bg-languange p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={verifyEmailHandler}
            disabled={isDisable && !errMessage}
          >
            {isDisable && !errMessage ? "Verifying..." : "Verify email"}
          </button>
        </div>
        <div
          className={`input relative flex flex-col ${
            !isVerify ? null : "hidden"
          }`}
        >
          <label className="text-white">Name</label>
          <FaUser className="absolute top-11 left-3 text-sm" />
          <input
            type="text"
            placeholder="name"
            className="pl-10 my-2 border outline-none rounded-md p-2"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex flex-col relative gap-2">
            <label className="text-white">Email</label>
            <MdOutlineMailOutline className="absolute top-11 left-3" />
            <input
              type="email"
              placeholder="email"
              className="pl-10 border outline-none rounded-md p-2"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-white">Password</label>
            <RiLockPasswordLine className="absolute top-31 left-3" />
            <input
              type="password"
              placeholder="******"
              className="pl-10 border outline-none rounded-md p-2"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-white">Password confirmation</label>
            <RiLockPasswordLine className="absolute top-52 left-3" />
            <input
              type="password"
              placeholder="******"
              className="pl-10 border outline-none rounded-md p-2"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="mb-2 text-red-500">
              {!errMessage ? null : errMessage}
            </p>
          </div>
          <button
            onClick={registerHandler}
            disabled={isDisable && !errMessage}
            className="bg-languange p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDisable && !errMessage ? "Please wait..." : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
