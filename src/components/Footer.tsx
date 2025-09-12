import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-left text-sm text-gray-600">
        {/* Brand/Logo */}
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold text-black">Legaleyz</span>
          <span className="text-xs text-gray-400">A product from <a href="https://uupp.app" className="underline hover:text-black" target="_blank">uupp.app</a></span>
          <span className="text-xs text-gray-400">© {new Date().getFullYear()} Legaleyz. All rights reserved.</span>
        </div>
        {/* Navigation */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-black mb-1">Product</span>
          <Link href="/" className="hover:text-black">Home</Link>
          <Link href="/pricing" className="hover:text-black">Pricing</Link>
          <Link href="/about" className="hover:text-black">About</Link>
          <Link href="/contact" className="hover:text-black">Contact</Link>
        </div>
        {/* Legal */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-black mb-1">Legal</span>
          <Link href="/terms" className="hover:text-black">Terms of Service</Link>
          <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
          <Link href="/security" className="hover:text-black">Security</Link>
        </div>
        {/* Contact & Social */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-black mb-1">Contact</span>
          <a href="mailto:support@legaleyz.com" className="hover:text-black">support@legaleyz.com</a>
          <span>+91 98765 43210</span>
          <div className="flex gap-3 mt-2">
            <a href="https://twitter.com/" aria-label="Twitter" className="hover:text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.84 1.95 3.62-.72-.02-1.39-.22-1.98-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.91 3.97 2.94A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22.46 6z"/></svg></a>
            <a href="https://linkedin.com/" aria-label="LinkedIn" className="hover:text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="https://facebook.com/" aria-label="Facebook" className="hover:text-black"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
