import type { ReactNode } from "react";
import SiteNavigation from "../../components/site-navigation";

export default function StudioLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div data-division="studio" data-testid="division-shell">
      <SiteNavigation />
      {children}
    </div>
  );
}
