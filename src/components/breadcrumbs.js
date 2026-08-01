import Link from "next/link";

export default function Breadcrumbs({ items }) {
    return (
        <nav aria-label="breadcrumbs route">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-400">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li
                            key={item.href ?? item.label}
                            className="flex items-center gap-2"
                        >
                            {isLast || !item.href ? (
                                <span
                                    className="max-w-64 truncate text-green-400"
                                    aria-current={isLast ? "page" : undefined}
                                >
                                    {item.label}
                                </span>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="transition-colors hover:text-green-400"
                                >
                                    {item.label}
                                </Link>
                            )}

                            {!isLast && (
                                <span
                                    className="text-neutral-600"
                                    aria-hidden="true"
                                >
                                    /
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}