import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { HerbResult } from '../types';
import HerbResultCard from '../components/herb-detection/HerbResultCard';
import FileUpload from '../components/herb-detection/FileUpload';
import ErrorMessage from '../components/common/ErrorMessage';
import LoadingAnimation from '../components/LoadingAnimation';

const HerbDetection: React.FC = () => {
  const navigate = useNavigate();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [herbResult, setHerbResult] = useState<HerbResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [confidenceThreshold, setConfidenceThreshold] = useState(50);
  const [predictions, setPredictions] = useState<any>(null);
  const [predictedClass, setPredictedClass] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleFileUpload = async (file: File) => {
    try {
      if (file.size > 5 * 1024 * 1024) {
        throw new Error('Image size should be less than 5MB');
      }

      setIsAnalyzing(true);
      setHerbResult(null);
      setError(null);
      setPredictions(null);
      setPredictedClass(null);
      setShowResults(false);

      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);

      // Convert file to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64Image = reader.result?.toString().split(',')[1];
        
        try {
          // Ensure minimum loading time of 5 seconds for better UX
          const [response] = await Promise.all([
            axios({
              method: 'POST',
              // url: 'https://detect.roboflow.com/leaves-ymq7h/1',
              url: 'https://classify.roboflow.com/ayurved/2',
              params: {
                api_key: 'nGThlw5s21tjQEUetGTE'
              },
              data: base64Image,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }),
            // Add a minimum delay of 5 seconds
            new Promise(resolve => setTimeout(resolve, 5000))
          ]);

          setPredictions(response.data.predictions);
          setPredictedClass(response.data.predicted_classes[0]);

// setPredictions(response.data.predictions);
// if (Array.isArray(response.data.predictions) && response.data.predictions.length > 0) {
//   const highestPrediction = response.data.predictions.reduce(
//     (best: { confidence: number; class: string }, current: { confidence: number; class: string }) =>
//       current.confidence > best.confidence ? current : best,
//     response.data.predictions[0]
//   );

//   setPredictedClass(highestPrediction.class);
// } else {
//   setPredictedClass(null);
// }

          
          // Add a small delay before showing results for smooth transition
          setTimeout(() => {
            setShowResults(true);
            setIsAnalyzing(false);
          }, 500);

        } catch (error) {
          console.error('API Error:', error);
          setError('Failed to analyze image with the API');
          setIsAnalyzing(false);
        }
      };
    } catch (error) {
      console.error('Error analyzing image:', error);
      setError(error instanceof Error ? error.message : 'Failed to analyze image');
      setIsAnalyzing(false);
    }
  };

  const handleKnowMore = () => {
    if (predictedClass && uploadedImage) {
      navigate(`/herb-details/${predictedClass.toLowerCase()}`, {
        state: { uploadedImage }
      });
    }
  };

  const filteredPredictions = predictions ? Object.entries(predictions)
    .filter(([_, value]: [string, any]) => value.confidence * 100 >= confidenceThreshold)
    .reduce((acc: any, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {}) : null;
 





  


  const handleReset = () => {
    setHerbResult(null);
    setError(null);
    setPredictions(null);
    setPredictedClass(null);
    setShowResults(false);
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
      setUploadedImage(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {isAnalyzing && <LoadingAnimation />}
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Herb Detection
          </h1>
          
          {error && (
            <div className="mb-8 animate-fade-in">
              <ErrorMessage message={error} onRetry={handleReset} />
            </div>
          )}

          <div className={`transition-all duration-500 ${isAnalyzing ? 'opacity-50 blur-sm' : 'opacity-100'}`}>
            {!predictedClass && !error && (
              <FileUpload onFileUpload={handleFileUpload} />
            )}
          </div>

          {predictedClass && uploadedImage && (
            <div className={`text-center transition-all duration-500 transform ${
              showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <img 
                src={uploadedImage} 
                alt="Uploaded herb"
                className="mx-auto max-h-96 rounded-lg shadow-lg mb-6 transition-transform duration-300 hover:scale-[1.02]"
              />
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in">
                  Predicted Herb: {predictedClass}
                </h2>
                <button
                  onClick={handleKnowMore}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Know More
                </button>
              </div>
            </div>
          )}
        </div>

        {predictions && (
          <div className={`lg:w-1/3 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 transform ${
            showResults ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Confidence Settings
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confidence Threshold: {confidenceThreshold}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                Filtered Predictions
              </h3>
              <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
                {JSON.stringify(filteredPredictions, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HerbDetection;