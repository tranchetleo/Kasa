import "./Tag.css";

type Tag = {
  tag: string;
};

export default function Tag({ tag }: Tag) {
  return (
    <span className="tag">
      {tag}
    </span>
  );
}
