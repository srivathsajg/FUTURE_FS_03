import { motion } from 'framer-motion';

const CTA = () => {
  const scrollToPlans = () => {
    const section = document.getElementById('plans');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight uppercase"
        >
          Your Transformation Starts Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light"
        >
          Don't wait for the perfect moment. Take the first step towards a stronger, healthier you.
        </motion.p>
        <motion.button
          onClick={scrollToPlans}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-white text-red-600 px-10 py-5 font-bold uppercase tracking-widest text-lg rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Become a Member
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
