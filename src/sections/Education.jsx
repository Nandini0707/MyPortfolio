import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const Education = () => {
    return (
        <SectionWrapper id="education" title="Education">
            <div className="max-w-4xl mx-auto space-y-8">
                {education.map((edu, index) => (
                    <motion.div
                        key={edu.institution}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative p-6 rounded-2xl glass card-shadow border border-white/20 dark:border-white/10"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-primary font-medium">{edu.degree}</p>
                                    <p className="text-sm font-semibold text-green-600 dark:text-green-400 mt-1">
                                        {edu.score}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                                <Calendar size={16} />
                                <span>{edu.year}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Education;
