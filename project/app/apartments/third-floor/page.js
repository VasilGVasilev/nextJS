'use client'

import { useRef, useState } from "react";


export const metadata = {
  title: 'Трети етаж - Ixora Residence',
};

const sold = "hover:bg-red-700 hover:opacity-40 active:bg-red-700 active:opacity-40";
const available = "hover:bg-green-400 hover:opacity-40 active:bg-green-400 active:opacity-40 cursor-pointer";
const reserved = "hover:bg-blue-400 hover:opacity-40 active:bg-blue-400 active:opacity-40 cursor-pointer";



export default function thirdFloor() {

    const [apartment, setApartment] = useState(null);
    const myRef = useRef(null);

    const updateInfo = (currentAp) => {
      setApartment(s=>currentAp);
      myRef.current.scrollIntoView();

    }


    return (
      <>      
        <div ref={myRef} className='bg-orange-500'>
          <div className="py-4 text-white text-center text-2xl font-extrabold">Трети етаж</div>
        </div>
        <div className="p-5 bg-white">

          <div className="mb-5 pt-5 flex-col text-orange-500">
            {/* four static templates */}
            {/* default */}
            {apartment === null ? 
                <div className='mb-8 bg-orange-300'>
                  <div className="py-4 text-white text-center text-2xl font-extrabold">Площообразуване</div>
                </div>
              : null}
            {/* 12 */}

            {apartment === 12 ? 
            <>
              <div className='pb-10 bg-white'>
                <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - ап. 12</div>
              </div> 
              <div className="border-r-2 border-l-2 border-orange-500 text-center" >
                <div className="flex justify-center space-x-3 ">
                  <div>Площ</div>
                  <div className="text-black"></div>
                  <div className="font-bold">200,10 м²</div>
                </div>
                <div className="flex justify-center space-x-3 ">
                  <div>( ЗП</div>
                  <div className="text-black"></div>
                  <div className="font-bold">155,10 м²)</div>
                </div>
              </div>
            </>
            : null}

            {/* 11 */}

            {apartment === 11 ? 
            <>
              <div className='pb-10 bg-white'>
                <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - ап. 11</div>
              </div> 
              <div className="border-r-2 border-l-2 border-orange-500 text-center" >
                <div className="flex justify-center space-x-3 ">
                  <div>Площ</div>
                  <div className="text-black"></div>
                  <div className="font-bold">124,76 м²</div>
                </div>
                <div className="flex justify-center space-x-3 ">
                  <div>( ЗП</div>
                  <div className="text-black"></div>
                  <div className="font-bold">96,70 м²)</div>
                </div>
              </div>
            </>
            : null}


            {/* 10 */}
            
            {apartment === 10 ? 
            <>
              <div className='pb-10 bg-white'>
                <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - ап. 10</div>
              </div> 
              <div className="border-r-2 border-l-2 border-orange-500 text-center" >
                <div className="flex justify-center space-x-3 ">
                  <div>Площ</div>
                  <div className="text-black"></div>
                  <div className="font-bold">154,43 м²</div>
                </div>
                <div className="flex justify-center space-x-3 ">
                  <div>( ЗП</div>
                  <div className="text-black"></div>
                  <div className="font-bold">119,70 м²)</div>
                </div>
              </div>
            </>
            : null}

            {/* 9 */}

            {apartment === 9 ? 
            <>
              <div className='pb-10 bg-white'>
                <div className="text-orange-500 text-center text-2xl font-extrabold underline">Площообразуване - ап. 9</div>
              </div> 
              <div className="border-r-2 border-l-2 border-orange-500 text-center" >
                <div className="flex justify-center space-x-3 ">
                  <div>Площ</div>
                  <div className="text-black"></div>
                  <div className="font-bold">100,76 м²</div>
                </div>
                <div className="flex justify-center space-x-3 ">
                  <div>( ЗП</div>
                  <div className="text-black"></div>
                  <div className="font-bold">78,10 м²)</div>
                </div>
              </div>
            </>
            : null}

          </div>

          <div>
            <div className="relative inline-block">

              <div className={`absolute apartmentTwelve h-full w-full z-10 ${available}`} onClick={()=>updateInfo(12)}></div>
              <div className={`absolute apartmentEleven h-full w-full z-10 ${sold}`} onClick={()=>updateInfo(11)}></div>
              <div className={`absolute apartmentTen h-full w-full z-10 ${available} `} onClick={()=>updateInfo(10)}></div>
              <div className={`absolute apartmentNine h-full w-full z-10 ${available} `} onClick={()=>updateInfo(9)}></div>
              

              <img src="/plans/third-floor.webp" alt="Ixora Plan" className="relative" />

            </div>
          </div>
          <div className="py-7">
              <div className="flex justify-around">
                
                <div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-red-700 opacity-40"></div>
                  <div>Продаден</div>
                </div>

                <div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-green-400 opacity-40"></div>
                  <div>Свободен</div>
                </div>

                <div>
                  <div className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-blue-400 opacity-40"></div>
                  <div>Резервиран</div>
                </div>

              </div>
          </div>

        </div>
      </>
    )
}
  
