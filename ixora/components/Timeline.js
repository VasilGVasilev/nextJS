import { lato } from "@/utils/fonts";
import { motion } from "framer-motion"

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const bubbleVariant = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
};

const Bubble = ({ title, subtitle, opacity, gradientDone }) => {
    const gradientDoneClass = gradientDone ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-ixora-orange from-10% via-orange-500 via-60% to-orange-400 to-100%';
    return (
      <motion.div 
        className={`m-5 p-5 h-36 w-36 lg:m-5 lg:h-52 lg:w-52 ${gradientDoneClass} text-white font-semibold flex justify-center items-center rounded-full`}  
        variants={bubbleVariant}
        style={{ opacity: opacity }}
        >
            <div className={`${lato.className} timelineBubble text-center`} >
                <div className="text-xl lg:text-2xl">
                    {title}
                </div>
                <div className="text-sm lg:text-base">
                    {subtitle}
                </div>
            </div>
      </motion.div>
    );
  };

const Timeline = () => {
    return (
        <motion.div
            className="grid grid-cols-2 bg-orange-50 sm:grid-cols-4 bg-no-repeat bg-cover justify-center items-center gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >

            <Bubble title={'Юни 2021'} subtitle={'Проектиране и регулация'} opacity={0.8} gradientDone={true}></Bubble>
            <Bubble title={'Юни 2022'} subtitle={'РС, строителна площадка и първа копка'} opacity={0.8} gradientDone={true}></Bubble>
            <Bubble title={'Март 2023'} subtitle={'Груб строеж завършен Акт 14'} opacity={0.8} gradientDone={true}></Bubble>
            <Bubble title={'Май 2025'} subtitle={'Въвеждане в експлоатация Акт 16'} opacity={1} gradientDone={false}></Bubble>

        </motion.div>

    )
}

export default Timeline
