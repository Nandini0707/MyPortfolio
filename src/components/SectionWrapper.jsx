import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => {
    return (
        <section id={id} className={`min-h-screen w-full flex flex-col justify-center items-center py-16 px-6 sm:px-12 relative overflow-hidden ${className}`}>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="max-w-7xl w-full z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
