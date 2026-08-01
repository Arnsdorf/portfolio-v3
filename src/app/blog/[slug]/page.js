import { notFound } from "next/navigation";
import { fetchBlog, fetchBlogPost } from "@/api/service";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
    const posts = await fetchBlog();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function Page({ params }) {
    const { slug } = await params;
    const post = await fetchBlogPost(slug);

    if (!post) {
        notFound();
    }


    let formattedDate;
    return (

        <main className="min-h-screen bg-neutral-950 px-4 pb-20 pt-32 text-white">
            <article className="mx-auto max-w-3xl">
                <Breadcrumbs items={[
                    {
                        label: "Home",
                        href: "/",
                    },
                    {
                        label: "Blog",
                        href: "/blog",
                    },
                    {
                        label: post.title,
                    },
                ]}
                />

                <header className="mt-8">
                    <h1 className="text-4xl font-bold  sm:text-5xl">
                        {post.title}
                    </h1>


                </header>

                {post.featuredImage?.url && (
                    <img
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || post.title}
                        className="mt-10 aspect-video w-full rounded-2xl object-cover"
                    />

                )}
                <p className="mt-6 text-sm text-gray-500">
                    {new Intl.DateTimeFormat("da-DK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    }).format(new Date(post.date))}
                </p>
                <section
                    className="mt-12 border-t border-white/10 pt-10"
                    aria-label="Artikelindhold"
                >
                    <div
                        className="prose prose-lg prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: post.content ?? "",
                        }}
                    />
                </section>
            </article>
        </main>
    );
}