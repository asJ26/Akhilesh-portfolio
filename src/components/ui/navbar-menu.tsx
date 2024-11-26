'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "../../utils/cn";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export const NavbarMenu = () => {
  const { theme, setTheme } = useTheme();
  
  const menuItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <div className="fixed top-5 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "text-2xl font-signature",
              "text-neutral-900 dark:text-white",
              "hover:text-neutral-600 dark:hover:text-purple-400",
              "transition-colors duration-300",
              "z-50"
            )}
          >
            AJ
          </Link>

          {/* Menu Items and Theme Toggle */}
          <div className="flex items-center justify-end space-x-4">
            <div className="flex flex-row items-center justify-center space-x-2 
              bg-white/50 dark:bg-[#030712]/50 
              border border-neutral-200 dark:border-neutral-800
              rounded-full p-2 px-4 backdrop-blur-md">
              {menuItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={cn(
                    "relative flex items-center",
                    "text-neutral-600 dark:text-white/90",
                    "hover:text-neutral-900 dark:hover:text-purple-400",
                    "px-3 py-2 rounded-full",
                    "hover:bg-neutral-100/50 dark:hover:bg-purple-500/[0.08]",
                    "text-sm font-medium",
                    "transition-colors duration-200"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-full",
                "bg-white/50 dark:bg-[#030712]",
                "border border-neutral-200 dark:border-neutral-800",
                "text-neutral-600 dark:text-white",
                "hover:bg-neutral-100/80 dark:hover:bg-purple-500/[0.08]",
                "dark:hover:border-purple-500/50",
                "transition-all duration-200",
                "backdrop-blur-md"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default NavbarMenu;
