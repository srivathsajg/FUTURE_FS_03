import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SuccessModal from './SuccessModal';

const MembershipModal = ({ isOpen, onClose, selectedPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: '',
    goal: '',
    experience: '',
    time: '',
    email: '',
    medical: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone Number must be exactly 10 digits';
    }
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (parseInt(formData.age) < 14) {
      newErrors.age = 'You must be at least 14 years old';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.goal) newErrors.goal = 'Fitness Goal is required';
    if (!formData.experience) newErrors.experience = 'Gym Experience is required';
    if (!formData.time) newErrors.time = 'Preferred Workout Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission (since we are just showing the alert now)
    setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        
        // Close Form Modal first
        handleClose();

        // Show Success Modal
        setShowSuccessModal(true);
    }, 500);
  };

  const handleClose = () => {
    setFormData({
        name: '',
        phone: '',
        age: '',
        gender: '',
        goal: '',
        experience: '',
        time: '',
        email: '',
        medical: '',
    });
    setErrors({});
    setSubmitStatus(null);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl bg-[#1a1a1f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1a1a1f] sticky top-0 z-20">
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Join <span className="text-red-500">Active Fitness</span>
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Selected Plan: <span className="text-white font-bold">{selectedPlan}</span>
                </p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Basic Details */}
                <div className="space-y-4">
                  <h4 className="text-red-500 font-bold uppercase tracking-wider text-sm border-b border-white/5 pb-2">
                    Basic Details
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors`}
                        placeholder="9876543210"
                        maxLength={10}
                      />
                      {errors.phone && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.phone}</p>}
                    </div>

                    {/* Age */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Age *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.age ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors`}
                        placeholder="25"
                        min="14"
                      />
                      {errors.age && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.age}</p>}
                    </div>

                    {/* Gender */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.gender ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.gender}</p>}
                    </div>
                  </div>
                </div>

                {/* Fitness Details */}
                <div className="space-y-4">
                  <h4 className="text-red-500 font-bold uppercase tracking-wider text-sm border-b border-white/5 pb-2">
                    Fitness Profile
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Fitness Goal */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Fitness Goal *</label>
                      <select
                        name="goal"
                        value={formData.goal}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.goal ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none`}
                      >
                        <option value="">Select Goal</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Muscle Gain">Muscle Gain</option>
                        <option value="General Fitness">General Fitness</option>
                        <option value="Strength Training">Strength Training</option>
                        <option value="Fat Loss">Fat Loss</option>
                      </select>
                      {errors.goal && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.goal}</p>}
                    </div>

                    {/* Experience */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Experience Level *</label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.experience ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none`}
                      >
                        <option value="">Select Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                      {errors.experience && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.experience}</p>}
                    </div>
                  </div>
                </div>

                {/* Optional Details */}
                <div className="space-y-4">
                  <h4 className="text-gray-500 font-bold uppercase tracking-wider text-sm border-b border-white/5 pb-2">
                    Additional Info (Optional)
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-1">
                      <label className="text-sm text-gray-400">Preferred Time *</label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full bg-black/30 border ${errors.time ? 'border-red-500' : 'border-white/10'} rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none`}
                      >
                        <option value="">Select Time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                      {errors.time && <p className="text-red-500 text-xs flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.time}</p>}
                    </div>
                  </div>

                  {/* Medical Condition */}
                  <div className="space-y-1">
                    <label className="text-sm text-gray-400">Medical Conditions (if any)</label>
                    <textarea
                      name="medical"
                      value={formData.medical}
                      onChange={handleChange}
                      rows="3"
                      className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                      placeholder="Any injuries or health concerns..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold uppercase tracking-wider py-4 rounded-lg hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 mt-6"
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>Start Transformation <CheckCircle className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
      </AnimatePresence>
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </>
  );
};

export default MembershipModal;
