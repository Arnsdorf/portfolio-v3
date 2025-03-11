"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ContactMe() {
    // Reference til sektionen
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true }); // 'once: true' betyder, at animationen kun kører én gang

    return (
        <footer id="contact" ref={ref} className="mt-24 mb-24">
            <div className="container mx-auto mt-5 px-6">
                <div className="text-center">
                    {/* Animeret overskrift */}
                    <motion.h2
                        className="text-white mt-5 text-5xl font-semibold"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        Let’s Get <span className="italic font-bold text-green-400">In Touch</span>.
                    </motion.h2>

                    {/* Animeret tekst */}
                    <motion.p
                        className="p-4 pt-2 mt-4 pb-2 text-gray-300 max-w-xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Thank you for stopping by! I am actively seeking new opportunities and collaborations.
                        If you have a project in mind, a question, or just want to say hello, please don't
                        hesitate to reach out via email or social media. I'm always available and eager to connect.
                    </motion.p>

                    {/* Animeret knap */}
                    <div className="flex justify-center mt-5">
                        <motion.a
                            href="mailto:damsigurd@hotmail.com"
                            aria-label="contact"
                            className="inline-block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <button className="flex items-center gap-2 hover:bg-opacity-80 text-black font-medium px-6 py-3 rounded-lg bg-green-500 transition-all duration-300">
                                Let’s Talk
                            </button>
                        </motion.a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
