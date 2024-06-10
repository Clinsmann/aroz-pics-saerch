import { FC, Dispatch, SetStateAction, FormEvent, useCallback } from "react";

type SearchFormProps = {
  searchTermHook: [string, Dispatch<SetStateAction<string>>];
};

export const SearchForm: FC<SearchFormProps> = (props) => {
  const [searchTerm, setSearchTerm] = props.searchTermHook;

  const handleSearch = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      setSearchTerm(form.search.value);
    },
    [setSearchTerm],
  );

  return (
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
  );
};
