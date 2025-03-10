'use client'
import Image from "next/image";
import { useState, useEffect } from 'react';

export default function Home() {
  const [email, setEmail] = useState('innsonictechnologies@gmail.com');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // For the animated gradient effect
  const [gradientPos, setGradientPos] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPos((prev) => (prev + 1) % 200);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Gradient accent at the top */}
      <div 
        className="h-1 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400" 
        style={{ 
          backgroundSize: '200% 100%',
          backgroundPosition: `${gradientPos}% 0%`
        }}
      />
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <main className="w-full max-w-3xl mx-auto flex flex-col items-center space-y-12">
          {/* Logo */}
          <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-teal-400">
            INNSONIC
          </div>
          <div className="text-xl font-light tracking-wider text-gray-400">TECHNOLOGIES</div>
          
          {/* Status */}
          <div className="flex items-center space-x-3 mt-4">
            <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
            <div className="uppercase tracking-widest text-sm text-gray-400">Under Construction</div>
          </div>
          
          {/* Description */}
          <div className="text-center max-w-xl">
            <h1 className="text-2xl md:text-3xl font-light mb-6">Building Something Amazing</h1>
            <p className="text-gray-400 mb-8">
              We're crafting innovative app and web solutions to transform your digital presence. 
              Our team is working diligently to bring you a seamless experience.
            </p>
            <div className="w-16 h-1 mx-auto my-6 bg-gradient-to-r from-purple-500 to-blue-500"></div>
            <p className="text-gray-300">
              Have a project in mind? Let's discuss how we can help.
            </p>
          </div>
          
          {/* Contact */}
          <div className="w-full max-w-md px-6 py-6 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-gray-400">Contact us</div>
              <a 
                className="flex items-center space-x-2 bg-gray-800 px-4 py-3 rounded-md w-full cursor-pointer hover:bg-gray-700 transition-colors"
                href="mailto:innsonictechnologies@gmail.com"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-teal-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm md:text-base flex-1 font-mono">{email}</span>
                {/* <div className="text-xs text-teal-400">
                  {copied ? "Copied!" : "Click to copy"}
                </div> */}
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
              <div className="text-teal-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">App Development</h3>
              <p className="text-gray-400 text-sm">Custom mobile applications that elevate your business and engage your users.</p>
            </div>
            
            <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/30 backdrop-blur-sm">
              <div className="text-blue-400 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Web Services</h3>
              <p className="text-gray-400 text-sm">Responsive websites and web applications built with modern technologies.</p>
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="py-6 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Innsonic Technologies. All rights reserved.
        </div>
      </footer>
    </div>
  );
}