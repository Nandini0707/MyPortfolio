import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { profile } from '../data';
import SectionWrapper from '../components/SectionWrapper';

const Contact = () => {
    return (
        <SectionWrapper id="contact" title="Get In Touch">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-primary/10 text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <a href={`mailto:${profile.email}`} className="text-lg font-bold hover:text-primary transition-colors">
                                    {profile.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-primary/10 text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                <p className="text-lg font-bold">{profile.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 rounded-full bg-primary/10 text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p className="text-lg font-bold">{profile.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:text-primary transition-all"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl glass hover:text-primary transition-all"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Quick Message / CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl glass border border-white/20 dark:border-white/10"
                >
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 focus:outline-none focus:border-primary transition-colors"
                            ></textarea>
                        </div>
                        <button className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
