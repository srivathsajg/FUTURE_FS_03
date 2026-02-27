import { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Why Us', id: 'why-gravity' },
    { name: 'Services', id: 'services' },
    { name: 'Transformation', id: 'gallery' },
    { name: 'Membership', id: 'plans' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-red-600 p-2 rounded-lg group-hover:bg-red-500 transition-colors">
            <Dumbbell className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            ACTIVE <span className="text-red-500">FITNESS</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('plans')}
            className="bg-white text-black px-6 py-2 font-bold uppercase text-sm hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 py-8 px-4 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="text-lg font-medium text-center text-gray-300 hover:text-white"
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('plans')}
              className="bg-red-600 text-white px-6 py-3 font-bold uppercase w-full"
            >
              Join Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
