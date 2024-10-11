import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: Array<{
    id: string;
    urls: {
      small: string;
    };
    alt_description: string;
  }>;
  onImageClick: (image: any) => void;
  lastPictureRef: React.RefObject<HTMLLIElement>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  items,
  onImageClick,
  lastPictureRef = null,
}) => {
  return (
    <ul className={css.galleryContainer}>
      {items.map((item, index) => {
        const {
          id,
          urls: { small },
          alt_description,
        } = item;
        const isLast = index === items.length - 1;

        return (
          <li
            key={id}
            className={css.galleryWrap}
            ref={isLast ? lastPictureRef : null}
          >
            <ImageCard
              src={small}
              alt={alt_description}
              onClick={() => onImageClick(item)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
