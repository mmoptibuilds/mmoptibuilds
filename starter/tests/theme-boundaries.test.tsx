import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it } from "vitest";
import GatewayLayout from "../app/(gateway)/layout";
import SystemsLayout from "../app/(systems)/layout";
import StudioLayout from "../app/(studio)/layout";

const divisionLayouts = [
  ["gateway", GatewayLayout],
  ["systems", SystemsLayout],
  ["studio", StudioLayout],
] as const;

afterEach(cleanup);

describe("public division theme boundaries", () => {
  it.each(divisionLayouts)("renders the %s division boundary", (division, Layout) => {
    render(
      <Layout>
        <p>Route content</p>
      </Layout>,
    );

    expect(screen.getByTestId("division-shell")).toHaveAttribute("data-division", division);
  });

  it.each(divisionLayouts)("preserves children inside the %s division boundary", (_division, Layout) => {
    render(
      <Layout>
        <p>Route content</p>
      </Layout>,
    );

    expect(screen.getByText("Route content")).toBeInTheDocument();
  });
});
