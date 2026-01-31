import SectionWrapper from '../components/SectionWrapper';
import { profile } from '../data';
import { MapPin, Mail, Phone, Github, Linkedin, Calendar, Code } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-transparent">
            <h2 className="text-4xl font-bold text-white mb-12 text-center ml-10">About <span className="text-purple-500">Me</span></h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
                    <p>
                        {profile.bio}
                    </p>
                    <p>
                        I am passionate about building scalable, responsive, and user-friendly web applications. With a strong foundation in the MERN stack and a problem-solving mindset, I have solved <span className="text-purple-400 font-bold">300+ LeetCode problems</span> and actively participate in hackathons.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-3 text-gray-400">
                            <MapPin className="text-purple-500" size={20} />
                            <span>{profile.location}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Mail className="text-purple-500" size={20} />
                            <a href={`mailto:${profile.email}`} className="hover:text-white transition-colors">{profile.email}</a>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Phone className="text-purple-500" size={20} />
                            <span>{profile.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-400">
                            <Github className="text-purple-500" size={20} />
                            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">Github Profile</a>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/10 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold text-white mb-6">Quick Highlights</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <Code className="text-pink-500 mt-1" size={20} />
                            <span className="text-gray-300">Full Stack Developer (MERN)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Calendar className="text-pink-500 mt-1" size={20} />
                            <span className="text-gray-300">B.Tech in CS (2023 - Present)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Linkedin className="text-pink-500 mt-1" size={20} />
                            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white">Professional Network</a>
                        </li>
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
