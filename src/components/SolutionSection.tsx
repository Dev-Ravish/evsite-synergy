
import { Brain, Zap, Map } from "lucide-react";

export const SolutionSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Powered Selection",
      description: "Smart location analysis for optimal charger placement",
    },
    {
      icon: Map,
      title: "Marketplace",
      description: "Connect providers with prime charging locations",
    },
    {
      icon: Zap,
      title: "Seamless Integration",
      description: "Easy booking and business management",
    },
  ];

  return (
    <div className="relative py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 hover:from-primary/10 hover:to-eco/10 transition-colors duration-300"
            >
              <div className="mb-4">
                <solution.icon className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {solution.title}
              </h3>
              <p className="text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
