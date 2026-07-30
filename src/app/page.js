"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import AboutMe from "@/components/aboutMe";
import TechAreas from "@/components/techAreas";
import ProjectCard from "@/components/projectCard";
import ContactMe from "@/components/contactMe";

export default function Home() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <>
            {/* Hero Section */}
            <section
                ref={ref}
                className="relative flex min-h-screen bg-neutral-950 flex-col items-center justify-center px-4 text-white"
            >
                {/* Diskret grid */}
                <div
                    aria-hidden="true"
                    className="
                    pointer-events-none
                    absolute inset-0
                    bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
                    bg-[size:48px_48px]
                    [mask-image:linear-gradient(to_bottom,white,transparent_90%)]
        "
                />



                <motion.div
                    className="relative z-10 max-w-4xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl font-bold leading-tight sm:text-6xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Building{" "}
                        <span className="relative italic text-green-400">
                            Modern Web Applications
                        </span>{" "}
                        from{" "}
                        <span className="relative font-bold text-white">
                            Frontend to Backend.
                        </span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-lg text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            ease: "easeOut",
                        }}
                    >
                        Hey there! I&apos;m{" "}
                        <span className="font-medium text-green-400">
                            Sigurd Dam
                        </span>
                        . Web developer focused on building scalable,
                        high-performance solutions with React, WordPress
                        Headless, and other modern web technologies.
                    </motion.p>

                    <motion.div
                        className="mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            delay: 0.4,
                            duration: 1,
                            ease: "easeOut",
                        }}
                    >
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <motion.a
                                href="/files/CVSigurdDam.pdf"
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block rounded-md bg-white px-6 py-3 text-lg font-medium text-black"
                            >
                                Get My CV
                            </motion.a>

                            <motion.a
                                href="mailto:damsigurd@hotmail.com"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block rounded-md bg-green-500 px-6 py-3 text-lg font-medium text-black transition hover:bg-green-600"
                            >
                                Let&apos;s Talk
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Resten af one-page-forsiden */}
            <AboutMe />
            <TechAreas />
            <ProjectCard />
            <ContactMe />
        </>
    );
}