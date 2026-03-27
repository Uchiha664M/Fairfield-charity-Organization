'use client';

import { motion } from 'framer-motion';

export function Logo({
    className = "",
    variant = "icon",
    dark = false
}: {
    className?: string;
    variant?: "icon" | "full" | "horizontal";
    dark?: boolean;
}) {
    const textColor = dark ? "text-white" : "text-[#1B3A5C]";

    const Icon = (
        <motion.div
            className={`relative flex items-center justify-center ${variant === 'icon' ? className : 'w-full h-full'}`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
            }}
        >
            <img
                src="/logo.png"
                alt="Fairfield Charity Organization Logo"
                className="w-full h-full object-contain"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
            />
        </motion.div>
    );

    if (variant === 'icon') {
        return Icon;
    }

    return (
        <div className={`flex items-center ${variant === 'full' ? 'flex-col gap-2' : 'flex-row gap-3'} ${className}`}>
            <div className={`${variant === 'full' ? 'w-24 h-24' : 'w-16 h-16'}`}>
                {Icon}
            </div>
            <div className={`flex flex-col ${variant === 'full' ? 'items-center text-center' : 'items-start text-left'}`}>
                <span className={`font-bold font-sans tracking-[0.2em] leading-none ${textColor} ${variant === 'full' ? 'text-2xl' : 'text-xl'}`}>
                    FAIRFIELD
                </span>
                <span className={`font-medium font-sans tracking-[0.1em] text-[0.6rem] md:text-[0.7rem] ${textColor} opacity-90`}>
                    CHARITY ORGANIZATION
                </span>
            </div>
        </div>
    );
}
