import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { noto } from "@/utils/fonts";
import { HiExternalLink } from "react-icons/hi";

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

const PromptToPlan = () => {
    return (
        <div
            className="flex group justify-center items-center relative before:absolute before:top-[3%] before:left-[1%]
        before:w-full before:h-full before:border-r-2 before:border-b-2 before:border-ixora-orange before:z-[-1]"
        >
            {/* Parallax effect on hover */}
            <Link href={"/apartments"}>

            <div className="relative">
                    <Image
                        className="transition-transform duration-700 ease-in-out hover:scale-105"
                        loader={imageLoader}
                        src="/premium-pics/apartments-bottom-home-bg.jpg"
                        alt="Ixora Plan"
                        width={5000}
                        height={2813}
                    ></Image>
                {/* Overlay text */}

                <motion.div
                    className={`absolute inset-0 flex items-center justify-center ${noto.className} welcomeTextOnImg text-white text-bold text-center text-[45px] md:text-[80px] xl:text-[150px]`}
                    variants={containerGalleryPrompt}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.span variants={letterVariant}>А</motion.span>
                    <motion.span variants={letterVariant}>П</motion.span>
                    <motion.span variants={letterVariant}>А</motion.span>
                    <motion.span variants={letterVariant}>Р</motion.span>
                    <motion.span variants={letterVariant}>Т</motion.span>
                    <motion.span variants={letterVariant}>А</motion.span>
                    <motion.span variants={letterVariant}>М</motion.span>
                    <motion.span variants={letterVariant}>Е</motion.span>
                    <motion.span variants={letterVariant}>Н</motion.span>
                    <motion.span variants={letterVariant}>Т</motion.span>
                    <motion.span variants={letterVariant}>И</motion.span>
                </motion.div>
            </div>
            </Link>

        </div>
    );
};

export default PromptToPlan;
