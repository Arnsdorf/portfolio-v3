import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import AboutMe from "@/components/about-me.js";
import ProjectCard from "@/components/project-card.js";
import ContactMe from "@/components/contact-me";

// Google Fonts konfiguration
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});



const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// SEO Metadata
export const metadata = {
    title: "sigurdDam",
    description: "Mit personlige portfolio bygget med Next.js og Tailwind CSS.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="da">
        <head>
            <title>Sigurd Dam | Full Stack Developer</title>
            <meta name="description"
                  content="Sigurd Dam's portfolio showcasing projects, skills, and experience in web development with Next.js, React.js, and more."/>
            <meta name="keywords"
                  content="Sigurd Dam, Web Developer, Full Stack Developer, Next.js, React.js, Tailwind CSS, PHP"/>
            <meta name="author" content="Sigurd Dam"/>
            <meta name="robots" content="index, follow"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap"
                rel="stylesheet" crossOrigin="anonymous"/>

        </head>
        <body className="bg-gray-100 text-gray-900">
        <Header/>
        <main className="container mx-auto p-4">{children}</main>
        <AboutMe/>
        <ProjectCard
            title="Build Your Own Computer"
            description="Build your own PC, but in a simpler and more intuitive way. Get guided through the process step by step, ensuring compatibility and performance without the hassle."
            technologies={["WordPress Headless", "PHP", "React.js"]}
        />
        <ContactMe/>

        </body>
        </html>
    );
}
