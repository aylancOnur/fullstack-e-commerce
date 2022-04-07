import Carousel from "../components/Carousel";
import ExploreCard from "../components/ExploreCard";
import OfferCard from "../components/OfferCard";

const Home = () => {
  return (
    <div className="h-screen">
      <Carousel />
      <OfferCard />
      <ExploreCard />
    </div>
  );
};

export default Home;
