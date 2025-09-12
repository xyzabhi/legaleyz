import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQItem from "@/components/FAQItem";



const contactOptions = [
    {
        type: "Email Support",
        description: "Send us an email and we’ll respond within 24 hours",
        action: {
            label: "support@company.com",
            link: "mailto:support@company.com",
            style: "primary", // you can use this to style differently
        },
        meta: "Response time: 24 hours",
        icon: "mail", // you can map this to an icon component
    },
    {
        type: "WhatsApp",
        description: "Chat with us instantly on WhatsApp for quick support",
        action: {
            label: "+1 (234) 567-890",
            link: "https://wa.me/1234567890",
            style: "success",
        },
        meta: "Available: 9 AM - 6 PM EST",
        icon: "whatsapp",
    },
    {
        type: "In-App Chat",
        description: "Start a conversation directly within the application",
        action: {
            label: "Start Chat →",
            link: "/chat", // or direct in-app route
            style: "purple",
        },
        meta: "Online now",
        icon: "chat",
    },
];
const faqs = [
    {
      question: "Is my data safe and secure?",
      answer:
        "Yes, we use industry-standard encryption and security protocols to ensure your data is always safe and protected.",
    },
    {
      question: "Can I use this service for legal proceedings or court cases?",
      answer:
        "Our service is designed for informational and productivity purposes only. It should not be used as a substitute for official legal documentation or in court proceedings.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "We offer a 14-day refund policy for new subscriptions. If you’re not satisfied, you can cancel within 14 days for a full refund.",
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer:
        "You can easily upgrade or downgrade your plan from your account dashboard at any time. Changes take effect immediately.",
    },
    {
      question: "Do you offer technical support and training?",
      answer:
        "Yes, our team provides technical support via email, chat, and training resources to help you make the most of our service.",
    },
  ];
  
  const resources = [
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      action: {
        label: "Watch now →",
        link: "/tutorials", // update with actual video/tutorials route
      },
      icon: "video", // map to your video icon
      color: "green",
    },
    {
      title: "Community",
      description: "Connect with other users",
      action: {
        label: "Join forum →",
        link: "/community", // update with actual forum link
      },
      icon: "users", // map to your community icon
      color: "purple",
    },
    {
      title: "Report Bug",
      description: "Help us improve the platform",
      action: {
        label: "Report issue →",
        link: "/support/report-bug", // update with bug report form
      },
      icon: "bug", // map to bug icon
      color: "orange",
    },
  ];
  

export default function SupportCenter() {
  return (
 <main>
            <Header />
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get in touch with our support team or find answers to common questions</p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for help articles..."
                            className="w-full pl-10 pr-16 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-lg"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in touch</h1>
                    <p className="text-lg text-gray-600">Choose your preferred way to reach our support team</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        contactOptions.map((option) => (
                            <div key={option.type} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                        option.style === 'primary' ? 'bg-blue-100' :
                                        option.style === 'success' ? 'bg-green-100' :
                                        'bg-purple-100'
                                    }`}>
                                        {option.icon === 'mail' && (
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        )}
                                        {option.icon === 'whatsapp' && (
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                            </svg>
                                        )}
                                        {option.icon === 'chat' && (
                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        )}
                                    </div>
                                    <h2 className="text-lg font-semibold text-gray-900">{option.type}</h2>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                                <div className="space-y-2">
                                    <a 
                                        href={option.action.link} 
                                        className={`inline-flex items-center text-sm font-medium transition-colors ${
                                            option.style === 'primary' ? 'text-blue-600 hover:text-blue-700' :
                                            option.style === 'success' ? 'text-green-600 hover:text-green-700' :
                                            'text-purple-600 hover:text-purple-700'
                                        }`}
                                    >
                                        {option.action.label}
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                    <p className="text-xs text-gray-500">{option.meta}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg text-gray-600">Find quick answers to common questions</p>
                </div>
                <div className="space-y-4">
                    {
                        faqs.map((faq) => (
                            <FAQItem 
                                key={faq.question} 
                                question={faq.question} 
                                answer={faq.answer} 
                            />
                        ))
                    }
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Additional Resources</h1>
                    <p className="text-lg text-gray-600">Explore more ways to get help and connect</p>
                </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
               {
                    resources.map((resource) => (
                        <div key={resource.title} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${resource.color === 'green' ? 'bg-green-100' : resource.color === 'purple' ? 'bg-purple-100' : 'bg-orange-100'}`}>
                                    {resource.icon === 'video' && (
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {resource.icon === 'users' && (
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                        </svg>
                                    )}
                                    {resource.icon === 'bug' && (
                                        <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900">{resource.title}</h2>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                            <div className="space-y-2">
                                <a href={resource.action.link} className="inline-flex items-center text-sm font-medium transition-colors text-gray-900 hover:text-gray-700">
                                    {resource.action.label}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))
                }
        </div>
    </section>
            <Footer />
 </main>
  );
}