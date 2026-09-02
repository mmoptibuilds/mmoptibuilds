import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return (
    <main>
      <h1>MMOptiBuilds admin</h1>
      <p>Private owner workspace entry.</p>
    </main>
  );
}
