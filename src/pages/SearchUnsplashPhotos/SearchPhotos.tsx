import React, { FC, useState } from "react";

import { useFetchPhotos } from "./hooks/useFetchPhotos.ts";
import { Button } from "../../components/Button.tsx";
import { Loader } from "../../components/Loader.tsx";
import { LoadingError } from "../../components/Notification.tsx";
import { Select } from "../../components/Select.tsx";
import { Pagination } from "./components/Pagination.tsx";

const UNSPLASH_COLORS = [
  "black_and_white",
  "black",
  "white",
  "yellow",
  "orange",
  "red",
  "purple",
  "magenta",
  "green",
  "teal",
  "blue",
];

export const SearchPhotos: FC = () => {
  const [page, setPage] = useState(1);
  const [color, setColor] = useState("");
  const [sort, setSort] = useState("relevant");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, isLoading, isError } = useFetchPhotos({
    searchTerm: "dog",
    page,
    color,
    sort,
  });

  const handleSearch = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      setSearchTerm(form.search.value);
    },
    [setSearchTerm],
  );

  console.log(data, error, isLoading, isError);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-4 text-center">
        Unsplash Search
      </h1>
      <form onSubmit={handleSearch} className="mb-4 flex justify-center">
        <input
          required
          type="text"
          name="search"
          defaultValue={searchTerm}
          className="border p-2 rounded-lg shadow-lg w-1/2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 ml-2 rounded-lg shadow-lg"
        >
          Search
        </button>
      </form>
      <div className="mb-4 flex justify-center space-x-6">
        <label className="flex items-center">
          <Select
            name="color"
            label="Color"
            value={color}
            onChange={setColor}
            options={["Any", ...UNSPLASH_COLORS]}
          />
        </label>
        <label className="flex items-center">
          <Select
            name="sort"
            label="Sort by"
            value={sort}
            onChange={setSort}
            options={["relevant", "latest"]}
          />
        </label>
      </div>
      <>
        testing my components
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          disabled={false}
        >
          Click me
        </Button>
        <Loader />
        <LoadingError message="This is a notification" />
        <Select
          options={["red", "green", "blue"]}
          name="color"
          label="Color"
          value="green"
          onChange={(e) => console.log(e.target.value)}
        />
        {data &&
          data.data.results.map((photo) => (
            <div className="break-inside p-2 border rounded-lg shadow-lg">
              <img
                src={photo.urls.small}
                alt={photo.description}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        <Pagination
          results={data?.data.results ?? []}
          pageHook={[page, setPage]}
        />
      </>
    </div>
  );
};
