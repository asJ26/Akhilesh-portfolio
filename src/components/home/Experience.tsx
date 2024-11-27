'use client';

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "../../utils/cn";
import { CardHoverEffect } from "../ui/card-hover-effect";

interface Experience {
  title: string;
  company: string;
  location: string;
  type: string;
  date: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
   {
    title: "Graduate Research Assistant",
    company: "Syracuse university",
    location: "Syracuse, NY",
    type: "On-site",
    date: "July 2024 - Present",
    description: "Focused on developing predictive models and analyzing data to enhance decision-making and insights within academic research.",
    skills: ["Python", "Spark", "Azure", "PostgreSQL"],
  },
  {
    title: "Data Engineer",
    company: "PTC",
    location: "Boston, MA",
    type: "Remote",
    date: "July 2023 - July 2024",
    description: "Engineered scalable ETL/ELT pipelines and cloud solutions, enhancing data reliability and reducing costs by 25%, while ensuring seamless integration across diverse data systems in an agile environment.",
    skills: ["AWS", "Azure", "Kubernetes", "MongoDB", "Jenkins"],
  },
  {
    title: "Junior Data Engineer",
    company: "Sigma Infosolutions",
    location: "Bengaluru, INDIA",
    type: "Remote",
    date: "Jun 2020 - Jul 2022",
    description: "Utilized Apache Spark and Hadoop for large-scale data processing, reducing processing time by 30%, and managed robust data storage solutions on AWS S3 and Azure Synapse, enhancing data flow efficiency and compliance with HIPAA and GDPR.",
    skills: ["Apache Spark", "Hadoop", "AWS", "Azure", "Docker", "Kubernetes", "MongoDB", "Power BI", "Tableau"],
  },
];

const TechBadge = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm 
      bg-neutral-100 dark:bg-black/50
      text-neutral-600 dark:text-white
      border border-neutral-200 dark:border-neutral-800
      transition-colors duration-200
      whitespace-nowrap">
      {children}
    </div>
  );
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            Experience
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
            My professional journey in data engineering and analytics
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 sm:left-9 md:left-1/2 h-full w-[2px] bg-neutral-200 dark:bg-neutral-800" />
          
          {/* Animated Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-8 sm:left-9 md:left-1/2 h-full w-[2px] bg-gradient-to-b from-neutral-500 to-neutral-700 dark:from-purple-500/50 dark:to-purple-600/50"
          />

          <div className="relative space-y-8 sm:space-y-12">
            {experiences.map((experience, idx) => (
              <div key={idx} className="relative group md:grid md:grid-cols-2 md:gap-8">
                {/* Timeline Node */}
                <div className="absolute left-8 sm:left-9 md:left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-neutral-500/30 to-neutral-600/30 dark:from-purple-500/20 dark:to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-500" />
                    <div className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 border-neutral-500 dark:border-purple-500/50 bg-white dark:bg-black group-hover:border-neutral-600 dark:group-hover:border-purple-400 transition-colors duration-300" />
                  </div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "spring" }}
                  viewport={{ once: true }}
                  className={cn(
                    "ml-20 sm:ml-24 md:ml-0",
                    idx % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  )}
                >
                  <CardHoverEffect>
                    <div className="p-4 sm:p-6">
                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>

                      {/* Company, Location, and Date */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm text-neutral-600 dark:text-white/80 mb-3">
                        <div className="flex items-center gap-2 mb-1 sm:mb-0">
                          <span className="font-medium">{experience.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{experience.location}</span>
                        </div>
                        <span className="font-medium">{experience.date}</span>
                      </div>

                      {/* Type Badge */}
                      <div className="mb-3 sm:mb-4">
                        <span className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full
                          bg-neutral-100 dark:bg-black/50
                          text-neutral-600 dark:text-white
                          border border-neutral-200 dark:border-neutral-800">
                          {experience.type}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-neutral-700 dark:text-white/90 mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.skills.map((skill) => (
                          <TechBadge key={skill}>
                            {skill}
                          </TechBadge>
                        ))}
                      </div>
                    </div>
                  </CardHoverEffect>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
