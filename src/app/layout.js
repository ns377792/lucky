import { Poppins } from "next/font/google";
import "./globals.css";
import { profile, SITE_URL } from "@/data/profile";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const title = `${profile.name} | ${profile.role}`;
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: profile.summary,
  openGraph: { title, description: profile.summary, type: "profile", images: ["/assets/ajruddin.jpg"] },
  twitter: { card: "summary", title, description: profile.summary },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: profile.email,
  telephone: profile.phone,
  address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  image: `${SITE_URL}/assets/ajruddin.jpg`,
  url: SITE_URL,
  knowsAbout: ["Visa Processing", "Back Office Operations", "Inventory Management", "Warehouse Management", "Logistics"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
