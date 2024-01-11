import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setbuttonName] = useState("Login");

  return (
    <div className="header">
      <div className="container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to ="/"> Home</Link>
          </li>
          <li>
            <Link to ="/about"> About</Link>
          </li>
          <li>
            <Link to ="/contact"> Contact </Link>
          </li>
          <button
            className="login"
            onClick={() => {
              buttonName === "Login"
                ? setbuttonName("logout")
                : setbuttonName("login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
