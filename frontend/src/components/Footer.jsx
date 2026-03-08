import { ShieldCheck, Twitter, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-accent/10 p-2 rounded-xl group-hover:bg-accent/20 transition-colors">
                <img src={logoUrl} alt="DeepTruth" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-lg font-bold tracking-tight">DeepTruth</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              Advanced AI neural networks dissecting media for synthetic manipulation and forensic inconsistencies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to="/detect" className="text-sm text-gray-500 hover:text-accent transition-colors">Analyze Media</Link></li>
              <li><Link to="/results" className="text-sm text-gray-500 hover:text-accent transition-colors">History</Link></li>
              <li><Link to="/api-docs" className="text-sm text-gray-500 hover:text-accent transition-colors">API Docs</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-gray-500 hover:text-accent transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-500 hover:text-accent transition-colors">About Us</Link></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-accent transition-colors">Data Processing Addendum</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} DeepTruth. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-sm text-gray-500">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
