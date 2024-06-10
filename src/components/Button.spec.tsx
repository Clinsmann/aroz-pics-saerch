import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button.tsx";

describe("Button", () => {
  it("should render button component", () => {
    const onClick = () => {};
    render(<Button onClick={onClick}>Button</Button>);
    expect(screen.getByText("Button")).not.toBeNull();
  });
});
