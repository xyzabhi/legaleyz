import GlossyBadge from "./GlossyBadge";

export default function PricingCard({ plan }: { plan: any }) {
  return (
    <div className={`relative rounded-xl border bg-white p-6 pt-10 text-left mx-auto w-full max-w-xs min-w-[260px] ${plan.isPopular ? "border-3 border-green-500" : "border border-gray-300"}`}>
      {plan.isPopular && (
        <div className="absolute left-1/2 -top-4 -translate-x-1/2 z-10">
          <GlossyBadge text="Most Popular" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
      <p className="text-center text-gray-500">{plan.description}</p>
      <p className="text-center text-4xl font-bold">
        {plan.price}
        {plan.period === "monthly" && <span className="text-base font-normal">/monthly</span>}
        {plan.period === "yearly" && <span className="text-base font-normal">/yearly</span>}
      </p>
      <button className="w-full bg-blue-600 text-white p-2 rounded-md mt-4 cursor-pointer">{plan.action_name}</button>
      <ul className="mt-4 space-y-2">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 text-green-500">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10.5L9 14.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}