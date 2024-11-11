import "@/styles/globals.css";
import Script from "next/script";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
