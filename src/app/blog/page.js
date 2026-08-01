import Link from "next/link";
import { fetchBlog } from "@/api/service";

export const metadata = {
    title: "Blog | Sigurd Dam",
    description:
        "Artikler om webudvikling, Next.js, backend, databaser og teknologi.",
};

export default async function BlogPage() {
    const posts = await fetchBlog();

    return (
        <div className="min-h-screen bg-neutral-950">
            <section className="border-b border-white/10 px-4 pb-16 pt-32">
                <div className="mx-auto max-w-6xl">
                    <span className="text-sm font-semibold uppercase tracking-widest text-green-400">
                        Blog
                    </span>

                    <h1 className="mt-4 max-w-5xl text-4xl font-bold text-white sm:text-6xl">
                        Tanker og diskussioner om kode, teknologi og det, jeg lærer undervejs.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        Guides, projekter og erfaringer med moderne
                        webudvikling, backend og databaser.
                    </p>
                </div>
            </section>

            <section className="px-4 py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-10 flex items-end justify-between">
                        <div>
                            <p className="text-sm font-medium text-green-400">
                                Seneste indlæg
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-white">
                                Fra bloggen
                            </h2>
                        </div>

                        <p className="hidden text-gray-500 sm:block">
                            {posts.length} artikler
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={post.id}
                                className="group"
                            >
                                <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:-translate-y-1 group-hover:border-green-400/40">
                                    {post.featuredImage?.url ? (
                                        <img
                                            src={post.featuredImage.url}
                                            alt={post.featuredImage.alt || post.title}
                                            className="aspect-video z-10 w-full object-cover"
                                        />
                                    ) : (
                                        <div className="aspect-video bg-gradient-to-br from-green-400/20 to-neutral-900" />
                                    )}

                                    <div className="p-6">
                                        <span className="text-sm text-green-400">
                                            {post.category}
                                        </span>

                                        <h2 className="mt-3 text-xl font-bold text-white transition group-hover:text-green-400">
                                            {post.title}
                                        </h2>

                                        <p className="mt-3 line-clamp-3 leading-6 text-gray-400">
                                            {post.excerpt}
                                        </p>

                                        <p className="mt-6 text-sm text-gray-500">
                                            {new Intl.DateTimeFormat("da-DK", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            }).format(new Date(post.date))}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}