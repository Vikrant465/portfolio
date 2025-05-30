import React from 'react'
import { motion } from "framer-motion"

function BackgroundCirlcles() {
  return (
    <motion.div 
    initial={{
      opacity: 1
      }}
    animate={{
        scale: [400,250,200,100,50],
        opacity: [0.1,0.2,0.4,0.6,0.7,0.1],
        borderRadius: ["20%","20%","50%","80%","20%"]
      }}
    transition={{
      duration: 5
      }}
    className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping' />
      <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping' />
      <div className='absolute rounded-full border border-[#F4AB07] opacity-20 h-[650px] w-[650px] animate-ping mt-52'></div>
      <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping' />
    </motion.div>
  )
}

export default BackgroundCirlcles