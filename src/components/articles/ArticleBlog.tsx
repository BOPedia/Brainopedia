import React, { useState } from 'react';
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, Link2, ArrowLeft } from 'lucide-react';

interface ArticleBlogProps {
  setCurrentArticle?: (article: string) => void;
}

// Blog post data type
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
  category: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Sample blog posts
const blogPosts: BlogPost[] = [];

export function ArticleBlog({ setCurrentArticle }: ArticleBlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = (platform: string, post: BlogPost) => {
    // Check if we're in the browser before using browser APIs
    if (typeof window === 'undefined') return;
    
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(post.title);
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleCopyLink = () => {
    // Check if we're in the browser before using browser APIs
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return;
    
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // If a post is selected, show individual post view
  if (selectedPost) {
    return (
      <article className="max-w-4xl">
        {/* Back button */}
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-[#2abcd4] hover:text-[#0c264d] mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all posts</span>
        </button>

        {/* Post header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
            <span className="bg-[#2abcd4]/20 text-[#0c264d] px-3 py-1 rounded-full">
              {selectedPost.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {selectedPost.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {selectedPost.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {selectedPost.author}
            </span>
          </div>
          
          <h1 className="text-[#0c264d] mb-6">
            {selectedPost.title}
          </h1>
        </div>

        {/* Social share buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-200">
          <span className="text-sm text-gray-600 flex items-center gap-2">
            <Share2 className="w-4 h-4" />
            Share this article:
          </span>
          <button
            onClick={() => handleShare('facebook', selectedPost)}
            className="p-2 rounded-md hover:bg-[#1877f2]/10 text-[#1877f2] transition-colors"
            title="Share on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleShare('twitter', selectedPost)}
            className="p-2 rounded-md hover:bg-[#1da1f2]/10 text-[#1da1f2] transition-colors"
            title="Share on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleShare('linkedin', selectedPost)}
            className="p-2 rounded-md hover:bg-[#0077b5]/10 text-[#0077b5] transition-colors"
            title="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </button>
          <button
            onClick={handleCopyLink}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600 transition-colors relative"
            title="Copy link"
          >
            <Link2 className="w-5 h-5" />
            {copiedLink && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Link copied!
              </span>
            )}
          </button>
        </div>

        {/* Post content */}
        <div className="prose max-w-none">
          {selectedPost.content}
        </div>

        {/* Follow us section */}
        {selectedPost.socialMedia && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-[#0c264d] font-bold mb-4">Follow Brainopedia</h3>
            <p className="mb-4 text-gray-700">
              Stay updated with the latest research, stories, and resources about neurodiversity. 
              Follow us on social media for daily updates and community discussions.
            </p>
            <div className="flex flex-wrap gap-4">
              {selectedPost.socialMedia.facebook && (
                <a
                  href={selectedPost.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1877f2] text-white rounded-md hover:bg-[#1877f2]/90 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </a>
              )}
              {selectedPost.socialMedia.twitter && (
                <a
                  href={selectedPost.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#1da1f2] text-white rounded-md hover:bg-[#1da1f2]/90 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </a>
              )}
              {selectedPost.socialMedia.instagram && (
                <a
                  href={selectedPost.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              )}
              {selectedPost.socialMedia.linkedin && (
                <a
                  href={selectedPost.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white rounded-md hover:bg-[#0077b5]/90 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              )}
            </div>
          </div>
        )}
      </article>
    );
  }

  // Blog list view
  return (
    <article className="max-w-4xl">
      <h1 className="pb-2 border-b-2 border-[#0c264d] mb-6 text-3xl">
        Blog & Updates
      </h1>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-700 mb-4">
          Stay informed with the latest research, insights, and stories from the neurodiversity community. 
          Our blog features articles about workplace inclusion, research breakthroughs, personal experiences, 
          and practical resources for neurodivergent individuals and their supporters.
        </p>
        
        {/* Social media follow section */}
        <div className="bg-gradient-to-r from-[#2abcd4]/10 to-[#ffd166]/20 border-l-4 border-[#2abcd4] p-4 sm:p-6 rounded-r-lg">
          <h2 className="text-[#0c264d] font-bold mb-3">Follow Us on Social Media</h2>
          <p className="text-sm text-gray-700 mb-4">
            Join our growing community on social media for daily updates, resources, and conversations 
            about neurodiversity. Connect with us on your favorite platform:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://facebook.com/brainopedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              <Facebook className="w-4 h-4 text-[#1877f2]" />
              <span className="text-gray-700">Facebook</span>
            </a>
            <a
              href="https://twitter.com/brainopedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              <Twitter className="w-4 h-4 text-[#1da1f2]" />
              <span className="text-gray-700">Twitter</span>
            </a>
            <a
              href="https://instagram.com/brainopedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="url(#instagram-gradient)" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#833ab4" />
                    <stop offset="50%" stopColor="#fd1d1d" />
                    <stop offset="100%" stopColor="#fcb045" />
                  </linearGradient>
                </defs>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="text-gray-700">Instagram</span>
            </a>
            <a
              href="https://linkedin.com/brainopedia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span className="text-gray-700">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Blog posts grid */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-3">
              <span className="bg-[#2abcd4]/20 text-[#0c264d] px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h2 className="text-[#0c264d] font-bold mb-2 hover:text-[#2abcd4] transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-700 mb-4">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <button className="text-[#2abcd4] hover:text-[#0c264d] transition-colors text-sm font-medium">
                Read more →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-12 bg-[#ffd166]/20 border-2 border-[#ffd166] rounded-lg p-6 text-center">
        <h3 className="text-[#0c264d] font-bold mb-3">Want to Contribute?</h3>
        <p className="text-gray-700 mb-4">
          We welcome guest posts and contributions from the neurodivergent community. 
          Share your story, research, or insights with our readers.
        </p>
        <button className="bg-[#2abcd4] text-white px-6 py-2 rounded-md hover:bg-[#0c264d] transition-colors">
          Contact Us
        </button>
      </div>
    </article>
  );
}
