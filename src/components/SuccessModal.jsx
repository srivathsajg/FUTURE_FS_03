import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative z-10 w-full max-w-md bg-[#1a1a1f] border border-white/10 rounded-2xl shadow-2xl p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-green-500/20 p-4 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Request Received!
            </h3>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Thanks for choosing <span className="text-red-500 font-bold">Active Fitness</span>! We have received your request and will contact you shortly.
            </p>

            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold uppercase tracking-wider py-4 rounded-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
