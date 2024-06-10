import { FC } from "react";

import { useFetchPhotos } from "./hooks/useFetchPhotos.ts";
import { Button } from "../../components/Button.tsx";
import { Loader } from "../../components/Loader.tsx";
import { LoadingError } from "../../components/Notification.tsx";
import { Select } from "../../components/Select.tsx";

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
      </>
    </div>
  );
};
