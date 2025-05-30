import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import locations from "../data/logement.json"; // adjust the path as needed

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
        <div className="carousel">
          <img
            src={location.pictures[0]}
            alt={`Location ${location.title} - 1`}
            style={{ width: "100%", height: "auto" }}
          />
          
        </div>
      )}
    </div>
  );
};

export default Location;
