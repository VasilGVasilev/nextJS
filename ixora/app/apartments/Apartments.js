'use client'

import Plan from '@/components/Plan';
import PlanButtons from '@/components/PlanButtons';
import { motion } from 'framer-motion';

export const revalidate = 0; // revalidate this page every 60 seconds


export default function Apartments() {



    return (
      <>


        <motion.div 
          className='bg-gradient-ixora'
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 1 }}
          >
          <div className="py-4 text-white text-center text-3xl font-bold">Разпределение</div>
        </motion.div>

        {/* FLOOR BTNS */}


        <PlanButtons classNameProps={'p-5 flex justify-around bg-ixora-dark'}></PlanButtons>


        {/* FLOOR PLAN */}
        
        <div className="p-4 pt-0 bg-gradient-to-b from-ixora-dark from-10% via-ixorafrom-ixora-dark via-70% to-[#2e281f] to-90% flex">
          <Plan></Plan>
        </div>
      </>
    )
}
  
