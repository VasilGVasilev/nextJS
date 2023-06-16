'use client'

import './globals.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { imageLoader } from './imgLoader'
import { lato, playfair } from './fonts'
import useMediaQuery from './hooks/useMediaQuery'
import Navbar from './Navbar'
import { usePathname } from 'next/navigation'
import Footer from './Footer'

// TODO: use framer motion scroll to remove whole navbar on init and intial scroll makes the navbar appear 


export default function RootLayout({ children }) {
  const pathName = usePathname();
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && pathName === '/') {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toTopHandle = () => {
    window.scrollTo(0, 0);
  }
  
// #837667
// #716657
// #464646
  return (
    
    <html lang="bg-ixora-dark" className={`scroll-smooth ${lato.className}`}>
      <body className='bg-ixora-dark'>

        <Navbar
          isTopOfPage={isTopOfPage}
        />
 
        {/* fixed navbar requires py same for all non home pages */}
        {pathName === '/' ? (<></>) : (
        <div className='py-[7%] sm:py-[5%] md:py-[2.5%] bg-ixora-dark'></div>
        )}
        <main className='app'>
          {children}
        </main>
        <Footer toTopHandle={toTopHandle}/>
      </body>
  </html>
  )
}