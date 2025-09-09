import React from 'react';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">IGDTUW Glow Desk</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Empowering students with comprehensive academic resources and opportunities.
        </p>
      </div>
    </footer>
  );
};

export default Footer;