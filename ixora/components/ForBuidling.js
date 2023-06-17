import Link from "next/link"


const ForBuilding = () => {
    return (
        <>
        <Link href={'/description'}>
            <div className="bg-gradient-ixora py-4">
            <div className="text-white text-center text-3xl font-bold">Описание</div>
            </div>
        </Link>
        <div className="p-10 md:px-32 xl:px-72">
            <div className=" w-full h-fit ">

                <ul className="p-5 border-r-2 border-l-2 border-ixora-orange">
                    <p className="sm:text-lg text-ixora-orange font-semibold">Фасада</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Окачена, вентилируема, с каменна облицовка от варовик и декоративни елементи от композитен панел - еталбонд. Топлоизолация от каменна вата. </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Фоайе и общи части</p>
                    <li className="text-xs sm:text-sm text-white text-justify">По специален интериорен проект с каменно оформление от мрамор и оникс.</li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Дограма</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Алуминиева дограма от най-висок клас "WEISS PROFIL" THERMO PRO 85 с цвят антрацит. </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Асансьор</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Висок клас асансьор - КОНЕ. </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Врати</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Блиндирани входни врати SOLID с цвят дъб - модел "iDoor 20-22" Серия 50.</li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">ВиК</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Обезшумяваща канализационна система - Пайплайф MASTER 3</li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Отопление</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Централно газоснабдена сграда. Етаж 1 и 2 са заложени с висок клас енергоефективни радиатори тип Jaga. Етаж 3 и 4 са изпълнени с подово отопление със самостоятелен термостат за всяко помещение.  </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Гаражи</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Голям брой гаражи в сутерена и допълнителни паркоместа извън сградата. </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Сигурност</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Ограда. Контролиран достъп с чип и разпознаване на автомобилен номер. 24/7 жива охрана. </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Удобства</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Самостоятелен фитнес с уреди TECHNOGYM. Спа център с джакузи, парна баня и сауна, оборудвани с топли лежанки. </li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Комуникативна локация</p>
                    <li className="text-xs sm:text-sm text-white text-justify">🚗 С кола: <br /> ↪ 1 минута ресторант Проя и супермаркет Макс <br /> ↪ 3 минути BRITANICA Park School и няколко детски градини <br /> ↪ 4 минути супермаркет ФАНТАСТИКО <br /> ↪ 7 минути Paradise Center <br /> ↪ 9 минути Sofia Ring Mall </li>
                    <br />
                    <li className="text-xs sm:text-sm text-white text-justify">🚌 Публичен транспорт: <br /> Автобуси 68 и 98</li>
                    <br />
                    <p className="sm:text-lg text-ixora-orange font-semibold">Озеленяване</p>
                    <li className="text-xs sm:text-sm text-white text-justify">Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда. </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default ForBuilding
