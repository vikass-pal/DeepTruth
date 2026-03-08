import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly is a Deepfake?",
      answer: "A deepfake is a synthetic media format—images, video, or audio—where a person's likeness has been replaced or manipulated using advanced AI (deep learning). They can be highly realistic and difficult to spot with the naked eye."
    },
    {
      question: "How accurate is DeepTruth's detection?",
      answer: "Our current v2.0 neural net boasts an average accuracy of 99.8% across supported formats. We combine pixel-level frequency analysis with biological inconsistency checks to provide industry-leading forensic results."
    },
    {
      question: "Are my uploaded files kept securely?",
      answer: "Yes. All processing is done in-memory on our secure servers. Files are automatically and permanently deleted milliseconds after the analysis prediction is generated. We never use user data to train our models."
    },
    {
      question: "What file types do you support?",
      answer: "We support standard image formats (JPG, PNG), common video formats (MP4, MOV), and audio formats (WAV, MP3) up to 50MB per file."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-sm font-bold tracking-widest text-accent uppercase mb-2 block">Our Mission</span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">The Truth Behind the Lens</h1>
        
        <div className="prose prose-lg dark:prose-invert prose-blue max-w-none text-gray-600 dark:text-gray-300">
          <p className="text-xl leading-relaxed mb-8">
            As synthetic media evolves, our mission is to provide clarity and restore trust in digital communication.
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 p-8 rounded-3xl border border-blue-100 dark:border-blue-900/30 my-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-0">Understanding Deepfakes</h2>
            <p className="mb-0">
              Deepfakes are synthetic media in which a person in an existing image or video is replaced with someone else's likeness using advanced artificial neural networks. While the technology has creative applications in cinema and art, its misuse for misinformation, fraud, and identity theft poses a significant threat to global security.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Why Detection Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-0 mb-3">Identity Protection</h3>
              <p className="text-sm m-0">Safeguarding individuals from non-consensual synthetic content and digital impersonation.</p>
            </div>
            <div className="bg-white dark:bg-[#111] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-0 mb-3">Information Trust</h3>
              <p className="text-sm m-0">Combating the spread of state-sponsored disinformation and preserving democratic processes.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Technology Stack</h2>
          <p>This project was built using modern web architectures to ensure speed, security, and scalability:</p>
          <ul>
            <li><strong>Frontend:</strong> React.js, Vite, Tailwind CSS, Framer Motion</li>
            <li><strong>Backend:</strong> Python, FastAPI, Uvicorn</li>
            <li><strong>Architecture:</strong> RESTful API design with asynchronous file processing</li>
          </ul>

        </div>

        {/* FAQ Section */}
        <div className="mt-16 border-t border-gray-100 dark:border-gray-800 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-[#111] rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-lg">{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-gray-600 dark:text-gray-400"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
