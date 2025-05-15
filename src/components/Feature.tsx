"use client";
import { useEffect, useRef } from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";

export const Feature = ({
    title,
    description,
}: {
    title: string;
    description: string;
}) => {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black,transparent)`;

    const border = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const updateMousePostion = (e: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(e.x - borderRect.x);
            offsetY.set(e.y - borderRect.y);
        };

        window.addEventListener("mousemove", updateMousePostion);
        return () => {
            window.removeEventListener("mousemove", updateMousePostion);
        };
    });
    return (
        <div className="text-center relative border border-white/20 px-5 max-w-[340px] bg-zinc-950 sm:max-w-none mx-auto py-10 rounded-xl">
            <motion.div
                className="absolute inset-0 border-2 border-violet-600 rounded-xl"
                style={{
                    maskImage: maskImage,
                }}
                ref={border}
            ></motion.div>
            <div className=" inline-flex p-[18px] rounded-md bg-white text-black ">
                <EcosystemIcon />
            </div>
            <h3 className="mt-6 font-bold">{title}</h3>
            <p className="mt-2 text-white/70 tracking-tighter">{description}</p>
        </div>
    );
};
