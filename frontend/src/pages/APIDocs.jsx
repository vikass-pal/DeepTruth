import { motion } from 'framer-motion';
import { Terminal, Copy } from 'lucide-react';

const APIDocs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-sm font-bold tracking-widest text-accent uppercase mb-2 block">Developers</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">API Documentation</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-3xl">
          Integrate our deepfake detection engine directly into your applications using our RESTful API endpoints.
        </p>

        <div className="space-y-12">
          
          {/* Base URL */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Base URL</h2>
            <div className="flex items-center gap-4 bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-200 dark:border-gray-800">
              <code className="text-accent font-mono text-lg flex-1">http://localhost:8000/detect</code>
            </div>
          </section>

          {/* Endpoints */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Endpoints</h2>
            
            <div className="space-y-8">
              {/* Image Endpoint */}
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-[#1a1a1a]">
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-3 py-1 rounded text-sm tracking-wide">POST</span>
                  <code className="font-mono font-semibold text-gray-900 dark:text-white">/image</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Analyzes a static image file for generative artifacts.</p>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Request Format</h4>
                  <p className="text-sm text-gray-500 mb-4">Content-Type: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">multipart/form-data</code></p>
                  
                  <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-gray-300 relative group overflow-hidden">
                    <pre>
{`curl -X POST http://localhost:8000/detect/image \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/path/to/your/image.jpg"`}
                    </pre>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mt-6 mb-2">Response Format</h4>
                  <div className="bg-gray-900 rounded-xl p-4 font-mono text-sm text-green-400 overflow-hidden">
                    <pre>
{`{
  "prediction": "Deepfake",
  "confidence": 0.92,
  "filename": "image.jpg",
  "file_size_bytes": 1024000,
  "media_type": "image"
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Video Endpoint */}
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-[#1a1a1a]">
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-3 py-1 rounded text-sm tracking-wide">POST</span>
                  <code className="font-mono font-semibold text-gray-900 dark:text-white">/video</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Analyzes a video file for temporal inconsistencies and facial blending errors.</p>
                  <p className="text-sm text-gray-500 mb-4">Content-Type: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">multipart/form-data</code></p>
                </div>
              </div>

              {/* Audio Endpoint */}
              <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-[#1a1a1a]">
                  <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 font-bold px-3 py-1 rounded text-sm tracking-wide">POST</span>
                  <code className="font-mono font-semibold text-gray-900 dark:text-white">/audio</code>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Analyzes an audio file for speech synthesis artifacts and frequency irregularities.</p>
                  <p className="text-sm text-gray-500 mb-4">Content-Type: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">multipart/form-data</code></p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </motion.div>
    </div>
  );
};

export default APIDocs;
