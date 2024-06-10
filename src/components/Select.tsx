import { FC, ChangeEvent, useCallback } from "react";

type SelectProps = {
  name: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

export const Select: FC<SelectProps> = ({
  name,
  label,
  value,
  options,
  onChange,
}) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(event.target.value);
    },
    [onChange],
  );

  return (
    <label className="flex md:items-center flex-col md:flex-row">
      <span className="mr-2">{label}:</span>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="border p-2 rounded-lg shadow-lg min-w-[150px]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};
