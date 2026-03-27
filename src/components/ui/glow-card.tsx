'use client';

import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/components/ui/button';

export function GlowCard({ 
    children, 
    className, 
    accent = '#F5A623' 
}: { 
    children: ReactNode, 
    className?: string, 
    accent?: string 
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn("relative group overflow-hidden", className)}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px z-0 opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${accent}1A,
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
