import { useEffect, useState } from "react";
import fetchApi from "../../utils/fetch";
import NavLayout from "../Layouts/NavLayout";
import Logo from "../Navbar/Logo";
import Logout from "../Navbar/Logout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [password, setPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [confirmNewPassword, setConfirmPassword] = useState(null);

  const navigate = useNavigate();

  const loginValidation = async () => {
    const { status, data } = await fetchApi("token/validation", {
      method: "POST",
      credentials: "include",
    });
    if (status !== "success") {
      navigate("/login");
      return;
    }
    localStorage.clear();
    setUser(data);
  };

  const showNav = () => {
    setIsOpen(true);
    return;
  };

  const changePasswordHandler = async () => {
    const { status, message } = await fetchApi("change-password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, newPassword, confirmNewPassword }),
      credentials: "include",
    });
    setMessage(message);
  };

  useEffect(() => {
    loginValidation();
  }, []);
  return (
    <>
      <NavLayout>
        <Logo />
        <Logout user={user} isOpen={isOpen} showNav={showNav} />
      </NavLayout>
      <div
        onClick={() => setIsOpen(false)}
        className="bg-white overflow-hidden shadow rounded-lg lg:mt-16 max-sm:mt-17"
      >
        <div className="px-4 py-5 sm:px-6 border">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            User Profile
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 max-sm:pb-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.username}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {user.email}
              </dd>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 md:items-center">
              <label
                htmlFor="old-password"
                className="font-medium text-gray-500 md:text-sm max-sm:text-sm"
              >
                Old password
              </label>
              <input
                id="old-password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="block mt-1 p-1 border border-gray-500 outline-none rounded-md text-sm font-medium text-gray-500"
                placeholder="******"
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:items-center sm:px-6">
              <label
                htmlFor="new-password"
                className="font-medium text-gray-500 md:text-sm max-sm:text-sm"
              >
                New password
              </label>
              <input
                id="new-password"
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                className="block mt-1 p-1 border border-gray-500 outline-none rounded-md text-sm font-medium text-gray-500"
                placeholder="******"
              />
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 md:items-center sm:px-6">
              <label
                htmlFor="confirm-password"
                className="font-medium text-gray-500 md:text-sm max-sm:text-sm"
              >
                Password confirm
              </label>
              <input
                id="confirm-password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block mt-1 p-1 border border-gray-500 outline-none rounded-md text-sm font-medium text-gray-500"
                placeholder="******"
              />
            </div>
            <div className="errMessage max-sm:my-3">
              <p className="max-sm:text-sm">{message && message}</p>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-2 float-right mr-2">
        <button
          onClick={changePasswordHandler}
          className="text-sm bg-languange p-2 rounded-lg"
        >
          Change password
        </button>
      </div>
    </>
  );
};

export default Profile;
