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

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await fetchApi("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });
    console.log(result);
  };
  return (
    <div className="flex wrapper mt-2.5 gap-10">
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
        {/* <div className="bg-image w-full h-full rounded-2xl"></div> */}
      </div>
      <div className="flex flex-col login-form h-60 rounded-xl mt-4">
        <h1 className="text-3xl font-bold">Welcome To GreenLeave App</h1>
        <p className="my-3">Register your account for best experience</p>
        <div className="input relative flex flex-col">
          <label>Name</label>
          <FaUser className="absolute top-12 left-3 text-sm" />
          <input
            type="text"
            placeholder="name"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <MdOutlineMailOutline className="absolute bottom-60 left-3" />
          <input
            type="email"
            placeholder="email"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <RiLockPasswordLine className="absolute top-56 left-3" />
          <input
            type="password"
            placeholder="******"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <RiLockPasswordLine className="absolute bottom-16 left-3" />
          <input
            type="password"
            placeholder="******"
            className="pl-10 my-3 border outline-none rounded-md p-2"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
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
