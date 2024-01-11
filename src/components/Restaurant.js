import { CDN_URL } from "../utils/constant";
const Restaurant = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="Biryani"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating} stars</h4>
        
      </div>
    );
  };
export default Restaurant;  