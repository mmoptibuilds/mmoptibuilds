import { cleanup, render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it } from "vitest";
import GatewayLayout from "../app/(gateway)/layout";
import SystemsLayout from "../app/(systems)/layout";
import StudioLayout from "../app/(studio)/layout";

const publicLayouts = [
  ["gateway", GatewayLayout],
  ["systems", SystemsLayout],
  ["studio", StudioLayout],
] as const;

const publicLinks = [
  ["Gateway", "/"],
  ["Systems", "/systems"],
  ["Studio", "/studio"],
] as const;

afterEach(cleanup);

describe("public division navigation", () => {
  it.each(publicLayouts)("renders the shared navigation in the %s layout", (_division, Layout) => {
    render(
      <Layout>
        <p>Route content</p>
      </Layout>,
    );

    const navigation = screen.getByRole("navigation", { name: "Public division navigation" });

    expect(navigation).toBeInTheDocument();
    expect(screen.getByText("Route content")).toBeInTheDocument();

    for (const [name, href] of publicLinks) {
      expect(within(navigation).getByRole("link", { name })).toHaveAttribute("href", href);
    }

    expect(within(navigation).queryByRole("link", { name: /admin/i })).not.toBeInTheDocument();
    expect(navigation.querySelector('a[href="/admin"]')).not.toBeInTheDocument();
  });
});
