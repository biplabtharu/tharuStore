import HeroSection from "../components/HeroSection";
import FeatureProduct from "./FeatureProduct";
import Service from "./Service";
import Trusted from "./Trusted";

const Home = () => {
  const data = {
    name: "CG Local Store",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Service />
      <Trusted />
    </>
  );
};

export default Home;
