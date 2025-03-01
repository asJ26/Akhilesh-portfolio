"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            Software Developer | Full Stack Engineer | Data Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center w-full order-2 lg:order-1 pt-4"
            >
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[2rem] bg-black dark:bg-gradient-to-r dark:from-purple-600 dark:to-pink-600 opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
                <div className="relative aspect-square w-[280px] sm:w-[320px] rounded-[2rem] overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 transition-transform duration-300 transform group-hover:scale-105">
                  <Image
                    src="/images/profile.png"
                    alt="Profile Picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 320px"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <div className="space-y-6 max-w-xl text-center order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-justify"
              >
                <p className="text-neutral-700 dark:text-white/90 mb-4">
                  I&apos;m a versatile Software Developer with over 3 years of experience building distributed systems that seamlessly integrate front-end and back-end technologies. My journey through the tech landscape has been marked by crafting microservices architectures, RESTful APIs, and cloud-native solutions across AWS and GCP environments. From developing fraud detection systems with LLM integration at Citi to spearheading manufacturing workflow automation at PTC, I&apos;ve consistently delivered solutions that enhance performance and user experience.
                </p>
                <p className="text-neutral-700 dark:text-white/90 mb-6">
                  My technical arsenal includes Java, React, Spring Boot, and Node.js, complemented by expertise in containerization through Docker and Kubernetes. I thrive in the DevOps ecosystem, implementing CI/CD pipelines that significantly reduce deployment times while maintaining system reliability. Whether optimizing database performance through Hibernate ORM and Redis caching or designing event-driven architectures with Apache Kafka, I approach each challenge with a focus on scalability, security, and innovation. With a foundation in both Computer Science education and practical industry experience, I continue to bridge technological gaps and create user-centric solutions that drive business value.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 max-w-3xl mx-auto px-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <Stat label="Years Experience" value="3+" />
              <Stat label="Projects Completed" value="15+" />
              <Stat label="Technologies" value="20+" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-[#030712] p-6 rounded-xl
        border border-neutral-200 dark:border-neutral-800
        hover:border-neutral-300 dark:hover:border-purple-500/50
        transition duration-300"
    >
      <div className="text-3xl font-bold text-neutral-900 dark:text-purple-400">
        {value}
      </div>
      <div className="text-sm text-neutral-600 dark:text-white/80 mt-1">
        {label}
      </div>
    </motion.div>
  );
}
