import { portfolioData } from "@/data/portfolio";
import { Mail } from "lucide-react";

const About = () => {
    const { personal, experience } = portfolioData;

    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    About <span className="text-blue-600">Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Tôi là một developer đam mê công nghệ với experience trong việc xây dựng
                            modern web applications. Tôi enjoy việc học hỏi technologies mới và
                            solve complex problems.
                        </p>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Chuyên môn của tôi tập trung vào React ecosystem, nhưng tôi cũng có
                            experience với backend technologies và database design.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="text-blue-600 mr-3" size={20} />
                                <span>{personal.email}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-blue-600 mr-3">📍</span>
                                <span>{personal.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Experience</h3>
                        {experience.map((exp, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg">
                                <h4 className="font-bold text-lg text-gray-800">{exp.position}</h4>
                                <p className="text-blue-600 font-medium">{exp.company}</p>
                                <p className="text-sm text-gray-600 mb-3">{exp.duration}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About