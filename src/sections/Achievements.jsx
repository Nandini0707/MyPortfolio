import React from 'react';
import { motion } from 'framer-motion';
import { achievements, certifications } from '../data';
import { Trophy, Award, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const Achievements = () => {
    return (
        <SectionWrapper id="achievements" title="Achievements & Certifications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Achievements */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Trophy className="text-yellow-500" />
                        Major Achievements
                    </h3>
                    <ul className="space-y-4">
                        {achievements.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 p-4 rounded-xl glass border border-white/10"
                            >
                                <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Certifications */}
                <div>
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Award className="text-primary" />
                        Certifications
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4 rounded-xl glass border border-white/10 hover:border-primary/50 transition-colors"
                            >
                                <p className="text-gray-800 dark:text-white font-bold">{cert}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Achievements;
