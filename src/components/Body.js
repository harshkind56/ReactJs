import Restaurant, { withIsOpen } from "./Restaurant";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";



const Body = () => {
  // state variable
  const [listOfRestaurants, setListOfRestuarent] = useState([]);
  const [searchText, setSeachText] = useState("");
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);

  const RestaurantCardIsOpen = withIsOpen(Restaurant);

  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining.
    setListOfRestuarent(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // conditional Rendering.
  //if(listOfRestaurants.length === 0)
  //{
  // return < Shimmer />
  //}

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1> You are offline , please check ur interner </h1>;

  const {setUserName, loggedInUser}= useContext(UserContext);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSeachText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log("search");
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
              //filter the restuarants cards and update the value.
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label> UserName </label>
          <input className="border border-black" onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              //filter logic here

              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestuarent(filteredList);
            }}
          >
            Top rated Restaurant
          </button>
        </div>
        
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
              {restaurant.info.isOpen ? (
              <RestaurantCardIsOpen resData ={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}

            <Restaurant resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
