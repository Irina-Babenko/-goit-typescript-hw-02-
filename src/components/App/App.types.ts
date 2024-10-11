export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description?: string;
}

export interface AppProps {}

export interface AppState {
  images: Image[];
  query: string;
  page: number;
  isLoading: boolean;
  error: string;
  showModal: boolean;
  modalImage: Image | null;
}
