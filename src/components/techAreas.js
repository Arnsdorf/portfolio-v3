"use client";

import React, { useEffect, useState, useRef } from "react";
import { fetchTechnologies } from "@/api/service"; // juster stien!
import { motion, useInView } from "framer-motion";

export default function TechAreas() {
    const [techs, setTechs] = useState([]);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        const loadTechs = async () => {
            const data = await fetchTechnologies();
            const sorted = data.sort((a, b) => a.order - b.order);
            setTechs(sorted);
        };
        loadTechs();
    }, []);


    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <motion.section
            id="technologies"
            ref={ref}
            className="py-28 my-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white"

            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div className="mb-12" variants={itemVariants}>
                <h2 className="text-5xl font-bold">
                    <span className="text-green-400 italic">Technology</span> Areas I've Recently Worked With.
                </h2>
                <p className="text-gray-400 mt-4 text-left max-w-2xl">
                I enjoy building everything from responsive user interfaces to backend functionality and APIs.
                Here are some of the technologies I work with the most.
                </p>
            </motion.div>

            <motion.div
                className="flex flex-wrap md:justify-start justify-center  gap-6"
                variants={containerVariants}
            >
                {techs.map((tech) => (
                    <motion.div
                        key={tech.id}
                        className="w-[100px] h-[100px] bg-[#0E0C23] p-3 rounded-lg flex flex-col items-center justify-center"
                        variants={itemVariants}
                    >
                        <img
                            src={tech.icon}
                            alt={tech.title}
                            className="w-[50px] h-[50px] object-contain"
                        />

                    </motion.div>

                ))}
            </motion.div>


        </motion.section>
    );
}
