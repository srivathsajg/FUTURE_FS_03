import { motion } from 'framer-motion';

const services = [
  {
    title: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop',
    description: 'Build raw power and muscle with our advanced strength protocols.',
  },
  {
    title: 'Fat Loss Programs',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    description: 'High-intensity interval training designed to shred fat and boost metabolism.',
  },
  {
    title: 'Personal Training',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop',
    description: '1-on-1 coaching with elite trainers to maximize your results.',
  },
  {
    title: 'Nutrition Coaching',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
    description: 'Fuel your body right with personalized meal plans and guidance.',
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Premium Services
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-red-500 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="w-12 h-1 bg-red-500 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
