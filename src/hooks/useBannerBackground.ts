import banner1 from "../assets/list-banners/Saly-11.png";
import banner2 from "../assets/list-banners/Saly-32.png";
import banner3 from "../assets/list-banners/Saly-36.png";
import banner4 from "../assets/list-banners/Saly-43.png";
import pickRandomItem from "../utils/pickRandomItem";

const images = [banner1, banner2, banner3, banner4];
const colors = ["yellow.500", "blue.500", "orange.500", "purple.500"];

const useBannerBackground = () => {
  return { image: pickRandomItem(images), color: pickRandomItem(colors) };
};

export default useBannerBackground;
