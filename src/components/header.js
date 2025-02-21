"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaGithub, FaXTwitter, FaLinkedin, FaBars} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


export default function Header() {
    const [isMounted, setIsMounted] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Starter med en statisk værdi
    useEffect(() => {
        setMenuOpen(window.innerWidth > 768);
    }, []);

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

    if (!isMounted) {
        return null;
    }

    return (
        <nav className="bg-transparent text-white pt-3">
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
                    <li><Link href="hecomefromsporting.com" className="hover:text-gray-300 transition">Home</Link></li>
                    <li className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="hover:text-gray-300 transition flex items-center gap-1"
                        >
                            Cases
                        </button>
                        {showDropdown && (
                            <ul className="absolute left-0 mt-2 bg-gray-800 p-2 rounded-md shadow-lg w-40 animate-fade-in">
                                <li><Link href="/cases/buildmate" className="block px-4 py-2 hover:bg-gray-700 rounded">BuildMate</Link></li>
                                <li><Link href="/cases/online-store" className="block px-4 py-2 hover:bg-gray-700 rounded">Simpel Online Butik</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
                    <li><Link href="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                </ul>

                {/* Mobile Menu */}
                {menuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 py-6 md:hidden">
                        <li><Link href="/" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li className="relative">
                            <button onClick={() => setShowDropdown(!showDropdown)} className="hover:text-gray-300 transition flex items-center gap-1">
                                Cases
                            </button>
                            {showDropdown && (
                                <ul className="bg-gray-800 p-2 rounded-md shadow-lg w-40 animate-fade-in text-center">
                                    <li><Link href="/cases/buildmate" className="block px-4 py-2 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>BuildMate</Link></li>
                                    <li><Link href="/cases/online-store" className="block px-4 py-2 hover:bg-gray-700 rounded" onClick={() => setMenuOpen(false)}>Simpel Online Butik</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link href="/about" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>About</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-300 transition" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
                )}

                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaXTwitter size={24} />
                    </a>
                    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
