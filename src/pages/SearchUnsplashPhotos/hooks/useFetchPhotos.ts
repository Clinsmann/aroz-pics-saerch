import axios from "axios";
import { useQuery } from "react-query";

export const DEFAULT_PAGE_SIZE = 10;
const UNSPLASH_URL = "https://api.unsplash.com/search/photos";
const UNSPLASH_ACCESS_KEY = "ukJyK7f_oSD8sRs6GytnZxaxCnv8XCiFi05QKrF_BeQ";

export type UnsplashPhoto = {
  id: string;
  urls: { small: string };
  description: string;
};

type QueryResponse = {
  data: {
    results: UnsplashPhoto[];
    total_pages: number;
    total: number;
  };
};

type UseFetchPhotosParams = {
  searchTerm: string;
  page: number;
  color: string;
  sort: string;
  pageSize?: number;
};

export const useFetchPhotos = ({
  searchTerm,
  page,
  color,
  sort,
  pageSize = DEFAULT_PAGE_SIZE,
}: UseFetchPhotosParams) =>
  useQuery<QueryResponse, Error>({
    enabled: !!searchTerm,
    queryKey: ["images", searchTerm, page, color, sort],
    queryFn: () =>
      axios.get(UNSPLASH_URL, {
        params: {
          query: searchTerm,
          page,
          per_page: pageSize,
          color: color || undefined,
          order_by: sort,
          client_id: UNSPLASH_ACCESS_KEY,
        },
      }),
  });
