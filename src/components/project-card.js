"use client";

import { EvervaultCard } from "@/components/ui/evervault-card";
import { Globe, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProjectGrid() {
    // Reference til sektionen
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2, // Forsinkelse mellem hvert kort
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.section
            ref={ref}
            className="py-16 my-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-white"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {/* Section Title */}
            <motion.h2
                className="text-5xl md:text-left text-center font-bold mb-10"
                variants={cardVariants}
            >
                Some <span className="text-green-400 italic">Cases</span> I’ve Worked On.
            </motion.h2>

            {/* Grid Layout */}
            <motion.div
                className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                variants={containerVariants}
            >
                {/* Project Cards */}
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <EvervaultCard className="w-[350px] justify-center hover:-translate-y-2 transition-transform duration-300 flex max-w-s bg-[#0E0C23] rounded-l">
                            <div className="p-4">
                                <div className="flex items-center justify-between">
                                    <Folder className="w-12 h-12 text-green-400" />
                                    <div className="flex space-x-2 mx-3">
                                        <Globe className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition"/>
                                        <FaGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition"/>
                                    </div>
                                </div>

                                <h2 className="mt-5 text-xl font-semibold text-white text-left">
                                    Build Your Own Computer
                                </h2>

                                <p className="mt-2 text-gray-300 font-light text-left">
                                    Build your own PC, but in a simpler and more intuitive way. Get guided
                                    through the process step by step, ensuring compatibility and
                                    performance without the hassle.
                                </p>

                                <div className="mt-4 text-s text-gray-400 font-bold text-left">
                                    WordPress Headless • PHP • React.js
                                </div>
                            </div>
                        </EvervaultCard>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
