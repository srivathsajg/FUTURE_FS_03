import { motion } from 'framer-motion';

const TrustBar = () => {
  const stats = [
    { label: 'Active Members', value: '500+' },
    { label: 'Certified Trainers', value: '8+' },
    { label: 'Years of Excellence', value: '5' },
    { label: 'Transformations', value: '1000+' },
  ];

  return (
    <section className="bg-background py-10 border-b border-white/5 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                {stat.value}
              </h3>
              <p className="text-sm md:text-base text-gray-400 uppercase tracking-widest mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
