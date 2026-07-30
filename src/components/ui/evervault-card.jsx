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
                                randomString,
                            }) {
    const colorBackground = useMotionTemplate`
        radial-gradient(
            220px circle at ${mouseX}px ${mouseY}px,
            rgba(74, 222, 128, 0.65),
            rgba(34, 197, 94, 0.35) 35%,
            rgba(22, 101, 52, 0.18) 60%,
            transparent 80%
        )
    `;

    const maskImage = useMotionTemplate`
        radial-gradient(
            160px circle at ${mouseX}px ${mouseY}px,
            white,
            transparent
        )
    `;

    const maskStyle = {
        maskImage,
        WebkitMaskImage: maskImage,
    };

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
        >
            {/* Diskret grøn grundfarve */}
            <div
                className="
                    absolute inset-0
                    rounded-l
                    bg-gradient-to-br
                    from-green-950/30
                    via-transparent
                    to-neutral-900
                "
            />

            {/* Grøn farve, der følger musen */}
            <motion.div
                className="
                    absolute inset-0
                    rounded-l
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover/card:opacity-100
                "
                style={{
                    background: colorBackground,
                }}
            />

            {/* Kodeeffekten */}
            <motion.div
                className="
                    absolute inset-0
                    overflow-hidden
                    rounded-xl
                    opacity-0
                    mix-blend-overlay
                    transition-opacity
                    duration-500
                    group-hover/card:opacity-100
                "
                style={maskStyle}
            >
                <p
                    className="
                        absolute inset-0
                        break-words
                        whitespace-pre-wrap
                        font-mono
                        text-xs
                        font-bold
                        leading-4
                        text-green-50/80
                    "
                >
                    {randomString}
                </p>
            </motion.div>
        </div>
    );
}

const codeCharacters = [
    // JavaScript
    "const", "let", "var", "function", "return", "if", "else",
    "while", "for", "forEach", "for...of", "switch", "case",
    "break", "continue", "new", "this", "class", "extends",
    "super", "import", "export", "default", "async", "await",
    "try", "catch", "finally", "throw", "typeof", "instanceof",
    "true", "false", "null", "undefined", "NaN", "Infinity",
    "console.log", "console.error", "document", "window",
    "localStorage", "sessionStorage", "JSON.stringify",
    "JSON.parse", "Object.keys", "Object.values", "Object.entries",
    "Array.from", "Math.random", "setTimeout", "setInterval",
    "Promise", "resolve", "reject", "fetch", "map", "filter",
    "reduce", "find", "some", "every", "includes", "push",
    "pop", "slice", "spread", "destructuring",

    // React
    "React", "useState", "useEffect", "useRef", "useMemo",
    "useCallback", "useContext", "useReducer", "useId",
    "useTransition", "useLayoutEffect", "createContext",
    "createPortal", "lazy", "Suspense", "Fragment",
    "props", "children", "key", "ref", "state",
    "setState", "component", "context", "provider",
    "onClick", "onChange", "onSubmit", "onMouseMove",
    "onMouseEnter", "onMouseLeave", "preventDefault",
    "stopPropagation", "<>", "</>", "{children}", "{...props}",

    // Next.js
    "Next.js", "App Router", "page.js", "layout.js",
    "loading.js", "error.js", "not-found.js", "route.js",
    "use client", "use server", "metadata", "generateMetadata",
    "generateStaticParams", "dynamic", "revalidate",
    "redirect", "notFound", "cookies", "headers",
    "useRouter", "usePathname", "useSearchParams",
    "next/link", "next/image", "next/font",
    "Server Component", "Client Component",
    "Static Generation", "SSR", "SSG", "ISR",
    "Route Handler", "API Route",

    // TypeScript
    "string", "number", "boolean", "unknown", "never",
    "void", "any", "interface", "type", "enum",
    "readonly", "private", "protected", "public",
    "implements", "keyof", "typeof", "extends",
    "Partial", "Required", "Pick", "Omit", "Record",
    "Promise<T>", "Array<T>", "T[]", "as const",
    "generic<T>", "props: Props", "string | null",

    // HTML
    "<html>", "<head>", "<body>", "<main>", "<header>",
    "<footer>", "<nav>", "<section>", "<article>", "<aside>",
    "<div>", "<span>", "<p>", "<h1>", "<h2>", "<h3>",
    "<a>", "<button>", "<form>", "<input>", "<label>",
    "<textarea>", "<select>", "<option>", "<img>",
    "<video>", "<canvas>", "<svg>", "<path>",
    "className", "id", "href", "src", "alt", "title",
    "aria-label", "role", "tabIndex", "data-*",

    // CSS and Tailwind
    "display", "position", "relative", "absolute", "fixed",
    "sticky", "flex", "grid", "gap", "padding", "margin",
    "width", "height", "min-height", "max-width",
    "background", "color", "border", "border-radius",
    "box-shadow", "opacity", "transform", "transition",
    "animation", "z-index", "overflow", "object-fit",
    "align-items", "justify-content", "font-family",
    "font-size", "font-weight", "line-height",
    "@media", "@keyframes", ":hover", ":focus",
    "::before", "::after", "var(--color)",
    "flex-col", "items-center", "justify-center",
    "mx-auto", "max-w-6xl", "min-h-screen",
    "text-white", "text-green-400", "bg-neutral-950",
    "rounded-xl", "transition-all", "duration-500",
    "hover:scale-105", "group-hover:opacity-100",
    "md:grid-cols-2", "lg:grid-cols-3",

    // Framer Motion
    "motion", "AnimatePresence", "useInView",
    "useMotionValue", "useMotionTemplate", "useSpring",
    "useTransform", "initial", "animate", "exit",
    "transition", "variants", "whileHover", "whileTap",
    "layout", "opacity", "scale", "x", "y",
    "duration", "delay", "easeOut", "staggerChildren",

    // Node.js and APIs
    "Node.js", "npm", "npx", "package.json",
    "process.env", "module.exports", "require",
    "request", "response", "middleware", "router",
    "GET", "POST", "PUT", "PATCH", "DELETE",
    "status", "statusCode", "headers", "body",
    "params", "query", "endpoint", "REST API",
    "application/json", "Authorization", "Bearer",
    "accessToken", "refreshToken", "CORS",
    "rateLimit", "authentication", "validation",

    // SQL and databases
    "SELECT", "FROM", "WHERE", "INSERT INTO", "VALUES",
    "UPDATE", "SET", "DELETE", "CREATE DATABASE",
    "CREATE TABLE", "DROP TABLE", "ALTER TABLE",
    "ADD COLUMN", "PRIMARY KEY", "FOREIGN KEY",
    "UNIQUE", "NOT NULL", "DEFAULT", "AUTO_INCREMENT",
    "JOIN", "INNER JOIN", "LEFT JOIN", "RIGHT JOIN",
    "FULL JOIN", "ON", "GROUP BY", "ORDER BY",
    "HAVING", "LIMIT", "OFFSET", "DISTINCT",
    "COUNT", "AVG", "SUM", "MIN", "MAX",
    "AS", "IN", "NOT IN", "LIKE", "ILIKE",
    "EXISTS", "NOT EXISTS", "CASE", "WHEN",
    "THEN", "ELSE", "END", "CAST", "CONVERT",
    "UNION", "EXCEPT", "INTERSECT",
    "INDEX", "VIEW", "TRIGGER", "TRANSACTION",
    "COMMIT", "ROLLBACK", "NORMALIZE",
    "one-to-one", "one-to-many", "many-to-many",
    "MySQL", "PostgreSQL", "MongoDB", "SQLite",

    // PHP
    "<?php", "?>", "echo", "$_GET", "$_POST",
    "$_SESSION", "$_COOKIE", "$_SERVER", "$_FILES",
    "include", "require", "require_once", "include_once",
    "namespace", "use", "class", "public", "private",
    "protected", "function", "return", "static", "self",
    "parent", "new", "$this", "extends", "implements",
    "interface", "trait", "try", "catch", "finally",
    "throw", "global", "isset", "unset", "empty",
    "die", "exit", "print", "var_dump", "array",
    "foreach", "as", "while", "do", "switch",
    "case", "break", "continue", "default",
    "define", "const", "true", "false", "null",
    "mysqli", "PDO", "prepare", "execute",
    "fetch", "fetchAll", "bindParam",

    // WordPress
    "WordPress", "Headless WordPress", "WP REST API",
    "wp_query", "get_posts", "get_post_meta",
    "register_post_type", "register_rest_route",
    "add_action", "add_filter", "the_title",
    "the_content", "get_the_ID", "wp_enqueue_script",
    "wp_enqueue_style", "functions.php",
    "custom post type", "taxonomy", "shortcode",
    "wp-json", "acf", "nonce",

    // Python
    "def", "return", "if", "elif", "else",
    "for", "while", "in", "not", "and", "or",
    "True", "False", "None", "class", "self",
    "import", "from", "as", "try", "except",
    "finally", "raise", "with", "lambda",
    "list", "dict", "tuple", "set",
    "range", "len", "enumerate", "zip",
    "print", "input", "FastAPI", "Flask",
    "Django", "uvicorn", "pydantic",

    // Git and tooling
    "git init", "git add", "git commit", "git push",
    "git pull", "git clone", "git branch",
    "git checkout", "git merge", "git status",
    "git log", "git diff", "origin", "main",
    "feature branch", "pull request", "merge conflict",
    ".gitignore", "README.md", "npm install",
    "npm run dev", "npm run build", "npm start",
    "eslint", "prettier", "webpack", "vite",
    "localhost:3000", ".env.local",

    "All work and no play makes Sigurd a dull boy",

    // Generelle kodebegreber
    "frontend", "backend", "fullstack", "database",
    "algorithm", "data structure", "component",
    "function", "variable", "parameter", "argument",
    "object", "array", "string", "boolean",
    "iteration", "recursion", "inheritance",
    "encapsulation", "abstraction", "polymorphism",
    "dependency", "repository", "deployment",
    "production", "development", "scalable",
    "responsive", "accessible", "performance",
    "refactor", "debug", "build", "deploy",
    "clean code", "SOLID", "DRY", "KISS",

    // Tegn og operatorer
    "{", "}", "[", "]", "(", ")", "<", ">",
    "\"", "'", "`", ":", "::", ";", ",", ".",
    "...", "=>", "?", "??", "?.", "&&", "||",
    "!", "==", "===", "!=", "!==", "+", "-",
    "*", "/", "%", "**", "&", "|", "^", "~",
    "<<", ">>", ">>>", "=", "+=", "-=", "*=",
    "/=", "%=", "++", "--", "#", "@", "$"
];
export function generateRandomString(length) {
    return Array.from(
        { length },
        () =>
            codeCharacters[
                Math.floor(Math.random() * codeCharacters.length)
                ]
    ).join(" ");
}



export function Icon({ className, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={className}
            aria-hidden="true"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
            />
        </svg>
    );
}
