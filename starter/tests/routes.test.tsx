import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import GatewayPage from "../app/(gateway)/page";
import AboutPage from "../app/(gateway)/about/page";
import ContactPage from "../app/(gateway)/contact/page";
import SystemsPage from "../app/(systems)/systems/page";
import StudioPage from "../app/(studio)/studio/page";
import AdminPage, { metadata as adminMetadata } from "../app/admin/page";

const routes = [
  ["gateway", GatewayPage, "mmoptibuilds"],
  ["systems", SystemsPage, "Systems"],
  ["studio", StudioPage, "Studio"],
  ["about", AboutPage, "About mmoptibuilds"],
  ["contact", ContactPage, "Contact mmoptibuilds"],
  ["admin", AdminPage, "MMOptiBuilds admin"],
] as const;

describe("direct route components", () => {
  it.each(routes)("renders a distinct semantic h1 for %s", (_route, Page, heading) => {
    render(<Page />);

    expect(screen.getByRole("heading", { level: 1, name: heading })).toBeInTheDocument();
  });

  it("marks the private admin entry as noindex", () => {
    expect(adminMetadata.robots).toMatchObject({ index: false, follow: false });
  });
});
