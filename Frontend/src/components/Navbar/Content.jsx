import { Link } from "react-router-dom";

const Content = () => {
  return (
    <>
      <nav>
        <li className="flex gap-16 font-light">
          <a href="#" className="hover:text-pink-600 transition-all delay-200">
            Home
          </a>
          <a href="#" className="hover:text-pink-600 transition-all delay-200">
            About Us
          </a>
          <a href="#" className="hover:text-pink-600 transition-all delay-200">
            Contact
          </a>
        </li>
      </nav>
      <div>
        <select className="mr-5 p-1.5 text-white outline-none rounded-lg">
          <option value="ENG">ENG</option>
          <option value="IDN">IDN</option>
        </select>
        <Link to={"/register"} className="bg-languange p-1.5 rounded-lg">Sign up</Link>
      </div>
    </>
  );
};

export default Content;
