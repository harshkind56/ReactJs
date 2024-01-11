import { CDN_URL } from "../utils/constant";

const Restaurant = (props) => {
const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="Biryani"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export const withIsOpen = (Restaurant) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 rounded-lg">
          <i>Open</i>
        </label>
        <Restaurant {...props} />
      </div>
    );
  };
};

// higher component card
// input = RestaurantCard => Res
export default Restaurant;
