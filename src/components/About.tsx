import Image from "next/image";
import { Badge } from "./ui/badge";

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto p-4 bg-slate-800 rounded-3xl flex flex-col items-center">
                <Badge variant="outline" className="px-2 py-1 text-sm md:text-sm text-center mb-10 rounded-full">About me</Badge>

                <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="space-y-6 flex items-start justify-center">
                        <Image
                            width={200}
                            height={200}
                            src={"/personal-pic-2.jpg"}
                            alt="Huynh Van Quoi"
                            className="size-80 rounded-full border-2 border-white"
                        />
                    </div>
                    <div>
                        <p className="text-white mb-6 leading-relaxed">
                            🌟I’m a dedicated front-end and aspiring full-stack developer with a proven track record of delivering high-quality, user-focused web applications. Since starting my journey in web development in 2022, I’ve worked extensively with modern technologies like React.js, Vue.js, TypeScript, Tailwind CSS, and Node.js—transforming concepts into intuitive, high-performance digital products.
                        </p>
                        <p className="text-white mb-6 leading-relaxed">
                            Over the past three years, I’ve contributed to diverse projects, including gamification platforms for major brands like HDBank and Skyjoy, as well as scalable event engagement systems designed to handle thousands of concurrent users. My experience spans both front-end development—building seamless, responsive interfaces—and back-end engineering, designing RESTful APIs and robust services with NestJS and Redis.
                        </p>
                        <p className="text-white mb-6 leading-relaxed">
                            I’m passionate about clean code, performance optimization, and creating products that feel effortless to use. Beyond coding, I enjoy collaborating with cross-functional teams, solving complex challenges, and continuously growing my skill set to stay ahead of the curve.
                        </p>
                        <p className="text-white mb-8 leading-relaxed">
                            🚀 I’m open to new opportunities of all kinds—whether you’re looking for a committed full-time developer or a freelance partner to bring your next project to life. If you value technical expertise, creativity, and a results-driven mindset, I’d love to connect and explore how we can work together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About