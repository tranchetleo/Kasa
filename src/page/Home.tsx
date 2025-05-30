import "./Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import accueilBanner from "../assets/images/accueil-banner.png";
import data from "../data/logement.json";

const Home = () => {
  return (
    <div className="home">
      {Banner(
        "home",
        accueilBanner,
        "Image de la page d'accueil",
        "Chez vous, partout et ailleurs",
      )}
      <div className="card-container">
        {data.map((item) => (
          Card(item.cover, item.title, item.id)
        ))}
      </div>
    </div>
  );
};

export default Home;
