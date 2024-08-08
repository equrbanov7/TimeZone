import React from "react";
import {
  useGetAllProductsQuery,
  useDeleteProductMutation,
} from "../../../redux/rtkQuery/productApi";

function GetProduct() {
  const { data: products, error, isLoading } = useGetAllProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products.</p>;

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    
    if (!confirmed) return;
  
    try {
      await deleteProduct(id).unwrap();
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Failed to delete the product:", error);
    }
  };
  

  return (
    <div>
      <div className="container">
        <h1 className="text-center my-4">Product List</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Category ID</th>
              <th scope="col">Discount</th>
              <th scope="col">Status</th>
              <th scope="col">Rating</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, indx) => (
              <tr key={indx}>
                <th>{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category_id}</td>
                <td>{product.discount}</td>
                <td>{product.status}</td>
                <td>{product.rating}</td>
                <td>
                  {product.image ? (
                    <>
                      <img
                        src={`${product.image}`}
                        alt={product.title}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </>
                  ) : (
                    <p>No Image</p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetProduct;
