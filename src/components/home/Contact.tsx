'use client';

import { motion } from 'framer-motion';
import { cn } from "../../utils/cn";
import { HiOutlineMail } from "react-icons/hi";
import { ButtonLitLink } from '../ui/button-lit';
import { CardHoverEffect } from '../ui/card-hover-effect';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <CardHoverEffect>
            <div className="p-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className={cn(
                  "w-16 h-16 rounded-full",
                  "bg-neutral-100 dark:bg-neutral-800",
                  "flex items-center justify-center",
                  "transition-colors duration-200"
                )}>
                  <HiOutlineMail className="w-8 h-8 text-neutral-900 dark:text-purple-400" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                    Drop me a line at
                  </h3>
                  <p className="text-neutral-600 dark:text-white/80">
                    akhileshjadhav26@gmail.com
                  </p>
                </div>

                <ButtonLitLink
                  href="mailto:akhileshjadhav26@gmail.com"
                  className="mt-4"
                >
                  Mail Me →
                </ButtonLitLink>
              </div>
            </div>
          </CardHoverEffect>
        </motion.div>
      </div>
    </section>
  );
}
