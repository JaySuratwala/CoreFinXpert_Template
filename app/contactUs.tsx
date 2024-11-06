"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TailwindcssButtons } from "./button";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-[45rem] w-full bg-black relative flex flex-col items-center justify-center antialiased ">
            <div className="max-w-2xl mx-auto p-4  mb-5">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Contact Us
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We&apos;re here for you! Let us know how we can assist you with any questions you may have.
                </p>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="b9a10c29-9aef-4c24-b260-15939a0f4dd0" />
                    <input type="text" name="name" placeholder="Your Name" className="rounded-lg border border-neutral-800 focus:ring-2 text-white focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" required />
                    <input type="number" name="contact" placeholder="Your Contact Number" className="rounded-lg border border-neutral-800 focus:ring-2 text-white focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 " style={{ WebkitAppearance: "none", MozAppearance: "textfield", appearance: "textfield" }} required />
                    <input type="text" name="email" placeholder="info@corefinexperts.com" className="rounded-lg border border-neutral-800 focus:ring-2 text-white focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" required />
                    <textarea name="message" placeholder="Your Message" className="rounded-lg border border-neutral-800 focus:ring-2 text-white focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"></textarea>
                    <TailwindcssButtons />
                </form>
            </div>
            <BackgroundBeams />
        </div>
    );
}
