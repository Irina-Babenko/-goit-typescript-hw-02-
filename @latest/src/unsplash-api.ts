const ACCESS_KEY = "XSikqM8PcWgIvVDUYQ0SoeNF-ylxwzRgy_haP2fEoLY";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description?: string;
}

interface FetchPicturesResponse {
  images: Image[];
}

export async function fetchPicturesWithQuery(
  query: string,
  page: number,
  perPage: number = 16
): Promise<FetchPicturesResponse> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&per_page=${perPage}&query=${query}&client_id=${ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  const data = await response.json();

  return {
    images: data.results as Image[],
  };
}
