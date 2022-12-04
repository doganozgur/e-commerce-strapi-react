import FeaturedProducts from "../../components/layout/FeaturedProducts";
import Slider from "../../components/layout/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts type="featured" />
      {/* <FeaturedProducts type="trending" /> */}
    </>
  );
}
