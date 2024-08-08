import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import "./index.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useGetSingleProductQuery } from "../../../redux/rtkQuery/productApi";
import { useState } from "react";

const ProductInfo = () => {
  const { productId } = useParams();
  const {
    data: oneProduct,
    error,
    isLoading,
  } = useGetSingleProductQuery(productId);
  const [count, setCount] = useState(1);

  if (isLoading) return <div>Loading...</div>;
  if (error || !oneProduct) return <div>No product found</div>;

  return (
    <Box
      className="ProductInfo"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
    >
      <Card sx={{ display: "flex", maxWidth: 800 }}>
        <CardMedia
          component="img"
          sx={{ width: 400 }}
          image={oneProduct?.image || "/default-image.png"}
          alt={oneProduct.title}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography component="div" variant="h5">
            {oneProduct.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {oneProduct?.description || "No description available"}
          </Typography>
          <Typography variant="h6">
            Price: ${oneProduct.price - oneProduct.discount}
          </Typography>
          <Rating name="read-only" value={oneProduct.rating || 0} readOnly />
          <Box display="flex" alignItems="center">
            <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{count}</Typography>
            <IconButton onClick={() => setCount(count + 1)}>
              <AddIcon />
            </IconButton>
          </Box>
          <Button variant="contained">Add to Basket</Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductInfo;
