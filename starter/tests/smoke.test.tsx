import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import HomePage from "../app/(gateway)/page";

describe("root route", () => {
  it("renders the mmoptibuilds parent-brand heading", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "mmoptibuilds" }),
    ).toBeInTheDocument();
  });
});
