import { RefObject } from "react";

export interface ImageGalleryItem {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

export interface ImageGalleryProps {
  items: ImageGalleryItem[];
  onImageClick: (item: ImageGalleryItem) => void;
  lastPictureRef?: RefObject<HTMLLIElement>;
}
