import Link from "next/link";

const publicLinks = [
  { href: "/", label: "Gateway" },
  { href: "/systems", label: "Systems" },
  { href: "/studio", label: "Studio" },
] as const;

export default function SiteNavigation() {
  return (
    <nav aria-label="Public division navigation">
      <ul>
        {publicLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
