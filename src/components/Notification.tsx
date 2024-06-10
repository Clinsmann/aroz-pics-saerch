import { FC } from "react";

type MessageProps = {
  message: string;
  testId?: string;
  className?: string;
};

const Message: FC<MessageProps> = ({ message, testId, className }) => (
  <div
    className={`text-center text-lg font-semibold p-4 m-4 border rounded-lg shadow-md ${className}`}
    data-testid={testId}
  >
    {message}
  </div>
);

export const LoadingError: FC<{ message: string }> = ({ message }) => (
  <Message message={message} className="text-red-500" />
);

export const NotFoundError: FC = () => (
  <Message message="No results found." testId="not-found" />
);

export const EmptySearchTerm: FC = () => (
  <Message message="Please enter a search term." testId="empty-search-term" />
);
