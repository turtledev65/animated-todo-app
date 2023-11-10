import banner1 from "../assets/list-banners/Saly-11.png";
import banner2 from "../assets/list-banners/Saly-32.png";
import banner3 from "../assets/list-banners/Saly-36.png";
import banner4 from "../assets/list-banners/Saly-43.png";
import pickRandomItem from "../utils/pickRandomItem";

const bannerImages = [banner1, banner2, banner3, banner4];
const bannerColors = ["yellow", "blue", "purple"];

const useBannerBackground = () => {
  const storedBannerString = sessionStorage.getItem("banner");
  if (storedBannerString) {
    const storedBanner = JSON.parse(storedBannerString);
    return storedBanner;
  }

  const banner = {
    image: pickRandomItem(bannerImages),
    color: pickRandomItem(bannerColors),
  };
  sessionStorage.setItem("banner", JSON.stringify(banner));
  return banner;
};

export default useBannerBackground;
