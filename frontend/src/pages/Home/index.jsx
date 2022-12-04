import Categories from "../../components/layout/Categories";
import FeaturedProducts from "../../components/layout/FeaturedProducts";
import Slider from "../../components/layout/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      {/* <FeaturedProducts type="trending" /> */}
    </>
  );
}
