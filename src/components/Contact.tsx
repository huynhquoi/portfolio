"use client"

import { portfolioData } from "@/data/portfolio";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const Contact = () => {
    const { personal } = portfolioData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = () => {
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Get In <span className="text-blue-600">Touch</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                        <p className="text-gray-700 mb-8 leading-relaxed">
                            Tôi đang open cho opportunities mới và exciting projects.
                            Hãy contact tôi nếu bạn muốn discuss về project hoặc just say hi!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <Mail className="text-blue-600 mr-4" size={20} />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-gray-600">{personal.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-blue-600 mr-4 text-xl">📱</span>
                                <div>
                                    <p className="font-medium">Phone</p>
                                    <p className="text-gray-600">{personal.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <span className="text-blue-600 mr-4 text-xl">📍</span>
                                <div>
                                    <p className="font-medium">Location</p>
                                    <p className="text-gray-600">{personal.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-4 mt-8">
                            <a href={personal.github} className="text-gray-600 hover:text-blue-600 transition-colors">
                                <Github size={24} />
                            </a>
                            <a href={personal.linkedin} className="text-gray-600 hover:text-blue-600 transition-colors">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                ></textarea>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact