import "./Location.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import locations from "../data/logement.json"; // adjust the path as needed
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";

const Location = () => {
  const { id } = useParams<{ id: string }>();
  console.log("Location ID:", id);
  const navigate = useNavigate();
  const location = locations.find((loc) => loc.id === id);

  useEffect(() => {
    if (!location) {
      navigate("/404", { replace: true });
    }
  }, [location, navigate]);
  return (
    <div className="location">
      {location && location.pictures && location.pictures.length > 0 && (
        <Carrousel images={location.pictures} />
      )}

      <div className="location-details">
        <div className="nat">
          <h1>{location?.title}</h1>
          <p>{location?.location}</p>
          {location?.tags && location.tags.length > 0 && (
            <div className="location-tags">
              {location.tags.map((tag, index) => <Tag key={index} tag={tag} />)}
            </div>
          )}
        </div>
        <div className="owner-rating">
          <div className="rating">
            {Array.from(
              { length: 5 },
              (_, index) => (
                <span
                  key={index}
                  className="star"
                >
                  <img
                    src={index < Number(location?.rating)
                      ? "https://img.icons8.com/?size=100&id=zWBbi62CYIKH&format=png&color=FF6060"
                      : "https://img.icons8.com/?size=100&id=zWBbi62CYIKH&format=png&color=E3E3E3"}
                    alt="Star"
                  />
                </span>
              ),
            )}
          </div>
          <div className="owner">
            <span className="owner-name">{location?.host?.name}</span>
            <img
              src={location?.host?.picture}
              alt={location?.host?.name}
              className="owner-picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
