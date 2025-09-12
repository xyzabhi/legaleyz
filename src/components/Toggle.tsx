export default function Toggle({ active, setActive }: { active: string, setActive: (active: string) => void }) {
    return (
      <div
        className="relative flex items-center rounded-full p-1 cursor-pointer bg-blue-500"
        style={{ width: 60, height: 32 }} // fixed size for smooth animation
        onClick={() => {
          setActive(active === "monthly" ? "yearly" : "monthly");
        }}
      >
        {/* Labels (optional) */}
        <span className="absolute left-2 text-xs text-white pointer-events-none"></span>
        <span className="absolute right-2 text-xs text-white pointer-events-none"></span>
  
        {/* Knob */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out`}
          style={{
            transform:
              active === "yearly" ? "translateX(28px)" : "translateX(0px)",
          }}
        ></div>
      </div>
    );
  }
  