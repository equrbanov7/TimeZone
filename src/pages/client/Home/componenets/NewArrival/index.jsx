import CardImage from "../../../../../components/Card-Image";
import { useGetAllProductsQuery } from "../../../../../redux/rtkQuery/productApi";
import "./index.scss";

const NewArrival = () => {
  const { data: products } = useGetAllProductsQuery();

  return (
    <div className="NewArrival">
      <div className="container">
        <div className="NewArrivalsectionHeader">
          <h2>New Arrivals</h2>
        </div>

        <div className="row justify-content-center">
          {products?.slice(0, 3)?.map((product, index) => (
            <div key={index} className="col-md-4 d-flex justify-content-center">
              <CardImage
                imgSrc={product.image}
                showBottom={true}
                price={product.price}
                title={product.title}
                id={product.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
