import { lato } from "@/utils/fonts";
import { imageLoader } from "@/utils/imgLoader";
import { motion } from "framer-motion";
import Image from "next/image";
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const rowVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};
// TODO: motion.div animation apply
const ForBuilding = () => {
    return (
        <>
            <div
                className={`bg-orange-50 ${lato.className} p-10 md:px-32 xl:px-72`}
            >
                <div className=" w-full h-fit ">
                    <motion.ul
                        className="p-5 border-r-2 border-t-2 border-ixora-orange"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
                            <div className="h-fit xl:basis-1/2 xl:order-2">
                                <Image
                                    className="rounded-lg"
                                    loader={imageLoader}
                                    src="/premium-pics/for-building-1.jpg"
                                    alt="Ixora Plan"
                                    width={5000}
                                    height={2813}
                                ></Image>
                            </div>
                            <div className="h-fit xl:basis-1/2 xl:order-1 xl:border-b-2 border-t-2 border-ixora-orange">
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Фасада
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Окачена, вентилируема, с каменна
                                        облицовка от варовик и декоративни
                                        елементи от композитен панел - еталбонд.
                                        Топлоизолация от каменна вата.{" "}
                                    </li>
                                    <br />
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Фоайе и общи части
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        По специален интериорен проект с каменно
                                        оформление от мрамор и оникс.
                                    </li>
                                    <br />
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Дограма
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Алуминиева дограма от най-висок клас
                                        "WEISS PROFIL" THERMO PRO 85 с цвят
                                        антрацит.{" "}
                                    </li>
                                    <br />
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
                            <div className="h-fit xl:basis-1/2 xl:order-1">
                                <Image
                                    className="rounded-lg"
                                    loader={imageLoader}
                                    src="/premium-pics/for-building-2.jpg"
                                    alt="Ixora Plan"
                                    width={5000}
                                    height={2813}
                                ></Image>
                            </div>
                            <div className="h-fit xl:basis-1/2 xl:order-2 xl:border-b-2 border-t-2 border-ixora-orange">
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Асансьор
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Висок клас асансьор - КОНЕ.{" "}
                                    </li>
                                    <br />
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Врати
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Блиндирани входни врати SOLID с цвят дъб
                                        - модел "iDoor 20-22" Серия 50.
                                    </li>
                                    <br />
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        ВиК
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Обезшумяваща канализационна система -
                                        Пайплайф MASTER 3
                                    </li>
                                    <br />
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
                            <div className="h-fit xl:basis-1/2 xl:order-2">
                                <Image
                                    className="rounded-lg"
                                    loader={imageLoader}
                                    src="/premium-pics/for-building-3.jpg"
                                    alt="Ixora Plan"
                                    width={5000}
                                    height={2813}
                                ></Image>
                            </div>
                            <div className="h-fit xl:basis-1/2 xl:order-1 xl:border-b-2 border-t-2 border-ixora-orange">
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Отопление
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Централно газоснабдена сграда. Всички
                                        етажи са изпълнени с подово отопление
                                        със самостоятелен термостат за всяко
                                        помещение.{" "}
                                    </li>
                                    <br />
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Гаражи
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Голям брой гаражи в сутерена и
                                        допълнителни паркоместа извън сградата.{" "}
                                    </li>
                                    <br />
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Сигурност
                                    </p>
                                    <li className="text-sm sm:text-lg text-gray-700 font-bold text-justify">
                                        Ограда. Контролиран достъп с чип и
                                        разпознаване на автомобилен номер. 24/7
                                        жива охрана.{" "}
                                    </li>
                                    <br />
                                </motion.div>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row justify-center items-center gap-5">
                            <div className="h-fit xl:basis-1/2 xl:order-1">
                                <Image
                                    className="rounded-lg"
                                    loader={imageLoader}
                                    src="/premium-pics/for-building-4.jpg"
                                    alt="Ixora Plan"
                                    width={5000}
                                    height={2813}
                                ></Image>
                            </div>
                            <div className="h-fit xl:basis-1/2 xl:order-2 xl:border-b-2 border-t-2 border-ixora-orange">
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Удобства
                                    </p>
                                    <li className="text-sm  text-gray-700 font-bold text-justify">
                                        Самостоятелен фитнес с уреди TECHNOGYM.
                                        Спа център с джакузи, парна баня и
                                        сауна, оборудвани с топли лежанки.{" "}
                                    </li>
                                    <br />
                                </motion.div>

                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Озеленяване
                                    </p>
                                    <li className="text-sm  text-gray-700 font-bold text-justify">
                                        Вертикалната планировка по специален
                                        ландшафтен проект оформя зелен пояс
                                        около сградата, който създава усещане за
                                        живот в паркова среда.{" "}
                                    </li>
                                </motion.div>
                                <motion.div variants={rowVariant}>
                                    <p className="sm:text-xl text-ixora-orange font-semibold">
                                        Комуникативна локация
                                    </p>
                                    <li className="text-sm text-gray-700 font-bold text-justify">
                                        🚗 С кола: <br /> ↪ 1 минута ресторант
                                        Проя и супермаркет Макс <br /> ↪ 3
                                        минути BRITANICA Park School и няколко
                                        детски градини <br /> ↪ 4 минути
                                        супермаркет ФАНТАСТИКО <br /> ↪ 7 минути
                                        Paradise Center <br /> ↪ 9 минути Sofia
                                        Ring Mall{" "}
                                    </li>
                                    <li className="text-sm text-gray-700 font-bold text-justify">
                                        🚌 Публичен транспорт: <br /> Автобуси
                                        68 и 98
                                    </li>
                                </motion.div>
                            </div>
                        </div>
                    </motion.ul>
                </div>
            </div>
        </>
    );
};

export default ForBuilding;
