import { Dumbbell, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="bg-red-600 p-2 rounded-lg group-hover:bg-red-500 transition-colors">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tighter text-white">
                ACTIVE <span className="text-red-500">FITNESS</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6">
              Active Fitness is a premium strength & transformation center designed for serious enthusiasts. Defy your limits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-red-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-sky-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-red-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#why-gravity" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
              <li><a href="#membership" className="hover:text-red-500 transition-colors">Membership</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Personal Training</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Group Classes</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Nutrition Plans</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Online Coaching</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to get the latest updates and fitness tips.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
              />
              <button className="bg-red-600 text-white font-bold uppercase py-3 hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Active Fitness. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
