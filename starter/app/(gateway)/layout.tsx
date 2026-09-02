import type { ReactNode } from "react";
import SiteNavigation from "../../components/site-navigation";

export default function GatewayLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div data-division="gateway" data-testid="division-shell">
      <SiteNavigation />
      {children}
    </div>
  );
}
