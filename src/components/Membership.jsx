import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '₹1,500',
    features: ['Gym Access', 'Locker Room Access', 'Free Wi-Fi'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹3,500',
    features: ['All Basic Features', 'Group Classes', '1 Personal Training Session', 'Nutrition Guide'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '₹6,000',
    features: ['All Pro Features', 'Unlimited Personal Training', 'Massage Therapy', 'Priority Support'],
    highlight: false,
  },
];

const Membership = ({ openModal }) => {
  return (
    <section id="plans" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-bold tracking-widest uppercase mb-4"
          >
            Join the Elite
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Membership Plans
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlight
                  ? 'border-red-500 bg-white/10 scale-105 shadow-[0_0_30px_rgba(239,68,68,0.3)] z-10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              } transition-all duration-300 flex flex-col h-full`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <h4 className="text-2xl font-bold font-display text-white mb-2 text-center">
                {plan.name}
              </h4>
              <div className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                {plan.price}<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-red-500' : 'text-gray-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal(plan.name)}
                className={`w-full py-4 font-bold uppercase tracking-wider transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:shadow-lg hover:-translate-y-1'
                    : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
