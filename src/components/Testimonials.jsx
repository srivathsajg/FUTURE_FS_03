import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya S.',
    role: 'Member since 2023',
    rating: 5,
    content: "The best gym I've ever been to. The atmosphere is incredible and the trainers are top-notch.",
  },
  {
    name: 'Rahul K.',
    role: 'Transformation Client',
    rating: 5,
    content: "I lost 20kg in 4 months thanks to the personalized program. Active Fitness changed my life.",
  },
  {
    name: 'Sneha M.',
    role: 'Group Class Regular',
    rating: 5,
    content: "The group classes are intense but so much fun. The community here is so supportive!",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            What Members Say
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 rounded-xl relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wide">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
