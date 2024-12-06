'use client';

import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FloatingSkillProps {
  icon: any;
  name: string;
  color: string;
  className?: string;
}

export const FloatingSkill = ({ icon: Icon, name, color, className }: FloatingSkillProps) => {
  return (
    <div className={cn(
      "relative group",
      className
    )}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={cn(
          "skill-card w-16 h-16",
          "flex items-center justify-center",
          "rounded-xl",
          "bg-white dark:bg-[#030712]",
          "border border-neutral-200 dark:border-neutral-800",
          "shadow-sm hover:shadow-md",
          "transition-all duration-200",
          "cursor-pointer",
          "relative isolation-auto"
        )}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
          e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }}
      >
        <Icon 
          className="w-8 h-8 transition-colors duration-200" 
          style={{ color }}
        />
      </motion.div>

      {/* Tooltip */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2",
        "bottom-0 translate-y-full pb-2",
        "bg-neutral-900 dark:bg-white",
        "text-white dark:text-black",
        "px-3 py-1.5 rounded-lg",
        "text-sm font-medium",
        "whitespace-nowrap",
        "opacity-0 group-hover:opacity-100",
        "pointer-events-none",
        "shadow-xl",
        "transition-all duration-200",
        "z-[60]"
      )}>
        {name}
      </div>
    </div>
  );
};
