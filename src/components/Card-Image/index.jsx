/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./index.scss";

const CardImage = ({ id, title, imgSrc, showBottom = false, price }) => {
  const navigate = useNavigate();

  const handleNavigateProductInfo = () => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="CardImage" onClick={handleNavigateProductInfo}>
      <div className="CardImageInner">
        <div className="imgContainer">
          <img src={imgSrc} alt={title} />
        </div>
      </div>

      {showBottom && (
        <div className="CardImageBottom">
          <h3>{title.length > 15 ? title.slice(0, 15) + "..." : title}</h3>
          <h5>${price}</h5>
        </div>
      )}
    </div>
  );
};

export default CardImage;
