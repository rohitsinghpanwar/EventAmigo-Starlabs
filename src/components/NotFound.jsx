import React from 'react'
import { Link } from 'react-router'
import notFound from '../assets/notfound.mp4'
function NotFound() {
  return (
    <div className='min-h-screen items-center justify-center flex flex-col bg-blue-200 text-xl font-semibold'>
        <video src={notFound} autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-md rounded-lg shadow-lg mb-6"></video>
        <h1>Hey, <span className='font-bold'>Amigo</span> Lost Your Path ?</h1>
         <p className="text-lg text-gray-700 mb-6">
        Looks like this page doesn’t exist. Let’s get you back on track!
      </p>
        <Link to={'/'} className='border rounded p-1'> Back to Home</Link>
    </div>
  )
}

export default NotFound