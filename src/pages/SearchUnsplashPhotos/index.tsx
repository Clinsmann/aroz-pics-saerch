import { QueryClient, QueryClientProvider } from "react-query";
import { SearchPhotos } from "./SearchPhotos.tsx";

const queryClient = new QueryClient();

export const SearchUnsplashPhotos = () => (
  <QueryClientProvider client={queryClient}>
    <SearchPhotos />
  </QueryClientProvider>
);
