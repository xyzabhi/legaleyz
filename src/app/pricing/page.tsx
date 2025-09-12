"use client";

import GlossyBadge from "@/components/GlossyBadge";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import Toggle from "@/components/Toggle";
import FAQItem from "@/components/FAQItem";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";


export default function Pricing() {
  const plans = [
    {
      name: "Free",
      priceMonthly: "₹0",
      priceYearly: "₹0",
      description: "Perfect for getting started",
      features: [
        "Basic AI document summary",
        "5 uploads per month",
        "Standard support",
        "Web access only"
      ],
      action_name: "Get Started",
      isPopular: false,
    },
    {
      name: "Pro",
      priceMonthly: "₹29",
      priceYearly: "₹24",
      description: "For professionals and power users",
      features: [
        "Advanced AI document analysis",
        "Unlimited uploads",
        "Priority support",
        "Mobile app access",
        "Export to multiple formats",
        "API access"
      ],
      action_name: "Start Free Trial",
      isPopular: true,  // marked Most Popular
    },
    {
      name: "Business",
      priceMonthly: "₹99",
      priceYearly: "₹79",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Admin dashboard",
        "Lawyer consultation credits",
        "Custom integrations",
        "24/7 dedicated support"
      ],
      action_name: "Contact Sales",
      isPopular: false,
    },
  ];


  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 14-day free trial for the Pro plan. No credit card required.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers for Business plans.",
    },
    {
      question: "How do lawyer consultations work?",
      answer:
        "Business plan includes 2 hours of consultation credits per month with our network of qualified lawyers.",
    },
  ];
  
  const [active, setActive] = useState("monthly");
  return (
    <main className="min-h-screen bg-white text-black">
      <Header/>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent</h1>
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="mb-8 text-lg text-gray-700">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4 mb-8">
          <span className={`text-base transition-colors duration-200 ${active === "monthly" ? "text-black" : "text-gray-500"}`}>Monthly</span>
          <Toggle active={active} setActive={setActive} />
          <span className={`flex items-center gap-2 text-base  transition-colors duration-200 ${active === "yearly" ? "text-black" : "text-gray-500"}`}>
            Yearly <span className="ml-1"><GlossyBadge text="Save 20%" /></span>
          </span>
        </div>
      </section>
      <section className="mx-auto w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-3/5 px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center items-stretch">
        {
          plans.map((plan, index) => (
            <PricingCard key={index} plan={{...plan, price: active === "monthly" ? plan.priceMonthly : plan.priceYearly, period: active}} />
          ))
        }
      </section>

<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
  <div className="text-center mb-12">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
    <p className="text-lg text-gray-600">Find quick answers to common questions</p>
  </div>
  <div className="space-y-4">
    {faqs.map((faq, index) => (
      <FAQItem 
        key={index} 
        question={faq.question} 
        answer={faq.answer} 
      />
    ))}
  </div>
</section>

      <Footer />
    </main>
  );
}
