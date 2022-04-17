import Carousel from "../components/Carousel";
import ExploreCard from "../components/ExploreCard";
import Footer from "../components/Footer/Footer";
import OfferCard from "../components/OfferCard";

const Home = () => {
  return (
    <div className="h-screen">
      <Carousel />
      <OfferCard />
      <ExploreCard />
      <Footer />
    </div>
  );
};

export default Home;
