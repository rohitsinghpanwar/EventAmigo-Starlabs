import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
function EventCard({data}) {
    return (
    <motion.div key={data.id}
     initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03, y: -5 }} className='border rounded-xl p-2 relative bg-gradient-to-tr backdrop-blur-xl bg-white/30 m-2'>
        <h1 className='font-semibold lg:w-full w-40'>{data.title}</h1>
        <span className=' absolute top-1 right-2 '>{data.type}</span>
        <div className='flex justify-between'>
        <h1>{data.location}</h1>
        <Link to={`/event/${data.id}`} className='border rounded p-1 hover:bg-black hover:text-white transition-all ease-in-out duration-200'>View Details→</Link>
        </div>
    </motion.div>
  )
}

export default EventCard