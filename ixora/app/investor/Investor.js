'use client'

import Link from "next/link";
import Image from "next/image"
import { imageLoader } from "../imgLoader";

// export const metadata = {
//   title: 'Инвеститор - Ixora Residence',
// };

export const revalidate = 0; // revalidate this page every 60 seconds



export default function Investor() {

  

    return (
      <>

      <div>
        <div className="bg-ixora-orange py-4">
          <div className="text-white text-center pl-4 text-3xl font-bold">За инвеститора</div>
        </div>
        {/* Container for Investor Intro */}
        <div className="p-10 lg:px-64 space-y-10 bg-gray-900">
          {/* Container for Investor Logo and Name */}
          <div className="flex">
            <img src="/investor-logo.webp" alt="" className="h-20 w-50 rounded-lg" />
          </div>
          {/* Container for Description of Investor */}
          <div className="">
            <div className="text-gray-100">
              Creative Studio е строително-инвестиционно холдингово дружество, което финансира, проектира и изгражда луксозни многофамилни и еднофамилни жилищни сгради и ги реализира на пазара. 
            </div>
            <br />
            <div className="text-gray-100">
              Мотото на компанията при изпълнение на инвестиционните проекти гласи - "Creating Excellence" или "Създаване на съвършенство".
            </div>
          </div>
        </div>
        {/* Container for Recent Projects */}
        <div className="bg-white">
          <div className='bg-orange-300'>
            <div className="py-4 text-white text-center pl-4 text-2xl font-bold">Текущи проекти</div>
          </div>
          {/* Container for projects */}
          <div className="">

            {/* Container for Dalia*/}
            <div className="py-10">

              {/* Conatiner for name and description */}
              <div className="px-10 lg:pb-10">
                <Link href={'http://creativestudiobg.com/dahlia-house'}><div className="py-5 bg-white underline text-ixora-orange text-center text-xl italic font-mono hover:scale-105 duration-200">
                  Еднофамилна къща Далия
                </div></Link>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци. </div>
              </div>
              
              {/* Container for images */}
              <div className="bg-white px-10 w-full h-full flex-col justify-center space-y-5">
              {/* Container for image with overflow effect, this template to be used for subsequent pictures */}
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  {/* The CSS OVERFLOW property controls what happens to content that is too big to fit into an area. */}
                  <Image 
                    loader={imageLoader}
                    src="/dalia/dalia-one.webp"
                    alt="Dalia"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={4242}
                    height={2828} 
                  />
                </div>
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/dalia/dalia-two.webp"
                    alt="Dalia"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={2313}
                    height={1542} 
                  />
                </div>
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/dalia/dalia-three.webp"
                    alt="Dalia"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={4242}
                    height={2828} 
                  />
                </div>

              </div>

            </div>

            {/* Container for West End Luxury Houses*/}
            <div className="py-10">
              {/* Conatiner for name and description */}
              <div className="px-10  lg:pb-10">
                <div className="py-5 bg-white underline text-ixora-orange text-center text-xl italic font-mono">
                  Комплекс от къщи West End Luxury Houses
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">В процес на изграждане е луксозен комплекс от 18 самостоятелни еднофамилни къщи със собствени басейни в непосредствена близост до София -  само на 20 минути от центъра. Напълно автономно вилно селище със собствен водоизточник и допълнително соларно захранване.</div>
              </div>

              <div className="bg-white px-10 w-full h-full flex-col justify-center space-y-5">
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/west-end/west-end-one.webp"
                    alt="West-end"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={2400}
                    height={2400} 
                  />
                </div>
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/west-end/west-end-two.webp"
                    alt="West-end"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={2400}
                    height={1700} 
                  />
                </div>
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/west-end/west-end-three.webp"
                    alt="West-end"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={4000}
                    height={2000} 
                  />
                </div>

              </div>

            </div>
            
            {/* Container for Tilia Residence */}
            <div className="py-10">
              {/* Conatiner for name and description */}
              <div className="px-10 lg:pb-10">                
                <div className="py-5 bg-white underline text-ixora-orange text-center text-xl italic font-mono">
                  Жилищна сграда Tilia Residence
                </div>
                <div className="pb-5 bg-white text-gray-500 text-center text-sm font-medium font-mono lg:px-80">Модерна жилищна сграда в квартал Връбница с южно изложение в непосредствена близост до метростанция.</div>
              </div>

              <div className="bg-white px-10 w-full h-full flex-col justify-center space-y-5">
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/tilia/tilia-one.webp"
                    alt="Tilia"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={4946}
                    height={3216} 
                  />
                </div>
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/tilia/tilia-two.webp"
                    alt="Tilia"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={4946}
                    height={3342} 
                  />
                </div>
                <div className="w-[100%] h-[100%] lg:w-5/6 lg:h-5/6 overflow-hidden mx-auto ">
                  <Image 
                    loader={imageLoader}
                    src="/tilia/tilia-three.webp"
                    alt="Tilia"
                    className=" transition-transform duration-500 ease-in-out hover:scale-125 active:scale-125"
                    width={4946}
                    height={3341} 
                  />
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
      </>
    )
}
  