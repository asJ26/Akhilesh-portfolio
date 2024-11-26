'use client';

import { cn } from "../../utils/cn";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { Card3D } from "./card-3d";
import { ButtonLitLink } from "./button-lit";

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
        "grid md:auto-rows-[28rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
  return (
    <Card3D
      containerClassName={cn(
        "row-span-1",
        className
      )}
      className="h-full"
    >
      <div
        className={cn(
          "h-full rounded-xl group/bento",
          "bg-white dark:bg-[#030712]",
          "border border-neutral-200 dark:border-neutral-800",
          "relative transform-3d backface-hidden",
          "transition duration-300 ease-in-out",
          "flex flex-col",
          "dark:shadow-[0_0_15px_rgba(139,92,246,0.1)]",
          "dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        )}
      >
        {/* Image Container */}
        <div className="relative w-full h-48 rounded-t-xl overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 z-10">
            {header}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 group-hover/bento:via-black/30 group-hover/bento:to-black/80 transition-colors duration-500" />
        </div>

        {/* Content Container */}
        <div className="flex flex-col flex-grow p-4">
          {/* Title and Description */}
          <div>
            <h3 className="font-bold text-xl text-neutral-900 dark:text-white mb-2 line-clamp-1">
              {title}
            </h3>
            <p className="text-neutral-600 dark:text-white/80 text-sm line-clamp-2 mb-4">
              {description}
            </p>
          </div>

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
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
            </div>
          )}

          {/* Spacer to push GitHub button to bottom */}
          <div className="flex-grow" />

          {/* GitHub Button */}
          {githubLink && (
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
          )}
        </div>
      </div>
    </Card3D>
  );
};
