import NewArrival from "./componenets/NewArrival";
import Slider from "./componenets/Slider";
import SwiperCards from "./componenets/SliderCards";
import GalleryArea from "./componenets/GalleryArea/GalleryArea";
import WatchOfChoice from "./componenets/WatchOfChoice/WatchOfChoice";
import ShopMethod from "./componenets/ShopMethod/ShopMethod";

const ClientHome = () => {
  return (
    <>
      <Slider />
      <NewArrival />
      <GalleryArea />
      <SwiperCards />
      <WatchOfChoice />
      <ShopMethod />
    </>
  );
};

export default ClientHome;
