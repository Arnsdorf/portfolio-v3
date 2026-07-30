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
                isScrolled ? "bg-black/70 backdrop-blur-lg opacity-95 shadow-lg py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center p-4 relative z-50">
                {/* Logo */}
                <Link href="/" className="text-2xl font-normal text-green-500">
                    <span className="text-white">&#123;</span>sigurdDam<span className="text-white">&#125;</span>

                </Link>

                {/* Burger Menu Button */}
                <div className="md:hidden z-50">
                    <Hamburger toggled={menuOpen} toggle={setMenuOpen} direction="right" color="#fff"/>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/#home" className="text-white hover:text-gray-300 transition">Home</Link></li>
                    <li><Link href="/blog" className="text-white hover:text-gray-300 transition">Blog</Link></li>
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

            {menuOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-lg text-white z-40 md:hidden overflow-hidden">

                    {/* Menu content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 text-xl">
                        <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Home</Link>
                        <Link href="/#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">About</Link>
                        <Link href="/#cases" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Cases</Link>
                        <Link href="/#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-300">Contact</Link>
                    </div>
                </div>
            )}






        </nav>
    );
}
