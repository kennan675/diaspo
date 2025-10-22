import React from 'react';

const BLOG_POSTS = [
  {
    title: '5 Ways to Stay Connected with Family Healthcare Abroad',
    excerpt: 'Learn practical strategies for managing your loved ones\' health from thousands of miles away.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68f82a42889eeaf16721e728_1761094660001_834f94a3.webp',
    category: 'Healthcare Tips',
    readTime: '5 min read',
    date: 'Jan 15, 2025',
  },
  {
    title: 'Understanding Telehealth: A Guide for Diaspora Families',
    excerpt: 'Discover how virtual consultations are revolutionizing cross-border healthcare coordination.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68f82a42889eeaf16721e728_1761094662304_c9697bc5.webp',
    category: 'Technology',
    readTime: '7 min read',
    date: 'Jan 12, 2025',
  },
  {
    title: 'Navigating Healthcare Systems in Multiple Countries',
    excerpt: 'Expert advice on managing medical care across different healthcare infrastructures.',
    image: 'https://d64gsuwffb70l.cloudfront.net/68f82a42889eeaf16721e728_1761094664031_e3466ece.webp',
    category: 'Resources',
    readTime: '6 min read',
    date: 'Jan 10, 2025',
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-white to-[#007FFF]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 bg-[#283692]/10 rounded-full">
            <span className="text-[#283692] font-semibold text-sm">INSIGHTS & RESOURCES</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#3A3F46] tracking-tight">
            Latest from Our <span className="bg-gradient-to-r from-[#283692] to-[#007FFF] bg-clip-text text-transparent">Blog</span>
          </h2>
          
          <p className="text-xl text-[#7A8A9E] max-w-3xl mx-auto">
            Expert insights, healthcare tips, and stories from diaspora families
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article 
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-[#007FFF]/10 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_rgba(0,127,255,0.15)] transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[#283692] text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#7A8A9E]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#3A3F46] group-hover:text-[#007FFF] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[#7A8A9E] line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#007FFF] font-semibold pt-2 group-hover:translate-x-2 transition-transform">
                  Read More 
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-4 rounded-2xl border-2 border-[#007FFF] text-[#007FFF] font-bold text-lg hover:bg-[#007FFF] hover:text-white hover:scale-105 transition-all">
            View All Articles →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
