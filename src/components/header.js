"use client";

import { useState, useEffect, useRef } from "react";
import { useFetchCases } from "@/hooks/useapi";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export default function Header() {
    const [isMounted, setIsMounted] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    const { cases, loading, error } = useFetchCases();
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuOpen(window.innerWidth > 768);
    }, []);

    useEffect(() => {
        setIsMounted(true);

        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Scroll event listener
    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
            setIsScrolled(window.scrollY > 50); // Aktiver animation efter 50px scroll
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <nav
            className={`fixed top-0 w-full transition-all duration-300 ease-in-out z-50 ${
                isScrolled ? "bg-gray-950 opacity-95 shadow-lg py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="https://github.com/Arnsdorf" className="text-2xl font-normal text-green-500">
                    <span className="text-white">&#123;</span>sigurdDam<span className="text-white">&#125;</span>
                </Link>

                {/* Burger Menu Button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/" className="text-white hover:text-gray-300 transition z-10">Home</Link></li>
                    <li><Link href="/#about" className="text-white hover:text-gray-300 transition z-10">About</Link></li>
                    <li><Link href="/#cases" className="text-white hover:text-gray-300 transition z-10">Cases</Link></li>
                    <li><Link href="/#contact" className="text-white hover:text-gray-300 transition z-10">Contact</Link></li>
                </ul>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
                        <li><Link href="/" className="hover:text-gray-300 text-white transition" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className="relative">
                            <button onClick={() => setShowDropdown(!showDropdown)} className="hover:text-gray-300 transition flex items-center gap-1">
                                Cases
                            </button>
                            {showDropdown && (
                                <ul className="bg-gray-800 p-2 rounded-md shadow-lg w-40 animate-fade-in text-center">
                                    {loading && <li className="text-gray-400">Loading...</li>}
                                    {error && <li className="text-red-400">Error loading cases</li>}
                                    {cases && cases.map((project) => (
                                        <li key={project.id}>
                                            <Link href={`/cases/${project.slug}`} className="block px-4 py-2 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>
                                                {project.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li><Link href="/about" className="text-white transition" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link href="/contact" className="text-white transition" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                )}

                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
                        <FaXTwitter size={24} />
                    </a>
                    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
