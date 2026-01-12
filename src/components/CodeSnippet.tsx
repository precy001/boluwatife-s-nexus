import { motion } from "framer-motion";

export function CodeSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="rounded-xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm shadow-2xl shadow-primary/10">
        {/* Window header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-muted-foreground ml-2 font-mono">developer.tsx</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-sm leading-relaxed">
          <div>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-yellow-400">{"{"}</span>
          </div>
          <div className="pl-4">
            <span className="text-cyan-300">name</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">"Iyiade Boluwatife"</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-cyan-300">role</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">"Full-Stack Dev"</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-cyan-300">location</span>
            <span className="text-white">:</span>{" "}
            <span className="text-green-400">"Nigeria"</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-cyan-300">skills</span>
            <span className="text-white">:</span>{" "}
            <span className="text-yellow-400">[</span>
          </div>
          <div className="pl-8">
            <span className="text-green-400">"React"</span>
            <span className="text-white">,</span>{" "}
            <span className="text-green-400">"TypeScript"</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-8">
            <span className="text-green-400">"PHP"</span>
            <span className="text-white">,</span>{" "}
            <span className="text-green-400">"MySQL"</span>
          </div>
          <div className="pl-4">
            <span className="text-yellow-400">]</span>
            <span className="text-white">,</span>
          </div>
          <div className="pl-4">
            <span className="text-cyan-300">available</span>
            <span className="text-white">:</span>{" "}
            <span className="text-primary font-semibold">true</span>
            <span className="text-white">,</span>
          </div>
          <div>
            <span className="text-yellow-400">{"}"}</span>
            <span className="text-white">;</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
