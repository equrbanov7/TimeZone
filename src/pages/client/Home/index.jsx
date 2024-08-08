import { Helmet } from "react-helmet-async";
import Benefit from "./componenets/Benefit";
// import Categories from "./componenets/Categories";
import DealOfTheWeek from "./componenets/DealOfTheWeek";
import LatestBlogs from "./componenets/LatestBlogs";
import NewArrival from "./componenets/NewArrival";
import Slider from "./componenets/Slider";
import SwiperCards from "./componenets/SliderCards";
import Subscribe from "./componenets/Subscribe";
import GalleryArea from "./componenets/GalleryArea/GalleryArea";
import WatchOfChoice from "./componenets/WatchOfChoice/WatchOfChoice";
import ShopMethod from "./componenets/ShopMethod/ShopMethod"; 

const ClientHome = () => {
  return (
    <div className="ClientHome">
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Welcome to the home page" />
        <meta
          name="keywords"
          content="home, ecommerce, products, deals, blogs"
        />
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:description"
          content="Welcome to the home page of our ecommerce site where you can find the best products and deals."
        />
        <meta
          property="og:image"
          content="https://www.example.com/images/home-page.png"
        />
        <meta property="og:url" content="https://www.example.com" />
        <link rel="canonical" href="https://www.example.com" />
      </Helmet>
      <Slider />

      {/* <Categories /> */}

      <NewArrival />
      <GalleryArea />

      <DealOfTheWeek />

      <SwiperCards />

      <Benefit />

      <LatestBlogs />
      <WatchOfChoice />
      <ShopMethod />

      <Subscribe />
    </div>
  );
};

export default ClientHome;
