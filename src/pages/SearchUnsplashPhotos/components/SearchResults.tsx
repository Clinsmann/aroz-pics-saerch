import { SearchResult } from "./SearchResult.tsx";
import { FC } from "react";
import { UnsplashPhoto } from "../hooks/useFetchPhotos.ts";

type SearchResultsProps = {
  photos: UnsplashPhoto[];
};

export const SearchResults: FC<SearchResultsProps> = ({ photos }) => (
  <div
    data-testid="search-results"
    className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
  >
    {photos.map((photo) => (
      <SearchResult
        key={photo.id}
        imageUrl={photo.urls.small}
        description={photo.description}
      />
    ))}
  </div>
);
