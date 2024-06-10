import { FC, useState } from "react";
import { Loader } from "../../components/Loader.tsx";
import {
  EmptySearchTerm,
  LoadingError,
  NotFoundError,
} from "../../components/Notification.tsx";
import { useFetchPhotos } from "./hooks/useFetchPhotos.ts";
import { SearchForm } from "./components/SearchForm.tsx";
import { SearchFilters } from "./components/SearchFilters.tsx";
import { SearchResults } from "./components/SearchResults.tsx";
import { Pagination } from "./components/Pagination.tsx";

export const SearchPhotos: FC = () => {
  const [page, setPage] = useState(1);
  const [color, setColor] = useState("");
  const [sort, setSort] = useState("relevant");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading, isError } = useFetchPhotos({
    searchTerm,
    page,
    color,
    sort,
  });

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4 text-center">
        Unsplash Search
      </h1>
      <div className="mb-6">
        <SearchForm searchTermHook={[searchTerm, setSearchTerm]} />
        <SearchFilters
          colorHook={[color, setColor]}
          sortHook={[sort, setSort]}
        />
      </div>
      {!searchTerm && <EmptySearchTerm />}
      {isLoading && <Loader />}
      {isError && <LoadingError message={error.message} />}
      {data?.data.results.length === 0 && <NotFoundError />}
      {data && <SearchResults photos={data?.data.results} />}
      <Pagination
        results={data?.data.results ?? []}
        pageHook={[page, setPage]}
      />
    </div>
  );
};
