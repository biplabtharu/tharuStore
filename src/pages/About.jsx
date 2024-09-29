import HeroSection from "../components/HeroSection";

const About = () => {
  const data = {
    name: "CG Local Store",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
