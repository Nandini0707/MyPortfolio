import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { profile } from '../data';
import SectionWrapper from '../components/SectionWrapper';

const Hero = () => {
    return (
        <SectionWrapper id="home" className="pt-32">
            <div className="flex flex-col items-center text-center z-10">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                >
                    <img
                        src={`https://ui-avatars.com/api/?name=${profile.name.replace(" ", "+")}&background=7c3aed&color=fff&size=256`}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <h2 className="text-gray-500 dark:text-gray-400 text-lg uppercase tracking-widest mb-2 font-medium">Hello, I'm</h2>
                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                        {profile.name}
                    </span>
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light mb-8">
                    {profile.role}
                </h3>

                <p className="max-w-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
                    {profile.bio}
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <a
                        href="/resume.pdf"
                        download
                        className="px-8 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition-all shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-2"
                    >
                        Download Resume
                    </a>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary/10 font-bold transition-all cursor-pointer flex items-center justify-center"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
