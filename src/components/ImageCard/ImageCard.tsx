import React from "react";
import { ImageCardProps } from "./ImageCard.types";
import css from "./ImageCard.module.css";

const ImageCard: React.FC<ImageCardProps> = React.memo(
  ({ src = "", alt = "", onClick = () => {} }) => {
    return (
      <div className={css.imageCard}>
        <img src={src} alt={alt} onClick={onClick} className={css.image} />
      </div>
    );
  }
);

export default ImageCard;
