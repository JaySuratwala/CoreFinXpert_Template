"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";

const socialHandles = [
    {
        id: 1,
        name: "Instagram",
        designation: "Jay Suratwala",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png", // Instagram Logo
        socialLinks: {
            instagram: "https://instagram.com/yourusername",
        },
    },
    {
        id: 2,
        name: "X",
        designation: "Jay Suratwala",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/28/X_icon_black.svg", // Twitter Logo
        socialLinks: {
            twitter: "https://twitter.com/yourusername",
        },
    },
    {
        id: 3,
        name: "GitHub",
        designation: "Jay Suratwala",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", // GitHub Logo
        socialLinks: {
            github: "https://github.com/yourusername",
        },
    },
    {
        id: 4,
        name: "LinkedIn",
        designation: "Jay Suratwala",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/LinkedIn_PNG16.png", // LinkedIn Logo
        socialLinks: {
            linkedin: "https://linkedin.com/in/yourusername",
        },
    },
    {
        id: 5,
        name: "Portfolio",
        designation: "Jay Suratwala",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Hoodiwala_Programmer.png", // Portfolio Logo
        socialLinks: {
            youtube: "https://youtube.com/channel/yourusername",
        },
    },
    {
        id: 6,
        name: "Facebook",
        designation: "Jay Suratwala",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", // Facebook Logo
        socialLinks: {
            facebook: "https://facebook.com/yourusername",
        },
    },
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center gap-12  w-full bg-black text-white border-white pb-4">
            <AnimatedTooltip items={socialHandles} />
        </div>
    );
}