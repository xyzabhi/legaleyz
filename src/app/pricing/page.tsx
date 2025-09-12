"use client";

import GlossyBadge from "@/components/GlossyBadge";
import Toggle from "@/components/Toggle";
import Link from "next/link";
import { useState } from "react";


export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      features: ["10 pages per month", "200 MB Storage", "Basic risk detection"],
    },
    {
      name: "Starter",
      price: "₹99",
      features: ["100 pages per month", "1 GB Storage", "Advanced risk detection", "Tagging"],
    },
    {
      name: "Professional",
      price: "₹499",
      features: ["1000 pages per month", "5 GB Storage", "Advanced risk detection", "Tagging", "Customizable templates"],
    },
    {
      name: "Expert",
      price: "₹999",
      features: ["3000 pages per month", "10 GB Storage", "Advanced risk detection", "Tagging", "Customizable templates", "Dedicated support"],
    },
    {
      name: "Enterprise",
    },
  ];
  const [active, setActive] = useState("monthly");
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent</h1>
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="mb-8 text-lg text-gray-700">
          Choose the plan that fits your needs. No hidden fees, no surprises.
        </p>
        <div className="flex justify-center items-center gap-4 mt-4 mb-8">
          <span className={`text-base transition-colors duration-200 ${active === "monthly" ? "text-black" : "text-gray-500"}`}>Monthly</span>
          {/* <div className="flex items-center rounded-full p-1 cursor-pointer bg-blue-500" style={{ minWidth: 48 }} onClick={()=>{
            active === "monthly" ? setActive("yearly") : setActive("monthly");
          }}>
            <button className={`w-6 h-6 rounded-full ${active === "monthly" ? "bg-white" : ""} transition-colors duration-200`}></button>
            <button className={`w-6 h-6 rounded-full ${active === "yearly" ? "bg-white" : ""} transition-colors duration-200`}></button>
          </div> */}
          <Toggle active={active} setActive={setActive} />
          <span className={`flex items-center gap-2 text-base  transition-colors duration-200 ${active === "yearly" ? "text-black" : "text-gray-500"}`}>
            Yearly <span className="ml-1"><GlossyBadge /></span>
          </span>
        </div>

      </section>
      <footer className="border-t bg-gray-50 py-6 text-center text-sm text-gray-500 mt-12">
        <p>
          © {new Date().getFullYear()} Legaleyz · A product from {" "}
          <Link href="https://uupp.app" className="underline hover:text-black">uupp.app</Link>
        </p>
      </footer>
    </main>
  );
}
