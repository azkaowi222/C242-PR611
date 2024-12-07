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
  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await fetchApi("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    console.log(result);
  };

  return (
    <div className="flex wrapper mt-2.5 items-center gap-10">
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
      <div className="flex flex-col login-form h-60 rounded-xl">
        <h1 className="text-3xl font-bold">Welcome To GreenLeave App</h1>
        <p className="my-3">Please Login to your account</p>
        <div className="input relative flex flex-col">
          <label>Email</label>
          <MdOutlineMailOutline className="absolute top-12 left-3" />
          <input
            type="email"
            placeholder="email"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <RiLockPasswordLine className="absolute bottom-16 left-3" />
          <input
            type="password"
            placeholder="******"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
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
