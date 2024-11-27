'use client';

import { motion } from 'framer-motion';
import { cn } from "../../utils/cn";
import { HiOutlineMail } from "react-icons/hi";
import { ButtonLitLink } from '../ui/button-lit';
import { CardHoverEffect } from '../ui/card-hover-effect';

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto px-4 sm:px-6">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto px-4 sm:px-6"
        >
          <CardHoverEffect>
            <div className="p-6 sm:p-8">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className={cn(
                  "w-14 h-14 sm:w-16 sm:h-16 rounded-full",
                  "bg-neutral-100 dark:bg-neutral-800",
                  "flex items-center justify-center",
                  "transition-colors duration-200"
                )}>
                  <HiOutlineMail className="w-7 h-7 sm:w-8 sm:h-8 text-neutral-900 dark:text-purple-400" />
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-base sm:text-lg font-medium text-neutral-900 dark:text-white">
                    Drop me a line at
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 break-all sm:break-normal">
                    akhileshjadhav26@gmail.com
                  </p>
                </div>

                <ButtonLitLink
                  href="mailto:akhileshjadhav26@gmail.com"
                  className="mt-2 sm:mt-4 px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base"
                >
                  <span className="flex items-center space-x-2">
                    <span>Mail Me</span>
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </ButtonLitLink>
              </div>
            </div>
          </CardHoverEffect>
        </motion.div>
      </div>
    </section>
  );
}
