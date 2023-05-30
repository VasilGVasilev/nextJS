'use client'

import { useRef, useState } from "react";
import { imageLoader } from "@/app/imgLoader";
import Image from "next/image";


export const metadata = {
  title: 'Паркинг - Ixora Residence',
};

export const revalidate = 0; // revalidate this page every 60 seconds


const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function firstFloor() {

    const [unit, setUnit] = useState({
      mqsto: null,
      plosht: null,
    });

    const myRef = useRef(null)
    
    const updateInfo = (mqsto, plosht) => {
      setUnit({
        mqsto,
        plosht,
      });
      myRef.current.scrollIntoView();

    }

    return (
      <>
        <div ref={myRef} className='bg-orange-500'>
          <div className=" py-4 text-white text-center text-2xl font-extrabold">Гаражи</div>
        </div>
        <div className="p-5 xl:px-40 bg-white">

          <div className="pt-5 flex-col text-orange-500">
              {/* default template */}
              {unit.mqsto === null ?
                <div className='mb-8 bg-orange-300'>
                  <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване</div>
                </div> 
              : 
              <>
                <div className='pb-10 bg-white'>
                  <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - {unit.mqsto}</div>
                </div> 
                <div className="mb-5 border-r-2 border-l-2 border-orange-500 text-center" >
                  <div className="flex justify-center space-x-3 ">
                    <div>Площ</div>
                    <div className="font-bold">{unit.plosht} м²</div>
                  </div>
                </div> 
              </>
              }
              
          </div>

          <div className="relative inline-block">

            <div className={`absolute parkOutOne h-full w-full z-20 ${available}`} onClick={() => updateInfo('паркомясто 1', 20.8)}></div>
            <div className={`absolute parkOutTwo h-full w-full z-20 ${sold}`} onClick={() => updateInfo(null)}></div>
            <div className={`absolute parkOutThree h-full w-full z-20 ${sold}`} onClick={() => updateInfo(null)}></div>

            <div className={`absolute parkingOne h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 1', 20.0)}></div>
            <div className={`absolute parkingTwo h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 2', 18.8)}></div>
            <div className={`absolute parkingThree h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 3', 19.6)}></div>
            <div className={`absolute parkingFour h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 4', 19.2)}></div>
            <div className={`absolute parkingFive h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 5', 16.6)}></div>
            <div className={`absolute parkingSix h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 6', 16.6)}></div>
            <div className={`absolute parkingSeven h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 7', 19.2)}></div>
            <div className={`absolute parkingEight h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 8', 19.2)}></div>
            <div className={`absolute parkingNine h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 9', 19.2)}></div>
            <div className={`absolute parkingTen h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 10', 22.2)}></div>
            <div className={`absolute parkingEleven h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 11', 43.0)}></div>
            <div className={`absolute parkingTwelve h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 12', 19.2)}></div>
            <div className={`absolute parkingThirteen h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 13', 19.2)}></div>
            <div className={`absolute parkingFourteen h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 14', 33.7)}></div>
            <div className={`absolute parkingFifteen h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 15', 30.6)}></div>
            <div className={`absolute parkingSixteen h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 16', 18.8)}></div>
            <div className={`absolute parkingSeventeen h-full w-full z-20 ${available}`} onClick={() => updateInfo('гараж 17', 19.9)}></div>


            {/* <img src="/plans/parking.webp" alt="Ixora Plan" className="relative" /> */}

            <div className='relative '>
              <Image 
                loader={imageLoader}
                src='/plans/parking.webp'
                alt="Ixora Plan"
                width={3509}
                height={4967}   
              ></Image>
            </div>
          
          </div>

        </div>
      </>
    )
}
  