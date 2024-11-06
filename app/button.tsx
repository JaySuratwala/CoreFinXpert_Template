"use client";
import React from "react";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "../components/ui/tailwindcss-buttons";

export function TailwindcssButtons() {
    return (
        <div>
            <Toaster position="top-center" />
            {buttons.map((button, idx) => (
                <ButtonsCard key={idx}>
                    {button.component}
                </ButtonsCard>
            ))}
        </div>
    );
}

export const buttons = [
    {
        name: "Submit",
        description: "Next.js Blue button for your website",
        component: (
            <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
                Submit
            </button>
        ),
    },
];