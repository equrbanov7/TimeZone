/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./index.scss";

const CardImage = ({
  title,
  imgSrc,
  showBottom = false,
  price,
}) => {
  return (
    <div className="CardImage">
      <div
        className="CardImageInner"
      //  style={{ backgroundImage: `url(${imgSrc})` }}
      >

        <div className="imgContainer">
          <img src={imgSrc} alt="" />
        </div>
       
      </div>

      {showBottom && (
        <div className="CardImageBottom">
          <h3>{title} </h3>
          <h5>${price}</h5>
        </div>
      )}
    </div>
  );
};

export default CardImage;
