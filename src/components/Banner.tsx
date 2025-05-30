import "./Banner.css";

export default function Banner(
  pageName: string,
  src: string,
  alt: string,
  text: string,
) {
  return (
    <div className={`banner ${pageName}`}>
      <img src={src} alt={alt} />
      {text === ""
        ? (
          null
        )
        : (
          <h1>
            {text}
          </h1>
        )}
    </div>
  );
}
