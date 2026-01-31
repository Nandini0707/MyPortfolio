import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '../data';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © {new Date().getFullYear()} {profile.name}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-4 text-center">
                    <p className="text-gray-500 dark:text-gray-500 text-xs flex items-center justify-center gap-1">
                        Build with <Heart size={12} className="text-red-500 fill-red-500" /> by {profile.name}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
