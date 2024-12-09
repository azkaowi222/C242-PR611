import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import fetchApi from "../../utils/fetch";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const { status, message } = await fetchApi("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    if (status !== "suceess") {
      setErrMessage(message);
      return;
    }
    setIsAuth(true);
  };

  return (
    <div className="flex wrapper mt-16 items-center gap-10 bg-hero pt-3">
      <div className="px-4 w-custom h-custom">
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
      <div className="flex flex-col login-form h-60 rounded-xl">
        <h1 className="text-3xl font-bold text-white">Welcome To GreenLeaves</h1>
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
              className=" pl-10 my-3 border outline-none rounded-md p-2 w-full"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-red-500 mb-4">{!isAuth ? errMessage : null}</p>
          <button
            onClick={loginHandler}
            className="bg-languange p-2 rounded-lg"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
