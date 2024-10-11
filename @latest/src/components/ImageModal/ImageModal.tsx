import { FC } from "react";
import Modal from "react-modal";
import { ImageModalProps } from "./ImageModal.types";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal: FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  const { urls, alt_description, user, likes } = image;

  return (
    <Modal
      isOpen={!!image}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.content}>
        <img
          src={urls?.regular || urls?.small || ""}
          alt={alt_description || "No description"}
          className={css.image}
        />
        <p>Author: {user?.name || "Unknown"}</p>
        <p>Likes: {likes !== undefined ? likes : "N/A"}</p>
        <button onClick={onClose} className={css.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
