import "./Card.css";
import { Link } from "react-router-dom";

export default function Card(
  src: string,
  title: string,
  id: string,
) {
  return (
    <div className="card" key={id}>
      <Link to={`/location/${id}`}>
        <div className="card-overlay"></div>
        <img src={src} alt="" />
        <h2>{title}</h2>
        <span className="card-id">{id}</span>
      </Link>
    </div>
  );
}
