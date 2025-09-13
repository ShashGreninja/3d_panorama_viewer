import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Street View Demo",
  description: "Next.js + Google Maps Street View",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* Google Maps API script, loads once globally */}
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
