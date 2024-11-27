'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "../../utils/cn";
import { 
  SiPython, SiApachespark, SiApachekafka, SiApachehadoop, SiApachehive,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiSnowflake,
  SiAmazon, SiGooglecloud, SiMicrosoftazure,
  SiApacheairflow, SiDocker, SiKubernetes
} from 'react-icons/si';
import { 
  FaDatabase, FaNetworkWired, FaWarehouse, FaWater, 
  FaStream
} from 'react-icons/fa';

const skills = [
  // Core Data Engineering
  { name: 'Data Modeling', icon: FaDatabase, color: '#4299E1' },
  { name: 'ETL/ELT', icon: FaNetworkWired, color: '#48BB78' },
  { name: 'Data Warehousing', icon: FaWarehouse, color: '#9F7AEA' },
  { name: 'Data Lakes', icon: FaWater, color: '#4FD1C5' },
  { name: 'Data Pipelines', icon: FaStream, color: '#F6AD55' },

  // Key Technologies
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'Apache Kafka', icon: SiApachekafka, color: '#231F20' },
  { name: 'Hadoop', icon: SiApachehadoop, color: '#FF652F' },
  { name: 'Hive', icon: SiApachehive, color: '#FDEE21' },

  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },

  // Cloud & Infrastructure
  { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0089D6' },
  { name: 'Airflow', icon: SiApacheairflow, color: '#017CEE' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            My Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto px-2 sm:px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className={cn(
                "p-2 sm:p-3 md:p-4 rounded-lg",
                "bg-white hover:bg-neutral-50",
                "dark:bg-[#030712] dark:hover:bg-[#111827]",
                "border border-neutral-200",
                "hover:border-neutral-300",
                "dark:border-neutral-800/50 dark:hover:border-purple-500/50",
                "overflow-hidden transition-all duration-200",
                "flex flex-col items-center justify-center gap-2 sm:gap-3",
                "shadow-sm hover:shadow",
                "group"
              )}
            >
              <skill.icon 
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <span className={cn(
                "text-xs sm:text-sm font-medium text-center",
                "text-neutral-600 group-hover:text-neutral-900",
                "dark:text-white/80 dark:group-hover:text-white",
                "leading-tight"
              )}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
