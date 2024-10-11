import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import { fetchPicturesWithQuery } from "../../unsplash-api";
import { Image, AppState } from "./App.types";
import css from "./App.module.css";

const App: React.FC<AppProps> = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Image | null>(null);
  const lastPictureRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPicturesWithQuery(query, page, 16);
        console.log("API Response:", response);

        const newImages: Image[] = response.images;

        if (!Array.isArray(newImages)) {
          throw new Error("Response is not an array");
        }

        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Something went wrong, please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = (newQuery: string): void => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError("");
  };

  const handleLoadMore = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (imageData: Image): void => {
    setModalImage(imageData);
    setShowModal(true);
  };

  const closeModal = (): void => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <div className={css.appContainer}>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        items={images}
        onImageClick={handleImageClick}
        lastPictureRef={lastPictureRef}
      />
      {isLoading && <Loader />}
      {images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} isLoading={isLoading} />
      )}
      {showModal && <ImageModal image={modalImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
