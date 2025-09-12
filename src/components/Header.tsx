import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b shadow-sm sticky top-0 z-30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-700">Legaleyz</span>
        </div>
        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Home</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Pricing</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">About</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Contact</Link>
        </div>
        {/* Sign In Button */}
        <div className="flex items-center gap-2">
          <Link href="/signin" className="px-4 py-2 rounded-md bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">Sign In</Link>
        </div>
        {/* Mobile menu icon (optional, for real app you'd add state and menu) */}
        <div className="md:hidden flex items-center">
          <button className="p-2 rounded hover:bg-gray-100 focus:outline-none" aria-label="Open menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}