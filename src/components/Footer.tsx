import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
                    <p className="text-gray-400 mb-6">
                        Built with React, Next.js, and Tailwind CSS
                    </p>

                    <div className="flex justify-center space-x-6 mb-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    <p className="text-gray-400 text-sm">
                        © 2024 Portfolio. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer