"use client";

import { useRef } from "react";
import { useFetchCases } from "@/hooks/useapi"; // Importér custom hook
import { EvervaultCard } from "@/components/ui/evervault-card";
import { Globe, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

export default function ProjectGrid() {
    // Brug hook til at hente cases fra WordPress API
    const { cases, loading, error } = useFetchCases();

    // Reference til sektionen
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    function formatTechnologies(technologies) {
        if (!technologies || !Array.isArray(technologies)) return "No technologies listed";

        return technologies.join(" • "); // Tilføjer bulletpoint mellem hvert ord
    }


    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
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
                id="cases"
                className="text-5xl md:text-left text-center font-bold mb-10"
                variants={cardVariants}
            >
                Some <span className="text-green-400 italic">Cases</span> I’ve Worked On.
            </motion.h2>

            {/* Error handling */}
            {error && <p className="text-red-500">{error}</p>}

            {/* Loading State */}
            {loading ? (
                <p className="text-gray-400">Loading projects...</p>
            ) : (
                <motion.div

                    className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4"
                    variants={containerVariants}
                >
                    {/* Project Cards */}
                    {cases.length > 0 ? (
                        cases.map((project) => (
                            <motion.div key={project.id} variants={cardVariants}>
                                <EvervaultCard className="w-[350px] justify-center hover:-translate-y-2 transition-transform duration-300 flex max-w-s bg-[#0E0C23] rounded-l">
                                    <div className="p-4">
                                        <div className="flex items-center justify-between">
                                            <Folder className="w-12 h-12 text-green-400" />
                                            <div className="flex space-x-2 mx-3">
                                                {project.meta.case_url && (
                                                    <a href={project.meta.case_url} target="_blank" rel="noopener noreferrer">
                                                        <Globe className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition"/>
                                                    </a>
                                                )}
                                                {project.meta.github_url && (
                                                    <a href={project.meta.github_url} target="_blank" rel="noopener noreferrer">
                                                        <FaGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition"/>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <h2 className="mt-5 text-xl font-semibold text-white text-left">
                                            {project.title}
                                        </h2>

                                        <p className="mt-2 text-gray-300 font-light text-left">
                                            {project.description}
                                        </p>

                                        <div className="mt-4 text-s text-gray-500 font-bold text-left">
                                            {formatTechnologies(project.meta.technologies)}
                                        </div>
                                    </div>
                                </EvervaultCard>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-gray-400">No projects found.</p>
                    )}
                </motion.div>
            )}
        </motion.section>
    );
}
