import Link from "next/link";

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
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Legaleyz Pricing</h1>
        <p className="mb-8 text-lg text-gray-700">
          Simple, transparent pricing for every team size. Start for free, upgrade as you grow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`border rounded-lg bg-gray-50 flex flex-col justify-between items-center min-h-[420px] p-6 ${plan.name === "Professional" ? "border-2 border-black shadow-lg scale-105 bg-white" : ""}`}
            >
              <div className="w-full flex flex-col items-center flex-1">
                <h2 className="text-2xl font-semibold mb-2">{plan.name}</h2>
                {plan.price && (
                  <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-base font-normal">{plan.name !== "Free" && plan.name !== "Enterprise" && "/mo"}</span></div>
                )}
                {plan.features && (
                  <ul className="mb-6 text-left text-sm list-disc list-inside text-gray-700">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                )}
                {plan.name === "Enterprise" && (
                  <div className="mb-6 text-gray-600">Custom solutions for large organizations</div>
                )}
              </div>
              <div className="w-full flex flex-col items-center mt-4">
                {plan.name === "Free" && (
                  <Link href="/signup" className="inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">Get Started</Link>
                )}
                {plan.name === "Starter" && (
                  <Link href="/signup" className="inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">Start Starter</Link>
                )}
                {plan.name === "Professional" && (
                  <Link href="/signup" className="inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">Start Pro</Link>
                )}
                {plan.name === "Expert" && (
                  <Link href="/signup" className="inline-block rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800">Start Expert</Link>
                )}
                {plan.name === "Enterprise" && (
                  <Link href="/contact" className="inline-block rounded-md border border-black px-4 py-2 hover:bg-gray-100">Contact Sales</Link>
                )}
              </div>
            </div>
          ))}
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