import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "Liquid Button" },
  { id: 2, title: "Mood Slider" },
  { id: 3, title: "Flip Clock" },
  { id: 4, title: "Shy Button" },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16 flex flex-col items-center">
      <h1 className="text-4xl font-semibold tracking-tight mb-14 opacity-90">
        Build Your UI in 60 Minutes
      </h1>

      {/* Container */}
      <div className="w-full max-w-3xl space-y-5">
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/project/${p.id}`}
            className="
              group block w-full
              p-6 rounded-2xl
              bg-white/4 
              backdrop-blur-md
              border border-white/[0.07]
              
              transition-all duration-300
              
              hover:bg-[#3b2926]/30 
              hover:border-[#5e4743]/60
              hover:shadow-[0_0_20px_rgba(90,60,50,0.25)]
              hover:-translate-y-1

              active:translate-y-0
              text-white no-underline
            "
          >
            <h2 className="text-xl font-medium tracking-wide flex items-center gap-2">
              <span className="opacity-90 group-hover:opacity-100 transition">
                {p.title}
              </span>

              {/* Modern subtle arrow */}
              <span className="text-[#c69f94] opacity-0 group-hover:opacity-100 translate-x-1.5 group-hover:translate-x-0.5 transition-all duration-300">
                →
              </span>
            </h2>

            {/* Subtle micro-description */}
            <p className="mt-1 text-sm text-neutral-400 opacity-70 group-hover:opacity-100 transition">
              Interactive motion component • 60 min build
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
