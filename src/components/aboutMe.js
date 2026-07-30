"use client";

import Link from "next/link";
import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    // Animation Variants
    const containerVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2, // Forsinkelse mellem hvert element
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: {opacity: 0, y: 30},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: "easeOut"}}
    };

    const imageVariants = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.8, ease: "easeOut"}}
    };

    return (
        <motion.section
            id="about"
            ref={ref}
            className="py-16 my-16 px-6 md:px-12 lg:px-24  max-w-7xl mx-auto text-white"

            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Tekst Sektion */}
                <motion.div className="text-left" variants={textVariants}>
                    <motion.h2 className="text-5xl mb-5 font-bold" variants={textVariants}>
                        A Little About <span className="text-green-400 italic">Myself</span>.
                    </motion.h2>
                    <motion.p className="text-gray-400 leading-relaxed" variants={textVariants}>
                        Hi, I’m Sigurd — a web developer with a professional bachelor’s degree in Web Development and a
                        background in Multimedia Design. I enjoy building structured and user-friendly applications,
                        with a particular interest in backend development, databases, and the systems that make
                        everything work behind the scenes.

                        I’m naturally curious and enjoy turning ideas and complex problems into practical digital
                        solutions. I’m always exploring new technologies and looking for ways to improve both my code
                        and the way I approach software development.
                    </motion.p>

                    <motion.p className="text-gray-400 mt-4 leading-relaxed" variants={textVariants}>
                        In September 2026, I’ll begin my master’s degree in Computer Science at Roskilde University,
                        where I look forward to expanding my knowledge beyond web development and diving deeper into
                        software engineering, data, and complex IT systems.
                    </motion.p>

                </motion.div>


                <motion.div
                    className="flex justify-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src="/images/about-profile.svg"
                        alt="Sigurd Dam"
                        width="400"
                        height="400"
                        className="rounded-lg shadow-lg"
                    />

                </motion.div>

            </div>
        </motion.section>
    );
}
