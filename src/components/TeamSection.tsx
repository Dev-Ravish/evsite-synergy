
import { Card, CardContent } from "@/components/ui/card";
import { LinkedIn } from "lucide-react";

export const TeamSection = () => {
  const team = [
    {
      name: "Deeptansh",
      role: "Co-Founder",
      image: "https://placehold.co/400x400/0066FF/FFFFFF/png",
    },
    {
      name: "Ravish",
      role: "Co-Founder",
      image: "https://placehold.co/400x400/34D399/FFFFFF/png",
    },
    {
      name: "Shishir",
      role: "Co-Founder",
      image: "https://placehold.co/400x400/0066FF/FFFFFF/png",
    },
  ];

  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-eco bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <button className="text-primary hover:text-primary/80 transition-colors">
                  <LinkedIn className="h-5 w-5" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
