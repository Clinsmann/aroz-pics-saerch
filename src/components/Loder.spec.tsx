import { describe, it, expect } from "vitest";
import { Loader } from "./Loader.tsx";
import { render, screen } from "@testing-library/react";

describe("Loader", () => {
  it("should render loader component", () => {
    render(<Loader />);
    expect(screen.getByText("Loading...")).not.toBeNull();
  });
});
