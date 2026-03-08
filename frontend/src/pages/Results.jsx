import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { DownloadCloud, CheckCircle, AlertTriangle, ArrowRight, Activity, Zap, Play } from 'lucide-react';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;
  const fileUrl = location.state?.fileUrl;
  const fileType = location.state?.fileType;

  if (!result) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <p className="text-xl text-gray-500 mb-6">No results found. Please upload a file to analyze.</p>
        <Link to="/detect">
          <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-colors">
            Go to Detector
          </button>
        </Link>
      </div>
    );
  }

  const isDeepfake = result.prediction === "Deepfake";
  const confidencePercent = (result.confidence * 100).toFixed(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 py-12 md:py-24"
    >
      <div className="mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Analysis Results</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg flex items-center gap-2">
          Detailed forensic report for <span className="font-mono text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">{result.filename}</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Left Column: Media Preview */}
        <div className="lg:col-span-3 h-full">
          <div className="bg-white dark:bg-[#111] rounded-3xl overflow-hidden shadow-soft border border-gray-100 dark:border-gray-800 h-full flex flex-col">
            
            <div className="bg-gray-50 dark:bg-[#1a1a1a] p-4 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
              <span className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Play className="w-4 h-4 text-accent" /> Media Preview
              </span>
              <button className="text-xs font-semibold text-accent hover:text-accent-hover flex items-center gap-1 transition-colors">
                <DownloadCloud className="w-4 h-4" /> Export Report
              </button>
            </div>
            
            <div className="flex-1 bg-black p-4 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
              {fileType?.startsWith('image/') ? (
                <img src={fileUrl} alt="Uploaded Media" className="max-w-full max-h-full object-contain rounded-xl" />
              ) : fileType?.startsWith('video/') ? (
                <video src={fileUrl} controls className="max-w-full max-h-full object-contain rounded-xl" />
              ) : fileType?.startsWith('audio/') ? (
                <audio src={fileUrl} controls className="w-full" />
              ) : (
                <div className="text-white/50">Preview not available</div>
              )}
            </div>

          </div>
        </div>

        {/* Right Column: Results & Metrics */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className={`p-8 rounded-3xl shadow-soft border relative overflow-hidden ${isDeepfake ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30' : 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30'}`}>
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-full ${isDeepfake ? 'bg-red-100 dark:bg-red-900/40 text-red-600' : 'bg-green-100 dark:bg-green-900/40 text-green-600'}`}>
                {isDeepfake ? <AlertTriangle className="w-12 h-12" /> : <CheckCircle className="w-12 h-12" />}
              </div>
            </div>
            
            <h2 className={`text-3xl font-bold text-center mb-2 uppercase tracking-wide ${isDeepfake ? 'text-red-700 dark:text-red-500' : 'text-green-700 dark:text-green-500'}`}>
              {isDeepfake ? 'Deepfake Detected' : 'Authentic Media'}
            </h2>
            
            <p className={`text-center mb-8 ${isDeepfake ? 'text-red-600/80 dark:text-red-400/80' : 'text-green-600/80 dark:text-green-400/80'}`}>
              Our neural networks identified {isDeepfake ? 'multiple signs of synthetic manipulation.' : 'no significant signs of synthetic manipulation.'}
            </p>

            <div className="mb-2 flex justify-between items-end">
              <span className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Confidence Score</span>
              <span className="text-4xl font-bold text-gray-900 dark:text-white">{confidencePercent}%</span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${confidencePercent}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className={`h-3 rounded-full ${isDeepfake ? 'bg-red-500' : 'bg-green-500'}`}
              />
            </div>
          </div>

          <div className="bg-white dark:bg-[#111] p-6 rounded-3xl shadow-soft border border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4" /> Analysis Summary
            </h3>
            <ul className="space-y-4">
              {isDeepfake ? (
                <>
                  <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" /> High frequency flickering in contours typical of Generative Adversarial Networks (GANs).
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Asymmetric edge blending patterns and unnatural reflections.
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <Zap className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Artifact inconsistencies detected exceeding forensic thresholds.
                  </li>
                </>
              ) : (
                <>
                  <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Natural biological frequency patterns detected.
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> Consistent sensor noise distribution characteristic of real camera hardware.
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /> No temporal flickering or edge blending anomalies.
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link to="/detect" className="block">
            <button className="w-full bg-accent hover:bg-accent-hover text-white py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Analyze Another File
            </button>
          </Link>

        </div>
      </div>
    </motion.div>
  );
};

export default Results;
