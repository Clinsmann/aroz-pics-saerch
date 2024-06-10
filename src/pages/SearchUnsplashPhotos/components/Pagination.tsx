import { Dispatch, FC, SetStateAction, useCallback } from "react";
import { Button } from "../../../components/Button.tsx";
import { UnsplashPhoto } from "../hooks/useFetchPhotos.ts";

type PaginationProps = {
  results: UnsplashPhoto[];
  pageHook: [number, Dispatch<SetStateAction<number>>];
};

export const Pagination: FC<PaginationProps> = ({
  results,
  pageHook: [page, setPage],
}) => {
  const handlePrevious = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 1));
  }, [setPage]);

  const handleNext = useCallback(() => {
    setPage((prev) => (results.length > 0 ? prev + 1 : prev));
  }, [results.length, setPage]);

  return (
    <div className="mt-10 flex justify-between" data-testid="pagination">
      <Button
        disabled={page === 1}
        onClick={handlePrevious}
        data-testid="previous"
      >
        Previous
      </Button>
      <Button
        disabled={!results.length}
        onClick={handleNext}
        data-testid="next"
      >
        Next
      </Button>
    </div>
  );
};
