import { FC } from "react";

import { useFetchPhotos } from "./hooks/useFetchPhotos.ts";

export const SearchPhotos: FC = () => {
  const { data, error, isLoading, isError } = useFetchPhotos({
    searchTerm: "cat",
    page: 1,
    color: "green",
    sort: "relevant",
  });

  console.log(data, error, isLoading, isError);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4 text-center">
        Unsplash Search
      </h1>
    </div>
  );
};
