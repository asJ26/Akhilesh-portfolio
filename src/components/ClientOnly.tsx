"use client";

import { useEffect, useState } from "react";

export default function ClientOnly({ 
  children,
  fallback = <></>
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return fallback;
  return isMobile ? fallback : children;
}
