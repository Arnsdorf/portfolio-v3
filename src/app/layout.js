import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const sourceSans = Source_Sans_3({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const metadata = {
    title: "Sigurd Dam | Full Stack Developer",
    description:
        "Sigurd Dam's portfolio showcasing projects, skills, and experience in web development.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="da" className={'bg-neutral-950'}>
        <body className="min-h-screen bg-neutral-950 text-neutral-50 antialiased">
        <div
            aria-hidden="true"
            className="
            pointer-events-none
            fixed inset-0 -z-10
            bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_45%)]
        "
        />

        <Header />

        <main>{children}</main>
        </body>
        </html>
    );
}