import Link from 'next/link';
import NextImage from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Phone, CalendarCheck, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { getAuthorizedBlogPosts } from '@/data/blogs';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static routes generator for blog posts
export async function generateStaticParams() {
  const posts = getAuthorizedBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// SEO Metadata generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAuthorizedBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Article Not Found | Carpet Cleaning Brisbane' };
  }

  return {
    title: `${post.title} | Carpet Cleaning Brisbane`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Carpet Cleaning Brisbane`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [post.image],
    },
  };
}

// Helper to render markdown links [text](url) into proper Next.js Links without extra styling
function renderTextWithLinks(text: string) {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | React.ReactNode)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const label = match[1];
    let url = match[2];

    // Clean internal URLs if domain or tracking query is present
    url = url.replace('https://carpetcleaninginbrisbane.au', '');
    if (url.includes('google.com/search?q=https://carpetcleaninginbrisbane.au/book-now')) {
      url = '/book-now';
    }
    if (url.includes('?utm_source=')) {
      url = url.split('?')[0];
    }

    const isInternal = url.startsWith('/');
    if (isInternal) {
      parts.push(
        <Link
          key={`${match.index}-${label}`}
          href={url}
          className="text-[#00B8D9] underline hover:text-[#082B59] transition-colors"
        >
          {label}
        </Link>
      );
    } else {
      parts.push(
        <a
          key={`${match.index}-${label}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00B8D9] underline hover:text-[#082B59] transition-colors"
        >
          {label}
        </a>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const posts = getAuthorizedBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://carpetcleaninginbrisbane.au';

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith('http') ? post.image : `${siteUrl}${post.image}`,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Carpet Cleaning Brisbane',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#F2F8FC] py-10 px-4 md:px-8">
      {/* BlogPosting Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* Expanded container width to max-w-5xl (1024px) for full page readability */}
      <div className="max-w-5xl mx-auto">

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#082B59] hover:text-[#00B8D9] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        {/* Main Article Container */}
        <article className="bg-white rounded-3xl p-6 md:p-12 shadow-md border border-[#082B59]/10">
          
          {/* Article Header */}
          <div className="mb-8 border-b border-gray-100 pb-6">
            <h1 className="font-bold text-2xl md:text-4xl text-[#082B59] mb-4 leading-snug">
              {post.title}
            </h1>
            <div className="text-xs md:text-sm text-gray-500 font-medium">
              <span>{post.date}</span> &bull; <span>Written by {post.author}</span>
            </div>
          </div>

          {/* Blog Photo */}
          <div className="relative h-64 sm:h-80 md:h-[420px] w-full rounded-2xl overflow-hidden mb-10 bg-gray-100 shadow-sm">
            <NextImage
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>

          {/* Article Introduction */}
          <div className="space-y-4 mb-8">
            {post.intro.split('\n\n').map((p, idx) => (
              <p key={idx} className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                {renderTextWithLinks(p)}
              </p>
            ))}
          </div>

          {/* Article Content Sections */}
          <div className="space-y-8">
            {post.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="font-bold text-xl md:text-2xl text-[#082B59]">
                  {section.heading}
                </h2>
                {section.paragraph && (
                  <div className="space-y-3">
                    {section.paragraph.split('\n\n').map((p, pIdx) => (
                      <p key={pIdx} className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {renderTextWithLinks(p)}
                      </p>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <ul className="space-y-2 pt-2">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-sm md:text-base text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00B8D9] shrink-0 mt-1" />
                        <span>{renderTextWithLinks(bullet)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="mt-10 pt-6 border-t border-gray-100 space-y-3">
            {post.conclusion.split('\n\n').map((p, cIdx) => (
              <p key={cIdx} className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                {renderTextWithLinks(p)}
              </p>
            ))}
          </div>


          {/* CTA Box (Spacious layout with non-overflowing buttons) */}
          <div className="mt-10 bg-[#082B59] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="font-bold text-xl md:text-2xl mb-1">Need Carpet Cleaning in Brisbane?</h3>
              <p className="text-xs md:text-sm text-white/80">Get professional steam cleaning for your home or rental today.</p>
            </div>

            {/* Simple Call & Book Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
              <a
                href="tel:0405849841"
                className="px-5 py-2.5 bg-[#00B8D9] text-[#082B59] hover:bg-white font-bold text-xs md:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shrink-0"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              <Link
                href="/book-now"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs md:text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shrink-0"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Online
              </Link>
            </div>
          </div>

        </article>

      </div>
    </div>
  );
}


