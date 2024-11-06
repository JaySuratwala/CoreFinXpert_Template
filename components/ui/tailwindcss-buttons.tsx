"use client";
import React from "react";
import { cn } from "@/utils/cn";

export const ButtonsCard = ({
    children,
    className,
    onClick,
}: {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "h-19  bg-black dark:border-white/[0.2] overflow-hidden relative flex items-center justify-center mt-6",
                className
            )}
        >
            <div className="relative z-40">{children}</div>
        </div>
    );
};
