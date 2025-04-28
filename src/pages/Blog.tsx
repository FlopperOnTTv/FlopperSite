import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Getting Started with React and TypeScript",
      date: "March 15, 2024",
      excerpt: "Learn how to set up a new React project with TypeScript and best practices for type safety.",
      category: "Development"
    },
    {
      title: "Building Responsive Layouts with Tailwind CSS",
      date: "March 10, 2024",
      excerpt: "Explore the power of Tailwind CSS for creating beautiful, responsive web designs quickly.",
      category: "Design"
    },
    {
      title: "Modern JavaScript Features You Should Know",
      date: "March 5, 2024",
      excerpt: "A deep dive into the latest JavaScript features that can improve your code quality.",
      category: "JavaScript"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-300 animate-pulse">
          Blog
        </span>
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-center mb-12">
        Thoughts, tutorials, and insights about web development and technology.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <article key={index} className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-6 border border-transparent hover:border-blue-500/50 group">
            <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">{post.date}</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
            <span className="inline-block bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full">
              {post.category}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;