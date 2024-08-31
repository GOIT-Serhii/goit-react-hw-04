import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.imageGalleryList}>
      {items.map((item) => (
        <li
          onClick={() => openModal(item.urls.regular, item.description)}
          className={css.imageGalleryItem}
          key={item.id}
        >
          <ImageCard src={item.urls.small} alt={item.description} />
        </li>
      ))}
    </ul>
  );
}
