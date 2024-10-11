export interface ImageModalProps {
  image: {
    urls: {
      small: string;
      regular?: string;
    };
    alt_description?: string;
    user?: {
      name: string;
    };
    likes?: number;
  } | null;
  onClose: () => void;
}
