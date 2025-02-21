"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.section
            ref={ref}
            className="py-16 px-6 md:px-12 lg:px-24 max-w-6xl mx-auto text-white"
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
                        Hello, my name is Sigurd Arnsdorf Dam, and I am a passionate web developer with a background
                        in multimedia design and web development. I recently completed my bachelor’s top-up in web
                        development,
                        having previously earned a multimedia design degree in Nykøbing F. My strong interest in web
                        development
                        and databases has been a key driver in my career, as I enjoy building structured, scalable,
                        and user-friendly digital solutions.
                    </motion.p>

                    <motion.p className="text-gray-400 mt-4 leading-relaxed" variants={textVariants}>
                        I thrive on problem-solving and continuously challenge myself to learn new technologies and
                        refine my skills.
                        Whether it's frontend frameworks, backend development, or database optimization, I am always
                        eager to
                        explore innovative approaches to software development.
                    </motion.p>

                    {/* Teknologi liste */}
                    <motion.p className="mt-6 text-gray-400" variants={textVariants}>
                        Here are a few technology areas I've recently been engaged with:
                    </motion.p>
                    <motion.div className="flex flex-wrap text-gray-400 mt-4" variants={textVariants}>
                        <ul className="mr-6 unlist">
                            <li className="list">JavaScript</li>
                            <li className="list">React.js</li>
                            <li className="list">Next.js</li>
                            <li className="list">SASS</li>
                        </ul>
                        <ul>
                            <li className="list">WordPress Headless</li>
                            <li className="list">MySQL</li>
                            <li className="list">Google FireStore</li>
                            <li className="list">PHP</li>
                        </ul>
                    </motion.div>
                </motion.div>


                <motion.div
                    className="flex justify-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image
                        src="/images/about-profile.png"
                        alt="Sigurd Dam"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

            </div>
        </motion.section>
    );
}
