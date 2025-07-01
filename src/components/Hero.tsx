import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, Dot } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    const { personal } = portfolioData;

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <div className="text-left">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Hi, I'm {" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {personal.name}
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-white mb-8 font-light">
                            {personal.title}
                        </p>

                        <p className="text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                            With over <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">{personal.experiences}</span> {personal.bio}
                        </p>

                        <div className="flex flex-col gap-4 text-left mb-10">
                            <div className="flex items-center gap-2">
                                <MapPin size={24} />
                                <span>Ho Chi Minh City, Viet Nam</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Dot size={24} className="text-green-700" />
                                <span>Available for new challenges</span>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <a href={personal.github} className="rounded-4xl p-2 bg-white hover:bg-blue-200 transition-colors">
                                <Image
                                    width={200}
                                    height={200}
                                    src={"/skills/github.svg"}
                                    alt="Github"
                                    className="size-6"
                                />
                            </a>
                            <a href={personal.linkedin} className="rounded-4xl p-2 bg-white hover:bg-blue-200 transition-colors">
                                <Image
                                    width={200}
                                    height={200}
                                    src={"/skills/linkedin.svg"}
                                    alt="Linkedin"
                                    className="size-6"
                                />
                            </a>
                            <a href={`mailto:${personal.email}`} className="rounded-4xl p-2 bg-white hover:bg-blue-200 transition-colors">
                                <Image
                                    width={200}
                                    height={200}
                                    src={"/skills/gmail.svg"}
                                    alt="Gmail"
                                    className="size-6"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="mb-8">
                        <Image
                            width={500}
                            height={500}
                            src={personal.avatar}
                            alt={personal.name}
                            className="size-80 rounded-full mx-auto mb-6 border-4 border-white shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero