"use client";

import Image from "next/image";
import { Tabs } from "../components/ui/tabs";
import Link from "next/link";

function ImageContainer({src,href}:{src : string; href : string}) {
    return (
        <Link href={href ?? ""} target="_blank">
            <Image
                src={src}
                alt="image"
                width={1000}
                height={1000}
                className="object-cover object-left-top h-[80%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
            />
            </Link>
    )
    
}
export function TabsDemo() {
    const tabs = [
        {
            title: "Product",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Info</p>
                    <ImageContainer src="" href="https://dhanxpert.com/?page_id=14" />
                </div>
            ),
        },
        {
            title: "Services",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Our Services</p>
                    <ImageContainer src="" href="" />
                </div>
            ),
        },
        {
            title: "Playground",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-custom-purple">
                    <p>Playground</p>
                    <ImageContainer src="" href="" />
                </div>
            ),
        },
        {
            title: "Content",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-custom-purple">
                    <p>Content Images</p>
                    <ImageContainer src="" href="" />
                </div>
            ),
        },
    ];
    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40 gap-10">
            <h2 className="font-bold text-5xl text-custom-purple">Project</h2>
            <Tabs tabs={tabs} />
        </div>
    );
}
