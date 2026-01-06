import React from "react";
import { motion } from "motion/react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm font-['Inter']">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-['Bebas_Neue'] tracking-wide mb-6">
              Let's Build Something <br/> Amazing Together.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md font-['Inter']">
              Have a project in mind? Looking for a partner who cares about your product as much as you do? Drop me a line.
            </p>

            <div className="space-y-6">
              <ContactItem icon={<Mail />} label="Email" value="hello@morpheus.dev" />
              <ContactItem icon={<Phone />} label="Phone" value="+919234567890" />
              <ContactItem icon={<MapPin />} label="Location" value="New Delhi, IN" />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-[#111] p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Name</label>
                  <input type="text" className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Email</label>
                  <input type="email" className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Subject</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Message</label>
                <textarea rows={5} className="w-full bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-black dark:text-white focus:outline-none focus:border-red-600 transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2 group">
                Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-4">
    <div className="p-3 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-bold text-lg text-black dark:text-white">{value}</p>
    </div>
  </div>
);
