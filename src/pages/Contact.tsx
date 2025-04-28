import React from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Contact Me</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
        Have a question or want to work together? I'd love to hear from you.
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="bg-black rounded-xl shadow-sm p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-zinc-800">
            <h2 className="text-xl font-semibold text-white mb-4">Other ways to reach me</h2>
            
            <div className="space-y-4">
              <a href="mailto:floppertvon@gmail.com" className="flex items-center text-gray-300 hover:text-white">
                floppertvon@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact