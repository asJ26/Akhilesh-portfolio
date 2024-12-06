'use client';

import { cn } from "../../utils/cn";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { Card3D } from "./card-3d";
import { ButtonLitLink } from "./button-lit";
import { motion, AnimatePresence } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto auto-rows-[auto]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  skills,
  githubLink,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  skills?: string[];
  githubLink?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "row-span-1",
        className
      )}
    >
      <Card3D className="h-full overflow-hidden">
        <motion.div
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "project-card h-full rounded-xl group/bento cursor-pointer overflow-hidden",
            "bg-white dark:bg-[#030712]",
            "border border-neutral-200 dark:border-neutral-800",
            "relative transform-3d backface-hidden",
            "transition-[background,border,shadow] duration-300 ease-in-out",
            "flex flex-col",
            "dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]",
            "dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
            isExpanded ? "min-h-[28rem] md:min-h-[32rem]" : "h-[22rem] md:h-[24rem]"
          )}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
          }}
        >
          {/* Image Container */}
          <motion.div layout className="relative w-full h-48 overflow-hidden flex-shrink-0">
            <div className="absolute inset-0 z-10">
              {header}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 group-hover/bento:via-black/30 group-hover/bento:to-black/80 transition-colors duration-500" />
          </motion.div>

          {/* Content Container */}
          <motion.div layout className="flex flex-col flex-grow p-4">
            {/* Title */}
            <motion.h3 layout className="font-bold text-xl text-neutral-900 dark:text-white mb-2 line-clamp-1">
              {title}
            </motion.h3>

            {/* Description */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="text-neutral-600 dark:text-white/80 text-sm mb-4">
                    {description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Skills */}
            {skills && skills.length > 0 && (
              <motion.div layout className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-full 
                      bg-neutral-100 dark:bg-[#0A0F1A]
                      text-neutral-600 dark:text-white/90
                      border border-neutral-200 dark:border-neutral-800
                      transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Spacer to push GitHub button to bottom */}
            <motion.div layout className="flex-grow" />

            {/* GitHub Button */}
            {githubLink && (
              <motion.div layout onClick={(e) => e.stopPropagation()}>
                <ButtonLitLink
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/github"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span className="group-hover/github:rotate-[360deg] transition-transform duration-500">
                      <BsGithub className="w-5 h-5" />
                    </span>
                    <span className="text-sm font-medium group-hover/github:translate-x-1 transition-transform duration-200">
                      View on GitHub
                    </span>
                  </div>
                </ButtonLitLink>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </Card3D>
    </motion.div>
  );
};
