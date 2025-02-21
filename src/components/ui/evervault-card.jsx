"use client";
import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/lib/utils";


export const EvervaultCard = ({
  text,
  className,
    children

}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY
  }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    (<div
      className={cn(
        "p-0.5 rounded-1xl aspect-square  flex items-center justify-center w-full h-full relative",
        className
      )}>
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full relative overflow-hidden flex items-center justify-center h-full">
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />

        <div className="relative flex flex-col justify-center text-white z-10">
          {children}
        </div>
      </div>
    </div>)
  );
};

export function CardPattern({
  mouseX,
  mouseY,
  randomString
}) {
  let maskImage = useMotionTemplate`radial-gradient(140px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

    return (
        <div className="pointer-events-none">
            <div
                className="absolute inset-0 rounded-1xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-70"
            ></div>
            <motion.div
                className="absolute inset-0 rounded-1xl bg-gradient-to-r from-blue-950 via-blue to-blue-950 opacity-0 group-hover/card:opacity-100 backdrop-blur-2xl transition duration-700"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-1xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
                style={style}
            >
                <p
                    className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-700"
                >
                    {randomString}
                </p>
            </motion.div>
        </div>
    );


}

const codeCharacters = [
    // JavaScript keywords
    "const", "let", "var", "function", "return", "if", "else", "while", "for", "switch",
    "case", "break", "continue", "new", "this", "class", "extends", "super", "import",
    "export", "default", "require", "module", "async", "await", "try", "catch", "finally",
    "throw", "typeof", "instanceof", "true", "false", "null", "undefined", "NaN", "Infinity",
    "console.log", "document", "window", "Math", "{", "}", "[", "]", "(", ")", "<", ">",
    "\"", "'", ":", "+", "-", "*", "/", "%", "**", "&", "|", "^", "~", "<<", ">>", ">>>",
    "=", "+=", "-=", "*=", "/=", "%=", "**=", ";", ",", ".", "#", "@",

    // SQL keywords
    "SELECT", "FROM", "WHERE", "INSERT INTO", "VALUES", "UPDATE", "SET", "DELETE",
    "CREATE TABLE", "DROP TABLE", "ALTER TABLE", "ADD COLUMN", "PRIMARY KEY", "FOREIGN KEY",
    "JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN", "ON", "GROUP BY",
    "ORDER BY", "HAVING", "LIMIT", "OFFSET", "DISTINCT", "COUNT", "AVG", "SUM",
    "MIN", "MAX", "AS", "IN", "NOT IN", "LIKE", "ILIKE", "EXISTS", "NOT EXISTS",
    "CASE", "WHEN", "THEN", "END", "CAST", "CONVERT", "UNION", "EXCEPT", "INTERSECT",

    // PHP keywords
    "<?php", "echo", "$_GET", "$_POST", "$_SESSION", "$_COOKIE", "$_SERVER", "$_FILES",
    "include", "require", "require_once", "include_once", "namespace", "use", "class",
    "public", "private", "protected", "function", "return", "static", "self", "new", "this",
    "extends", "implements", "interface", "trait", "try", "catch", "finally", "throw",
    "global", "isset", "unset", "empty", "die", "exit", "print", "var_dump", "array",
    "foreach", "as", "while", "do", "switch", "case", "break", "continue", "default",
    "define", "const", "true", "false", "null"
];

export const generateRandomString = (length) => {
    let result = "";
    for (let i = 0; i < length; i++) {
        result += codeCharacters[Math.floor(Math.random() * codeCharacters.length)] + " ";
    }
    return result.trim();
};




export const Icon = ({
  className,
  ...rest
}) => {
  return (
    (<svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      crossOrigin="anonymous"
      stroke="currentColor"
      className={className}
      {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>)
  );
};
