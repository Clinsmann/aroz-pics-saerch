import { Dispatch, SetStateAction, FC } from "react";
import { Select } from "../../../components/Select.tsx";

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

type ResultFiltersProps = {
  colorHook: [string, Dispatch<SetStateAction<string>>];
  sortHook: [string, Dispatch<SetStateAction<string>>];
};

export const SearchFilters: FC<ResultFiltersProps> = (props) => {
  const [color, setColor] = props.colorHook;
  const [sort, setSort] = props.sortHook;
  return (
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
  );
};
