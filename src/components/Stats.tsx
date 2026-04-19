import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "95+", label: "Projects Done" },
  { value: "200%", label: "Client Satisfaction" },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-24 md:py-32 border-y border-stroke/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="text-6xl md:text-7xl lg:text-8xl font-display italic text-text-primary mb-4">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted uppercase tracking-[0.3em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
