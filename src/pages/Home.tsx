import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Leaf } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Welcome to Ayurvedic Wellness
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the ancient wisdom of Ayurveda through modern technology
          </p>
        </section>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Link 
            to="/chat"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                AyurBot
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Chat with our AI-powered Ayurvedic assistant to get personalized wellness advice and learn about natural remedies.
            </p>
          </Link>

          <Link 
            to="/herb-detection"
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Herb Detection
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Upload images of herbs and plants to identify them and learn about their Ayurvedic properties and benefits.
            </p>
          </Link>
        </div>

        {/* About Ayurveda Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Ayurveda
          </h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Ayurveda is one of the world's oldest holistic healing systems. Developed more than 5,000 years ago in India, it's based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              The main goal of Ayurvedic medicine is to promote good health, rather than fight disease. However, treatments may be recommended for specific health problems.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Through our modern tools like AyurBot and Herb Detection, we're making this ancient wisdom more accessible and easier to understand for everyone.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;