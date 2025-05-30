import "./Card.css";

export default function Card(
  src: string,
  title: string,
  id: string,
) {
  return (
    <div className="card">
      <a href={`/location/${id}`}>
        <div className="card-overlay"></div>
        <img src={src} alt="" />
        <h2>{title}</h2>
        <span className="card-id">{id}</span>
      </a>
    </div>
  );
}
