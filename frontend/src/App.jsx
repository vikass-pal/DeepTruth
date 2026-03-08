import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Detect = lazy(() => import('./pages/Detect'));
const Processing = lazy(() => import('./pages/Processing'));
const Results = lazy(() => import('./pages/Results'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const About = lazy(() => import('./pages/About'));
const APIDocs = lazy(() => import('./pages/APIDocs'));
import { AnimatePresence } from 'framer-motion';

// Loading fallback component
const PageLoader = () => (
  <div className="flex h-[60vh] items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20"> {/* pt-20 for fixed navbar */}
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detect" element={<Detect />} />
                <Route path="/processing" element={<Processing />} />
                <Route path="/results" element={<Results />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/about" element={<About />} />
                <Route path="/api-docs" element={<APIDocs />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
