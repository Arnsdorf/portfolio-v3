"use client";

import { useState, useEffect, useRef } from "react";
import { useFetchCases } from "@/hooks/useapi";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // denne virker i nyere react-icons versioner
import { Twirl as Hamburger } from 'hamburger-react';


export default function Header() {
    const [isMounted, setIsMounted] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const { cases, loading, error } = useFetchCases();
    const dropdownRef = useRef(null);

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

    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!isMounted) return null;

    return (
        <nav
            className={`fixed top-0 w-full transition-all duration-300 ease-in-out z-50 ${
                isScrolled ? "bg-gray-950 opacity-95 shadow-lg py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4 relative z-50">
                {/* Logo */}
                <Link href="/page" className="text-2xl font-normal text-green-500">
                    <span className="text-white">&#123;</span>sigurdDam<span className="text-white">&#125;</span>
                </Link>

                {/* Burger Menu Button */}
                <div className="md:hidden z-50">
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} direction="right" color="#fff"/>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/" className="text-white hover:text-gray-300 transition">Home</Link></li>
                    <li><Link href="/#about" className="text-white hover:text-gray-300 transition">About</Link></li>
                    <li><Link href="/#cases" className="text-white hover:text-gray-300 transition">Cases</Link></li>
                    <li><Link href="/#contact" className="text-white hover:text-gray-300 transition">Contact</Link></li>
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://github.com/Arnsdorf" target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-gray-300 transition">
                        <FaGithub size={24}/>
                    </a>
                    <a href="https://x.com/ArnsdorfS" target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-gray-300 transition">
                        <FaXTwitter size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/sigurd-dam-124382126" target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-gray-300 transition">
                        <FaLinkedin size={24}/>
                    </a>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 z-40 md:hidden">
                <Link href="/" className="text-xl hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/#about" className="text-xl hover:text-gray-300" onClick={() => setMenuOpen(false)}>About</Link>

                    <div className="relative" ref={dropdownRef}>
                        <button onClick={() => setShowDropdown(!showDropdown)} className="text-xl hover:text-gray-300 flex items-center gap-1">
                            Cases
                        </button>
                        {showDropdown && (
                            <ul className="bg-gray-800 p-2 rounded-md shadow-lg w-48 mt-2 animate-fade-in text-center space-y-2">
                                {loading && <li className="text-gray-400">Loading...</li>}
                                {error && <li className="text-red-400">Error loading cases</li>}
                                {cases && cases.map((project) => (
                                    <li key={project.id}>
                                        <Link
                                            href={`/cases/${project.slug}`}
                                            className="block px-4 py-2 hover:bg-gray-700 rounded"
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setShowDropdown(false);
                                            }}
                                        >
                                            {project.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <Link href="/contact" className="text-xl hover:text-gray-300" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    );
}
