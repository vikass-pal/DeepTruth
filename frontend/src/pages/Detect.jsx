import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, File, X, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react';
import axios from 'axios';

const Detect = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const validateFile = (file) => {
    setError('');
    if (!file) return false;
    
    // 50 MB limit
    if (file.size > 50 * 1024 * 1024) {
      setError("File size exceeds 50MB limit.");
      return false;
    }
    
    const validTypes = ['image/jpeg', 'image/png', 'video/mp4', 'video/quicktime', 'audio/mpeg', 'audio/wav'];
    if (!validTypes.includes(file.type)) {
      setError("Unsupported file format. Please upload JPG, PNG, MP4, MOV, MP3, or WAV.");
      return false;
    }
    
    return true;
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setSelectedFile(file);
      }
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const triggerUpload = () => {
    if (!selectedFile) return;
    
    // Pass state to Processing page to handle the API call
    navigate('/processing', { state: { file: selectedFile } });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-12 md:py-24"
    >
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Upload Media</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">Securely analyze your images, video, or audio for deepfakes.</p>
      </div>

      <div className="bg-white dark:bg-[#111] rounded-3xl p-8 shadow-premium border border-gray-100 dark:border-gray-800">
        
        {/* Upload Area */}
        <AnimatePresence mode="wait">
          {!selectedFile ? (
            <motion.div 
              key="upload"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-colors duration-200 ease-in-out ${dragActive ? 'border-accent bg-accent/5' : 'border-gray-300 dark:border-gray-700 bg-gray-50 hover:bg-gray-100 dark:bg-[#1a1a1a] dark:hover:bg-[#1f1f1f]'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input 
                ref={inputRef}
                type="file" 
                className="hidden" 
                accept="image/jpeg, image/png, video/mp4, video/quicktime, audio/mpeg, audio/wav"
                onChange={handleChange}
              />
              
              <div className="flex justify-center mb-6">
                <div className="bg-white dark:bg-gray-800 shadow-soft p-4 rounded-full text-accent">
                  <UploadCloud className="w-10 h-10" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Drag and drop your files here</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">or use the button below to browse your local storage</p>
              
              <button 
                onClick={() => inputRef.current?.click()}
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Browse Files
              </button>

              <div className="mt-8 flex justify-center gap-2">
                {['JPG', 'PNG', 'MP4', 'MOV', 'WAV', 'MP3'].map(ext => (
                  <span key={ext} className="text-xs font-semibold bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-md">
                    {ext}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">Maximum file size: 50MB</p>
              
              <div className="mt-6 flex items-start gap-3 text-left bg-blue-50 dark:bg-blue-900/10 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold block mb-1">Privacy First Processing</span>
                  All media is analyzed in memory and immediately deleted after analysis. We do not store your files or use them to train our algorithms.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-6"
            >
              <div className="flex items-center p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl border border-gray-200 dark:border-gray-700 mb-8">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm text-accent mr-4">
                  <File className="w-8 h-8" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="font-semibold text-gray-900 dark:text-white truncate">{selectedFile.name}</h4>
                  <p className="text-sm text-gray-500">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                </div>
                <button 
                  onClick={removeFile}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors bg-white dark:bg-gray-800 rounded-full shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center gap-4">
                <button 
                  onClick={removeFile}
                  className="px-6 py-3 rounded-full font-medium text-gray-600 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={triggerUpload}
                  className="px-8 py-3 rounded-full font-medium text-white bg-accent hover:bg-accent-hover shadow-soft transition-colors flex items-center gap-2"
                >
                  Start Forensic Scan <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center gap-3 border border-red-100 dark:border-red-900/30"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p className="text-sm">{error}</p>
          </motion.div>
        )}

      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4" /> End-to-end encrypted file processing
      </div>
    </motion.div>
  );
};

export default Detect;
