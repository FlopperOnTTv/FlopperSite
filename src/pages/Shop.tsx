import React from 'react';
import { ExternalLink, ShoppingBag, Shield } from 'lucide-react';

const Shop = () => {
  const products = [
    {
      title: "Fivem Ready Accounts",
      description: "Easy For Spoofing Cheapest On Market",
      price: "0.25€",
      category: "Account"
    },
    {
      title: "Sea of Thieves Ship DLC",
      description: "Valiant Corsair Oreo Ship Set Steam Key",
      price: "1.30€",
      category: "Account"
    },
    {
      title: "Complete Formula Kit",
      description: "Imagine having the same high-impact design formulas trusted by the biggest brands and artists in the world at your fingertips.",
      price: "49.99€",
      category: "Account"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Digital Goods Shop</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Premium digital products for creators and professionals. Secure payments and instant delivery.
        </p>
        <a 
          href="https://flopper.sellauth.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          Visit Store
        </a>
      </section>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Secure Transactions</h2>
          <p className="text-gray-600 dark:text-gray-300">
            All purchases are protected with industry-standard security and encryption.
          </p>
        </div>
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm">
          <ExternalLink className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Instant Delivery</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get immediate access to your digital products after purchase.
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white dark:bg-zinc-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full mb-4">
              {product.category}
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}</span>
              <a 
                href="https://flopper.sellauth.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition-colors"
                style={{ backgroundColor: '#0a11f5' }}
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;