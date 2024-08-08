import { useGetAllProductsQuery } from "../../../../../redux/rtkQuery/productApi";
import CustomCard from "../../../../../components/Card";

import "./index.scss";

const PopularProducts = () => {
  const { data: products } = useGetAllProductsQuery();

  return (
    <div className="PopularProducts">
      <div className="PopularProductsHome">
        <h2>Popular Items</h2>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className="customContainer  col-8">
        {products?.map((product) => {
          let showLeftTop = product.status === "New";
          showLeftTop = Boolean(product.discount > 0);
          return (
            <CustomCard
              key={product.id + 2}
              hoverable
              style={{ width: 240 }}
              cover={<img alt={product.title} src={product.image} />}
              title={product.title}
              price={product.price}
              discount={product.discount}
              showLeftTop={showLeftTop}
              productId={product.id}
              showBasket={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
