import { FC } from "react";

type SearchResultProps = {
  imageUrl: string;
  description: string;
};

export const SearchResult: FC<SearchResultProps> = ({
  imageUrl,
  description,
}) => (
  <div className="break-inside p-2 border rounded-lg shadow-lg">
    <img
      src={imageUrl}
      alt={description}
      className="w-full h-auto rounded-lg"
    />
  </div>
);
