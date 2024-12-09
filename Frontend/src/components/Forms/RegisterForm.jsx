import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import fetchApi from "../../utils/fetch";
import "swiper/css";
import "swiper/css/scrollbar";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState(null);

  const registerHandler = async (e) => {
    e.preventDefault();
    const { status, message } = await fetchApi(
      "http://localhost:8080/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      }
    );
    if (status !== "success") setErrMessage(message);
  };
  return (
    <div className="flex wrapper mt-16 gap-10 bg-hero pt-3">
      <div className="px-2 w-custom h-custom">
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
      <div className="flex flex-col login-form rounded-xl mt-2 w-99">
        <h1 className="text-3xl font-bold text-white">
          Welcome To GreenLeaves
        </h1>
        <p className="my-3 text-white">
          Register your account for best experience
        </p>
        <div className="input relative flex flex-col">
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
            <label className="text-white">Confirm Password</label>
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
            className="bg-languange p-2 rounded-lg"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
