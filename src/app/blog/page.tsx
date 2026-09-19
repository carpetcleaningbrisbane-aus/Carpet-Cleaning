// src/app/blog/page.tsx
import Link from 'next/link';
import NextImage from 'next/image';
import { Metadata } from 'next';
import { getAuthorizedBlogPosts } from '@/data/blogs';

export const metadata: Metadata = {
  title: 'Carpet Care Blog & Advice | Carpet Cleaning Brisbane',
  description:
    'Expert carpet care tips, maintenance advice, & cleaning guides for Brisbane homes. Learn how to protect your carpets from humidity & dirt!',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Carpet Care Blog & Advice | Carpet Cleaning Brisbane',
    description:
      'Expert carpet care tips, maintenance advice, & cleaning guides for Brisbane homes. Learn how to protect your carpets from humidity & dirt!',
    url: '/blog',
  },
};

export default function BlogPage() {
  const posts = getAuthorizedBlogPosts();

  return (
    <div className="min-h-screen bg-[#F2F8FC]">

      {/* Hero Header */}
      <section className="bg-[#082B59] text-white py-16 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Carpet Cleaning Blog & Advice
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Simple tips, helpful guides, and expert carpet care advice from our local Brisbane team.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-[1280px] mx-auto py-12 md:py-20 px-5 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-[#082B59]/10 flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Blog Image */}
              <Link href={`/blog/${post.slug}`} className="relative h-56 w-full block bg-gray-100">
                <NextImage
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>

              {/* Blog Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Date and Author */}
                  <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>

                  {/* Title */}
                  <h2 className="font-bold text-lg md:text-xl text-[#082B59] mb-3 leading-snug hover:text-[#00B8D9] transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read Button */}
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block bg-[#00B8D9] hover:bg-[#082B59] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                  >
                    Read Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
