import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HerbInfo {
  name: string;
  description: string;
  benefits: string[];
  traditionalUses: string;
  image: string;
}

const HERB_DATA: Record<string, HerbInfo> = {
  neem: {
    name: 'Neem',
    description: 'Neem is a tree in the mahogany family Meliaceae. It is native to the Indian subcontinent and has been used in traditional medicine for over 4,000 years.',
    benefits: [
      'Natural antibacterial properties',
      'Supports skin health',
      'Boosts immune system',
      'Natural pest repellent',
      'Promotes dental health'
    ],
    traditionalUses: 'Traditionally used in Ayurveda for treating various skin conditions, boosting immunity, and as a natural pesticide. The leaves, bark, and seeds are all used in different preparations.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  },
  tulsi: {
    name: 'Tulsi (Holy Basil)',
    description: 'Tulsi, also known as Holy Basil, is a sacred plant in Hindu tradition and a powerful adaptogenic herb in Ayurvedic medicine.',
    benefits: [
      'Reduces stress and anxiety',
      'Boosts immunity',
      'Improves respiratory health',
      'Anti-inflammatory properties',
      'Enhances digestion'
    ],
    traditionalUses: 'Used in daily rituals, as a medicinal tea, and in various Ayurvedic formulations for respiratory and stress-related conditions.',
    image: 'https://images.unsplash.com/photo-1593228721422-51679fc0a0b8?auto=format&fit=crop&q=80'
  },
  ashwagandha: {
    name: 'Ashwagandha',
    description: 'Ashwagandha is one of the most important herbs in Ayurveda, known for its adaptogenic properties that help the body manage stress.',
    benefits: [
      'Reduces stress and anxiety',
      'Improves sleep quality',
      'Increases strength and stamina',
      'Enhances cognitive function',
      'Supports immune system'
    ],
    traditionalUses: 'Traditionally used as a Rasayana (rejuvenator) in Ayurveda for its wide-ranging health benefits, particularly for stress relief and vitality.',
    image: 'https://images.unsplash.com/photo-1620726990394-e739c3c8f1c1?auto=format&fit=crop&q=80'
  },
  cardamom: {
    name: 'Cardamom',
    description: 'Cardamom is a spice made from the seeds of several plants in the genera Elettaria and Amomum. It is known for its intense, slightly sweet flavor and has been used in both culinary and medicinal applications.',
    benefits: [
      'Aids digestion',
      'Freshens breath',
      'Contains antioxidants',
      'Supports cardiovascular health',
      'May help lower blood pressure'
    ],
    traditionalUses: 'Used in traditional Ayurvedic medicine for digestive issues, oral health, and as a natural breath freshener. Also widely used in Indian cuisine and traditional chai.',
    image: 'https://images.unsplash.com/photo-1638228666374-6a1a31ab6d1d?auto=format&fit=crop&q=80'
  },
  cumin: {
    name: 'Cumin',
    description: 'Cumin is a flowering plant in the family Apiaceae, native to the region from the Middle East to India. Its seeds are used in both whole and ground form.',
    benefits: [
      'Improves digestion',
      'Rich in iron',
      'Has anti-inflammatory properties',
      'May help with weight management',
      'Controls blood sugar'
    ],
    traditionalUses: 'Traditionally used in Ayurvedic medicine for digestive health and metabolism. Essential spice in Indian cooking and traditional remedies.',
    image: 'https://images.unsplash.com/photo-1599909619412-4cc616ee5842?auto=format&fit=crop&q=80'
  },
  turmeric: {
    name: 'Turmeric',
    description: 'Turmeric is a flowering plant of the ginger family, widely used as a spice and medicinal herb. Its active compound, curcumin, has powerful anti-inflammatory properties.',
    benefits: [
      'Powerful anti-inflammatory',
      'Strong antioxidant',
      'Improves brain function',
      'Reduces joint pain',
      'Supports heart health'
    ],
    traditionalUses: 'Used in cooking, as a natural dye, and in various medicinal preparations for its anti-inflammatory and healing properties.',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80'
  },
  rama: {
    name: 'Rama',
    description: 'Rama (Cassia angustifolia), also known as Senna, is a medicinal herb widely used in Ayurvedic medicine. It belongs to the legume family and is known for its therapeutic properties.',
    benefits: [
      'Natural laxative properties',
      'Aids in digestion',
      'Helps with detoxification',
      'Supports liver health',
      'Traditional remedy for skin conditions'
    ],
    traditionalUses: 'Traditionally used in Ayurvedic medicine as a gentle laxative, for digestive issues, and in various cleansing formulations. The leaves and pods are commonly used in herbal preparations.',
    image: 'https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?auto=format&fit=crop&q=80'
  }
};


const HerbDetails: React.FC = () => {
  const { herbName } = useParams<{ herbName: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const uploadedImage = location.state?.uploadedImage;
  
  const herbInfo = herbName ? HERB_DATA[herbName.toLowerCase()] : null;

  if (!herbInfo) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            Herb Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Sorry, we couldn't find information about this herb.
          </p>
          <button
            onClick={() => navigate('/herb-detection')}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Detection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/herb-detection')}
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Detection
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img
              src={uploadedImage || herbInfo.image}
              alt={herbInfo.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
              {herbInfo.name}
            </h1>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Description
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {herbInfo.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Benefits
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {herbInfo.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Traditional Uses
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {herbInfo.traditionalUses}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HerbDetails;