import "./About.css";
import Banner from "../components/Banner";
import aboutBanner from "../assets/images/about-banner.png";
import data from "../data/about.json";
import Collapse from "../components/Collapse";

const About = () => {
  return (
    <div className="about">
      {Banner(
        "home",
        aboutBanner,
        "Image de la page d'accueil",
        "",
      )}
      <div className="collapse-container">
        {data.map((item) => (
          <Collapse
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
