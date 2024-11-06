"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.58 6.5h-1.34c-.172 0-.32.11-.375.273-.03.09-.154.406-.396.848-.26.497-.454.796-.581.923-.204.205-.437.35-.72.35H9.465c-.285 0-.52-.185-.635-.443-.05-.118-.168-.409-.35-.79-.273-.6-.454-1.014-.54-1.29-.073-.228-.023-.41.122-.554.145-.144.364-.21.643-.21H10.5c.53 0 .8-.244.8-.724v-.41c0-.29-.075-.511-.225-.665-.15-.153-.37-.23-.66-.23h-.8c-.33 0-.6-.27-.6-.6v-1.08c0-.33.27-.6.6-.6h.8c.33 0 .6-.27.6-.6v-.92c0-.33-.27-.6-.6-.6h-.8c-.33 0-.6-.27-.6-.6v-1.02c0-.33.27-.6.6-.6h1.58c.495 0 .906.407 1.082.917.004.01.01.02.015.03.005.01.01.02.016.03.025.04.06.1.1.173.14.232.36.55.672.94.31.39.69.884 1.144 1.465.455.58.877 1.106 1.263 1.577.1.13.17.253.206.37.017.062.03.125.036.185.008.082.01.16.01.23v.34c0 .33-.27.6-.6.6zm-2.86 9.5c-2.372 0-4.293 1.92-4.293 4.293s1.92 4.294 4.293 4.294 4.293-1.92 4.293-4.294-1.92-4.293-4.293-4.293z" /></svg>, // Facebook icon
    },
    {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6.929 2.929C6.413 2.414 5.702 2.476 5.345 2.835l-4.243 4.243a.999.999 0 0 0 0 1.414l9.9 9.9c.188.188.444.293.707.293h4.243c1.654 0 3-1.346 3-3V8.414a.999.999 0 0 0-1.707-.707l-9.899 9.899c-.188.188-.444.293-.707.293H7c-.551 0-1-.449-1-1V3c0-.256.098-.512.288-.703zm11.856 16.585A1 1 0 0 0 18 20h-2v-1.172l5.585-5.586L18 6.657V5h1c.551 0 1 .449 1 1v12c0 .34-.173.649-.433.829zM14 13.828l-2-2V7h1.586l2 2H15v2.828zM20 4h-4a1 1 0 0 0-1 1v4h2V7h2v4h2V5a1 1 0 0 0-1-1z" /></svg>, // Twitter icon
    },
    {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-11.59L13 13.83 11.59 12.4 7 17h10l-3.41-5.59z" /></svg>, // Instagram icon
    },
    {
        id: 4,
        name: "Emily Davis",
        designation: "UX Designer",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM6.93 7.5H8.5v2.08h2.08v1.57H8.5v2.08H6.93v-2.08H4.86v-1.57h2.07V7.5zm6.15 4.6h3.5v1.57h-3.5v-1.57zm0-2.08h3.5v1.57h-3.5V9.02z" /></svg>, // LinkedIn icon
    },
    {
        id: 5,
        name: "Tyler Durden",
        designation: "Soap Developer",
        image: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 16h-1l-.309-1.834C5.579 15.472 4 13.151 4 10.5 4 7.462 6.462 5 9.5 5c1.775 0 3.301 1.133 3.875 2.711C13.199 7.074 14.725 6 16.5 6c2.757 0 5 2.243 5 5s-2.243 5-5 5zm-1.947-5.977l.99 4.868c.076.372-.274.674-.58.482L7.498 15H10c.276 0 .5-.224.5-.5s-.224-.5-.5-.5H7.512l-.193-.977C6.689 12.979 6 11.778 6 10.5 6 8.567 7.567 7 9.5 7c1.421 0 2.541.874 3 2.112.202.542.736.888 1.327.888.349 0 .677-.134.924-.378.325-.332.459-.789.354-1.236l-.51-2.507c-.076-.372.274-.674.58-.482l2.342 1.59c.345.234.34.681-.008.908l-1.851 1.29z" /></svg>, // YouTube icon
    },
    {
        id: 6,
        name: "Dora",
        designation: "The Explorer",
        image: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" />
                <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm15.41 4L12 15.42 4.59 6H19.4zM4 19.4V8.58L12 17l8-8.57V19.4c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2z" />
            </svg>), // Reddit icon
    },
];
export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center gap-7 w-full bg-black">
            <AnimatedTooltip items={people} />
        </div>
    );
}
