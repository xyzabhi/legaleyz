import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Brand/Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold">Legaleyz</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Making legal documents simple, visual, and transparent with AI-powered analysis.
            </p>
            <p className="text-xs text-gray-500">
              A product from{" "}
              <a 
                href="https://uupp.app" 
                className="text-blue-400 hover:text-blue-300 transition-colors" 
                target="_blank"
                rel="noopener noreferrer"
              >
                uupp.app
              </a>
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Home</Link></li>
              <li><Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Features</Link></li>
              <li><Link href="/integrations" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Integrations</Link></li>
              <li><Link href="/api" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">API</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Contact</Link></li>
              <li><Link href="/press" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Press</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Help Center</Link></li>
              <li><Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Documentation</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/security" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Legaleyz. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/" 
                aria-label="Twitter" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.91 3.97 2.94A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/" 
                aria-label="LinkedIn" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                </svg>
              </a>
              <a 
                href="https://github.com/" 
                aria-label="GitHub" 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
