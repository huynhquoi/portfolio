import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { portfolioData } from "@/data/portfolio";

const Experiences = () => {
    const { experiences } = portfolioData
    return (
        <section id="experiences" className="py-20">
            <div className="container mx-auto py-4 rounded-3xl flex flex-col items-center">
                <Badge variant="outline" className="px-2 py-1 text-sm md:text-sm text-center mb-10 rounded-full">Experiences</Badge>

                <div className="space-y-6">
                    {experiences.map((experience, i) => {
                        return (
                            <Card key={i} className="w-full bg-slate-800 border-none">
                                <CardContent>
                                    <div className="w-full grid grid-cols-1 md:grid-cols-6 md:gap-12 items-center mx-auto">
                                        <div className="mx-auto">
                                            <Image
                                                width={200}
                                                height={200}
                                                src={experience.image}
                                                alt={experience.company}
                                                className="rounded-2xl size-30"
                                            />
                                        </div>

                                        <div className="col-span-4">
                                            <h3 className="font-bold text-lg mb-4">{experience.position}</h3>
                                            {experience.description.map((d, j) => {
                                                return (
                                                    <div key={j} className="text-sm mb-2">{d}</div>
                                                )
                                            })}
                                        </div>

                                        <div className="text-base text-gray-600">
                                            {experience.duration}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experiences