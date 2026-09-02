import type { ReactNode } from "react";
import SiteNavigation from "../../components/site-navigation";

export default function SystemsLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div data-division="systems" data-testid="division-shell">
      <SiteNavigation />
      {children}
    </div>
  );
}
