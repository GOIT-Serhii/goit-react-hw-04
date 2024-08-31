import css from "./ImageCard.module.css";

export default function ImageCard({ src, alt }) {
  return (
    <div>
      <img className={css.image} src={src} alt={alt} />
    </div>
  );
}
