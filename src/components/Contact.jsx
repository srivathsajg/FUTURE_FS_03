import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-red-500 font-bold tracking-widest uppercase mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Visit Active Fitness
            </h3>
            <p className="text-gray-400 mb-12 text-lg leading-relaxed">
              Ready to start your journey? Contact us or visit our facility to experience the difference.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-full text-red-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Our Location</h4>
                  <p className="text-gray-400">Housing Board, Chikkamaluru - 577102, Karnataka</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-full text-red-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-white/10 p-4 rounded-full text-red-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">info@activefitness.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group">
            <iframe
              src="https://maps.google.com/maps?q=Active+Fitness+Chikkamagaluru+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            {/* Clickable Overlay */}
            <a 
              href="https://maps.app.goo.gl/MsWvNvXVFPo4uY4S8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center cursor-pointer"
            >
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919019792834"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 transition-transform duration-300 animate-bounce"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Contact;
