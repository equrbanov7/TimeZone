import CardImage from "../../../../../components/Card-Image";
import { useGetAllProductsQuery } from "../../../../../redux/rtkQuery/productApi";

import "./index.scss";

const NewArrival = () => {
  const { data: products } = useGetAllProductsQuery();

  return (
    <div className="NewArrival">
      <div className="NewArrivalContainer">
        <div className="NewArrivalsectionHeader">
          <h2>New Arrivals</h2>
        </div>
        <div className="customContainer">
          <div className="NewArrivalProducts">
            {products?.slice(0, 3)?.map((product, index) => {
              return (
                <CardImage
                  key={index}
                  imgSrc={product.image}
                  showBottom={true}
                  price={product.price}
                  title={product.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
