import { LOGO_URL } from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setbuttonName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg m-2  lg:bg-green-50">
      <div className="container">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          <li className=" flex px-4">
            Online Status: {onlineStatus ? "❤️" : "😒"}
          </li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact </Link>
          </li>
          <li className="px-4 font-medium">
            <Link to="/cart"> Cart ({cartItems.length}) </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <button
            className="flex"
            onClick={() => {
              buttonName === "Login"
                ? setbuttonName("logout")
                : setbuttonName("login");
            }}
          >
            {buttonName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
