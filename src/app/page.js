"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function Home() {
    // Reference til sektionen
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <main ref={ref} className="relative flex flex-col items-center justify-center h-screen text-white px-4">
            {/* Hero Section */}
            <motion.div
                className="text-center max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Animeret Overskrift */}
                <motion.h1
                    className="text-4xl sm:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Full Stack Developer – Crafting{" "}
                    <span className="relative italic text-green-400">
                        Scalable & Future-Ready
                    </span>{" "}
                    Web{" "}
                    <span className="relative text-white font-bold">
                        Solutions.
                    </span>
                </motion.h1>

                {/* Animeret Beskrivelse */}
                <motion.p
                    className="mt-6 text-lg text-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                >
                    Hey there! I'm <span className="text-green-400 font-medium">Sigurd Dam</span>. Web developer focused on building scalable, high-performance solutions with React, WordPress Headless, and other modern web technologies.
                </motion.p>

                {/* Animeret CTA Button */}
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                >
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 text-lg bg-green-500 hover:bg-green-600 text-black font-medium rounded-md transition"
                        >
                            Let's talk
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </main>
    );
}
