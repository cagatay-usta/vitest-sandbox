import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import RenderName from "./propType";

describe("render name component", () => {
  it("display with default props", () => {
    render(<RenderName />);
    expect(screen.getByText("Cagatay")).toBeInTheDocument();
  });

  it("display with custom props", () => {
    render(<RenderName name="bob" />);
    expect(screen.getByText("bob")).toBeInTheDocument();
  })
})