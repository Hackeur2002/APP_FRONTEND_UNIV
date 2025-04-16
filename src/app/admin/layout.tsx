import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/admin/Navbar";
import { Sidebar } from "@/components/admin/Sidebar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Backoffice | Plateforme de délivrance des actes académiques", //Dashboard
  description: "Plateforme de demande des actes académiques sécurisés à l'Université de Parakou",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <main className="flex-1 p-6 bg-gray-100 overflow-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}