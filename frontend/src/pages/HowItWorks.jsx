import { motion } from 'framer-motion';
import { UploadCloud, Server, ShieldCheck, Zap } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-sm font-bold tracking-widest text-accent uppercase mb-2 block">Technology</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Deepfake Detection Technology</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">
          Understand the sophisticated AI pipelines we use to verify digital authenticity. 
          Our multi-layered approach analyzes visual artifacts, temporal consistency, and acoustic signatures.
        </p>
      </motion.div>

      <div className="space-y-24">
        
        {/* Workflow Diagram */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-4">The Detection Workflow</h2>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 hidden md:block z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-soft text-center border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <UploadCloud className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">1. Media Upload</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Securely upload images, video, or audio files through our encrypted gateway.</p>
              </div>

              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-soft text-center border border-gray-100 dark:border-gray-800">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <Server className="w-8 h-8 relative z-10" />
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">2. AI Processing</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Our ensemble of neural networks scans for generative artifacts and inconsistencies.</p>
              </div>

              <div className="bg-white dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-soft text-center border border-gray-100 dark:border-gray-800 hover:border-accent/40 transition-colors">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">3. Instant Prediction</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Receive a granular confidence score and detailed forensic summary.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Pipelines Explanation */}
        <section className="bg-secondary-bg dark:bg-[#111] p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Image Detection Pipeline</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <p className="text-gray-600 dark:text-gray-300">
                Static images are analyzed using frequency-domain forensics. While AI-generated pixels look perfect to the eye, they often lack the "sensor noise" characteristic of real camera hardware.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-1 bg-accent/20 text-accent p-1 rounded-full"><Zap className="w-3 h-3" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Artifact Detection</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Scanning for unusual blending patterns around facial boundaries.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 bg-accent/20 text-accent p-1 rounded-full"><Zap className="w-3 h-3" /></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Biometric Consistency</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Checking for biological plausibility in skin texture and reflections.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-900 rounded-2xl p-6 shadow-inner font-mono text-xs w-full">
              <div className="text-blue-400 mb-2">Loading model weights...</div>
              <div className="text-green-500 mb-2">Extracting pixels [256x256]...</div>
              <div className="text-gray-400 mb-1">&gt; Checking edge variance</div>
              <div className="w-full bg-gray-800 h-2 mb-4 rounded overflow-hidden">
                <div className="bg-blue-500 h-full w-[80%]"></div>
              </div>
              <div className="text-gray-400 mb-1">&gt; Running frequency transform</div>
              <div className="w-full bg-gray-800 h-2 rounded overflow-hidden">
                <div className="bg-purple-500 h-full w-[40%]"></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowItWorks;
