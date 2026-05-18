import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Timezone Conflict Finder",
  description: "Find optimal meeting times across global teams. Analyze timezones, work preferences, and availability to schedule without conflicts."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76355a28-aaf5-4866-b289-39dbfd8b410e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
