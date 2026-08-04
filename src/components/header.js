"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Twirl as Hamburger } from "hamburger-react";

const navigationItems = [
    {
        label: "Home",
        href: "/#home",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "About",
        href: "/#about",
    },
    {
        label: "Cases",
        href: "/#cases",
    },
    {
        label: "Contact",
        href: "/#contact",
    },
];

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com/Arnsdorf",
        icon: FaGithub,
    },
    {
        label: "X",
        href: "https://x.com/ArnsdorfS",
        icon: FaXTwitter,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sigurd-dam-124382126",
        icon: FaLinkedin,
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 50);
        }

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function isCurrentPage(href) {
        if (href === "/blog") {
            return pathname.startsWith("/blog");
        }

        return false;
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header
            className={`
                fixed top-0 z-50 w-full
                transition-all duration-300 ease-in-out
                ${
                isScrolled
                    ? "bg-black/70 py-2 shadow-lg backdrop-blur-lg"
                    : "bg-transparent py-4"
            }
            `}
        >
            <nav
                className="container relative z-50 mx-auto flex items-center justify-between p-4"
                aria-label="Primary navigation"
            >
                <Link
                    href="/"
                    className="text-2xl font-normal text-green-500"
                    aria-label="Sigurd Dam – Home"
                >
                    <span aria-hidden="true">
                        <span className="text-white">{"{"}</span>
                        sigurdDam
                        <span className="text-white">{"}"}</span>
                    </span>
                </Link>

                <ul className="hidden items-center gap-6 md:flex">
                    {navigationItems.map((item) => {
                        const isCurrent = isCurrentPage(item.href);

                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    aria-current={
                                        isCurrent ? "page" : undefined
                                    }
                                    className={`
                                        transition-colors
                                        ${
                                        isCurrent
                                            ? "text-green-400"
                                            : "text-white hover:text-gray-300"
                                    }
                                    `}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <ul
                    className="hidden items-center gap-4 md:flex"
                    aria-label="Social profiles"
                >
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <li key={social.href}>
                                <a
                                    href={social.href}
                                    target="_blank"
                                    rel="me noopener noreferrer"
                                    aria-label={`Visit my ${social.label} profile`}
                                    className="block text-white transition-colors hover:text-green-400"
                                >
                                    <Icon
                                        size={24}
                                        aria-hidden="true"
                                        focusable="false"
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <div className="z-50 md:hidden">
                    <Hamburger
                        toggled={menuOpen}
                        toggle={setMenuOpen}
                        direction="right"
                        color="#ffffff"
                        label={
                            menuOpen
                                ? "Close navigation"
                                : "Open navigation"
                        }
                    />
                </div>
            </nav>

            {menuOpen && (
                <nav
                    id="mobile-navigation"
                    className="
                        fixed inset-0 z-40
                        flex items-center justify-center
                        bg-black/90 text-white backdrop-blur-lg
                        md:hidden
                    "
                    aria-label="Mobile navigation"
                >
                    <ul className="flex flex-col items-center gap-6 text-xl">
                        {navigationItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="transition-colors hover:text-green-400"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}