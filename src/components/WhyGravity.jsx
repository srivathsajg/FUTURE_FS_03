import { motion } from 'framer-motion';
import { Award, Dumbbell, Users, Target } from 'lucide-react';

const WhyGravity = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: 'Certified Coaches',
      description: 'Train with the best. Our elite coaches are certified to guide your transformation.',
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-orange-500" />,
      title: 'Advanced Equipment',
      description: 'State-of-the-art machinery and free weights for a premium workout experience.',
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: 'Personalized Programs',
      description: 'Custom tailored workout and nutrition plans designed for your specific goals.',
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Community Support',
      description: 'Join a community of like-minded individuals pushing each other to greatness.',
    },
  ];

  return (
    <section id="why-gravity" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-red-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Redefine Your Limits
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card group hover:-translate-y-2"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGravity;
