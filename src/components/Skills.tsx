import { portfolioData } from "@/data/portfolio";
import { Badge } from "./ui/badge";
import Image from "next/image";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Skills & <span className="text-blue-600">Expertise</span>
        </h2>

        <div className="mx-auto flex flex-col w-full items-center gap-8">
          {skills.map((skill, index) => {
            return (
              <div key={index} className="flex flex-col w-full items-center gap-4">
                <Badge variant="outline" className="px-3 py-2 rounded-4xl text-sm">{skill.group}</Badge>
                <div className="w-full px-4 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {skill.skills.map((s, index) => {
                    return (
                      <div className="flex flex-col items-center gap-2" key={index}>
                        <Image
                          width={200}
                          height={200}
                          src={s.image}
                          alt={s.name}
                          className="size-14"
                        />
                        <p>{s.name}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills