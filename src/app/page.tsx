"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Legal Documents <br />
            <span className="text-blue-600">
              into AI-Powered Summaries
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Upload your legal document and get an instant summary. No more
            drowning in complex legal jargon—understand your documents at a
            glance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700">
              Upload Document
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100">
              Try Demo
            </button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-10">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Upload</h3>
              <p className="text-gray-600">
                Upload your legal document securely.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 text-green-600 flex items-center justify-center rounded-lg mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyze</h3>
              <p className="text-gray-600">
                AI processes and understands the content.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 text-purple-600 flex items-center justify-center rounded-lg mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Summarize</h3>
              <p className="text-gray-600">
                Get a concise, clear summary instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smart Document Analysis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AI-powered analysis that understands legal terminology and context
            to provide summaries that make sense.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lightning Fast Processing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Optimized AI engine that processes documents in seconds.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visual Summaries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform complex legal text into easy-to-understand summaries.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Secure & Private
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security ensures your sensitive documents remain
            confidential and protected.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Easy to Use
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An intuitive interface designed for professionals of all skill
            levels.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Team Collaboration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Share insights and collaborate with your legal team seamlessly.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
