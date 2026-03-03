'use client'

import Image from "next/image"
import { imageLoader } from "../../utils/imgLoader";
import Timeline from "@/components/Timeline";
import ForBuilding from "@/components/ForBuidling";
import Maps from "@/components/Location";
import { motion } from "framer-motion";
import BuildingProcess from "@/components/BuildingProcess";

export const revalidate = 0; // revalidate this page every 60 seconds

const buildingProcessLayout = "pb-10 px-5 h-full w-full lg:h-96 flex justify-center"

const imagesAct14 = [
    {
        original: "/buildProcess/act14/buildProcessOne.webp",
        thumbnail: "/buildProcess/act14/buildProcessOne.webp",
    },
    {
        original: "/buildProcess/act14/buildProcessTwo.webp",
        thumbnail: "/buildProcess/act14/buildProcessTwo.webp",
    },
    {
        original: "/buildProcess/act14/buildProcessThree.webp",
        thumbnail: "/buildProcess/act14/buildProcessThree.webp",
    },
    {
        original: "/buildProcess/act14/buildProcessFour.webp",
        thumbnail: "/buildProcess/act14/buildProcessFour.webp",
    },
    {
        original: "/buildProcess/act14/buildProcessFive.webp",
        thumbnail: "/buildProcess/act14/buildProcessFive.webp",
    },
    {
        original: "/buildProcess/act14/buildProcessSix.webp",
        thumbnail: "/buildProcess/act14/buildProcessSix.webp",
    },
];

const imagesBeforeAct15 = [
    {
        original: "/buildProcess/pre-act15/Image1.webp",
        thumbnail: "/buildProcess/pre-act15/Image1.webp",
    },
    {
        original: "/buildProcess/pre-act15/Image2.webp",
        thumbnail: "/buildProcess/pre-act15/Image2.webp",
    },
    {
        original: "/buildProcess/pre-act15/Image3.webp",
        thumbnail: "/buildProcess/pre-act15/Image3.webp",
    },
    {
        original: "/buildProcess/pre-act15/Image4.webp",
        thumbnail: "/buildProcess/pre-act15/Image4.webp",
    },
    {
        original: "/buildProcess/pre-act15/Image5.webp",
        thumbnail: "/buildProcess/pre-act15/Image5.webp",
    },
    {
        original: "/buildProcess/pre-act15/Image6.webp",
        thumbnail: "/buildProcess/pre-act15/Image6.webp",
    },
    {
        original: "/buildProcess/pre-act15/Image7.webp",
        thumbnail: "/buildProcess/pre-act15/Image7.webp",
    },
];

const imagesAct15 = [
    {
        original: "/buildProcess/act15/image0.webp",
        thumbnail: "/buildProcess/act15/image0.webp",
    },
    {
        original: "/buildProcess/act15/image1.webp",
        thumbnail: "/buildProcess/act15/image1.webp",
    },
    {
        original: "/buildProcess/act15/image2.webp",
        thumbnail: "/buildProcess/act15/image2.webp",
    },
    {
        original: "/buildProcess/act15/image3.webp",
        thumbnail: "/buildProcess/act15/image3.webp",
    },
    {
        original: "/buildProcess/act15/image4.webp",
        thumbnail: "/buildProcess/act15/image4.webp",
    },
    {
        original: "/buildProcess/act15/image5.webp",
        thumbnail: "/buildProcess/act15/image5.webp",
    },
    {
        original: "/buildProcess/act15/image6.webp",
        thumbnail: "/buildProcess/act15/image6.webp",
    },
    {
        original: "/buildProcess/act15/image7.webp",
        thumbnail: "/buildProcess/act15/image7.webp",
    },
    {
        original: "/buildProcess/act15/image8.webp",
        thumbnail: "/buildProcess/act15/image8.webp",
    },
    {
        original: "/buildProcess/act15/image9.webp",
        thumbnail: "/buildProcess/act15/image9.webp",
    },
];

const imagesBeforeAct16 = [
    {
        original: "/buildProcess/pre-act16/image0.webp",
        thumbnail: "/buildProcess/pre-act16/image0.webp",
    },
    {
        original: "/buildProcess/pre-act16/image1.webp",
        thumbnail: "/buildProcess/pre-act16/image1.webp",
    },
    {
        original: "/buildProcess/pre-act16/image2.webp",
        thumbnail: "/buildProcess/pre-act16/image2.webp",
    },
    {
        original: "/buildProcess/pre-act16/image3.webp",
        thumbnail: "/buildProcess/pre-act16/image3.webp",
    },
    {
        original: "/buildProcess/pre-act16/image4.webp",
        thumbnail: "/buildProcess/pre-act16/image4.webp",
    },
    {
        original: "/buildProcess/pre-act16/image5.webp",
        thumbnail: "/buildProcess/pre-act16/image5.webp",
    },
];

export const BuildPic = ({url}) => {
    return (
        <motion.div
            className={buildingProcessLayout}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, scale: 0.1 },
                visible: { opacity: 1, scale: 1 },
            }}
        >
            <Image
                loader={imageLoader}
                src={url}
                alt="Build Process"
                width={1600}
                height={1200}
            >
            </Image>
        </motion.div>
    )
}

export default function Description() {

    return (
        <>

            {/* DESCRIPTION */}
            <motion.div
                className="bg-gradient-ixora"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white py-4 text-center text-3xl font-bold truncate">За сградата</div>
            </motion.div>

            <ForBuilding></ForBuilding>

            {/* TIMELINE */}
            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Етапи</div>
            </motion.div>

            <Timeline></Timeline>

            {/* BUILDING PROGRESS */}
            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Пред Акт 16</div>
            </motion.div>

            <BuildingProcess images={imagesBeforeAct16}></BuildingProcess>

            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Акт 15</div>
            </motion.div>

            <BuildingProcess images={imagesAct15}></BuildingProcess>
            
            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Пред Акт 15</div>
            </motion.div>

            <BuildingProcess images={imagesBeforeAct15}></BuildingProcess>


            <motion.div
                className="bg-gradient-ixora py-4"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: '100%' }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                <div className="text-white text-center text-3xl font-bold">Акт 14</div>
            </motion.div>

            <BuildingProcess images={imagesAct14}></BuildingProcess>


            {/* AKT 16 - future vision */}
            <>
                <motion.div
                    className="bg-gradient-ixora py-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 0.9, duration: 1 }}
                >
                    <div className="text-white text-center text-2xl font-bold">Изберете Вашия бъдещ дом</div>
                </motion.div>
                <div className="bg-ixora-img-description h-60 bg-center bg-cover bg-no-repeat bg-white md:min-h-[32rem] md:grid md:place-items-center md:bg-fixed md:bg-no-repeat md:bg-cover md:bg-center md:opacity-75">
                </div>
            </>

            {/* LOCATION*/}
            <div>

                <motion.div
                    className="bg-gradient-ixora py-4"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <div className="text-white text-center text-2xl font-bold">Местоположение</div>
                </motion.div>
                <Maps></Maps>
            </div>

        </>
    )
}
