"use client";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "../utils/imgLoader";
import LineGradient from "../components/LineGradient";
import Maps from "@/components/Location";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import { motion } from "framer-motion";
import PromptToPlan from "@/components/PromptToPlan";
import WelcomeText from "@/components/WelcomeText";
import { noto, playfair } from "@/utils/fonts";
import { useInView } from "react-intersection-observer";

export const revalidate = 0; // revalidate this page every 60 seconds
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
        },
    },
};

const containerGalleryPrompt = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const letterVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div>
            {/* WELCOME VIDEO */}

            <div className="relative">
                <video
                    className="w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source
                        src="/trimmed-videos/video-1.webm"
                        type="video/webm"
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Tilted text in the upper right corner */}
                <div
                    className="absolute top-10 sm:top-24 left-5 z-20"
                    style={{ transform: "rotate(-30deg)" }}
                >
                    <span className="bg-ixora-orange text-white px-4 py-2 font-bold sm:text-5xl shadow-lg rounded-md select-none">
                        С АКТ 16
                    </span>
                </div>

                <div className="absolute bottom-[15%] left-0 w-full h-full flex items-end justify-center ">
                    <motion.div
                        className={`welcomeTextOnImg text-white font-bold text-center text-2xl md:text-4xl lg:text-6xl xl:text-[80px]`}
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.span variants={letterVariant}>
                            Вашият
                        </motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>
                            луксозен
                        </motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>нов</motion.span>
                        <motion.span variants={letterVariant}> </motion.span>
                        <motion.span variants={letterVariant}>дом</motion.span>
                    </motion.div>
                </div>
            </div>
                
            {/* WELCOME TEXT AND IMG */}
            <div className="lg:flex lg:justify-between lg:items-center lg:p-10 bg-orange-50">
                {/* WELCOME TEXT */}
                <div className="lg:basis-[30%]">
                    <div className={` p-10`}>
                        <motion.div
                            className="py-5 text-ixora-orange text-left text-3xl font-extrabold"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            Ixora Luxury Residence:{" "}
                        </motion.div>
                        <WelcomeText></WelcomeText>
                    </div>
                </div>

                {/* GALLERY */}
                <motion.div
                    className="lg:basis-[70%] "
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div
                        className="p-5 md:p-10 relative before:absolute before:top-[3%] before:left-[1%]
                    before:w-full before:h-full before:border-l-2 before:border-t-2 before:border-[#f83600] before:z-10"
                    >
                        {/* Parallax effect on hover */}
                        <div className="relative w-full h-fit overflow-hidden mx-auto z-20 group">
                            <Link href={"/gallery"}>
                                <div className="relative">
                                    <video
                                        className="w-full h-full"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    >
                                        <source
                                            src="/trimmed-videos/video-2.webm"
                                            type="video/webm"
                                        />
                                        Your browser does not support the video
                                        tag.
                                    </video>
                                    {/* Overlay text */}

                                    <motion.div
                                        className={`absolute inset-0 flex items-center justify-center ${noto.className} welcomeTextOnImg text-white text-center text-[80px] xl:text-[120px]`}
                                        variants={containerGalleryPrompt}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <motion.span variants={letterVariant}>
                                            Г
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            а
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            л
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            е
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            р
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            и
                                        </motion.span>
                                        <motion.span variants={letterVariant}>
                                            я
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* TIMELINE */}
            {/* <Timeline></Timeline> */}

            <div ref={ref}>
                {inView && (
                    <video
                        className="w-full h-full"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                    >
                        <source
                            src="/trimmed-videos/video-3.webm"
                            type="video/webm"
                        />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

            {/* DESCRIPTION */}
            <ForBuilding></ForBuilding>

            {/* PROMPT IMG TO PLAN */}
            <PromptToPlan></PromptToPlan>

            {/* LOCATION */}
            <>
                <Maps></Maps>
            </>
        </div>
    );
}
