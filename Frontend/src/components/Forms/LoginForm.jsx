import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import fetchApi from "../../utils/fetch";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/scrollbar";
const LoginForm = ({ setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isDisable, setIsDisable] = useState(false);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsDisable(true);
    setErrMessage(null);
    const { status, message } = await fetchApi("login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (status !== "success") {
      setErrMessage(message);
      return;
    }
    setIsAuth(true);
    setIsDisable(false);
    navigate("/");
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="flex wrapper mt-16 items-center gap-10 bg-hero pt-3 max-sm:w-full max-sm:justify-center"
    >
      <div className="px-4 w-custom h-custom max-sm:hidden">
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
      <div className="flex flex-col login-form h-60 rounded-xl w-99 max-sm:h-screen max-sm:p-5 max-sm:w-4/5">
        <h1 className="text-3xl font-bold text-white max-sm:text-xl max-sm:mt-4">
          Welcome To GreenLeaves
        </h1>
        <p className="my-3 text-white">Please Login to your account</p>
        <div className="input relative flex flex-col">
          <label className="text-white">Email</label>
          <MdOutlineMailOutline className="absolute top-12 left-3" />
          <input
            type="email"
            placeholder="email"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="password-field relative">
            <label className="block text-white">Password</label>
            <RiLockPasswordLine className="absolute top-12 left-3" />
            <input
              type="password"
              placeholder="******"
              className="pl-10 my-3 border outline-none rounded-md p-2 w-full"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-red-500 mb-4 max-sm:mb-2 max-sm:text-sm">
            {!isAuth && errMessage}
          </p>
          <div className="md:hidden max-sm:block">
            <h3 className="inline-block mr-6 text-white">
              Don't have an account?{" "}
              <Link
                className="border-b border-b-blue-400 text-blue-400"
                to={"/register"}
              >
                Sign up
              </Link>
            </h3>
          </div>
          <button
            onClick={loginHandler}
            disabled={isDisable && !errMessage}
            className="max-sm:mt-2 bg-languange p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDisable && !errMessage ? "Logging in..." : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
