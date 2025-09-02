import React, { useState } from 'react'
import EventCard from '../components/EventCard'
import { useContext } from 'react'
import { EventContext } from '../Context/context'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'
function Home() {
    const {fileteredEvents}=useContext(EventContext)
    const [showForm,setShowForm]=useState(false);
  return (
    <div className='bg-gradient-to-br from-indigo-200 min-h-screen'>
        <h1 className='font-bold italic text-3xl text-center text-red-950 h-10'>EventAmigo</h1>
        <Filter/>
        <div className='border lg:p-10 lg:m-10 p-1 m-2'>
        <div className='flex justify-between font-semibold text-lg lg:text-xl items-center'>
        <h1>Local Events</h1>
        <Link to={"/create"} className='border px-2 py-1 rounded hover:bg-black hover:text-white transition-all ease-in-out duration-200
        '>+ Create New Event</Link>
        </div>
{fileteredEvents.length > 0 ? (
          <div className="">
            {fileteredEvents.map((event) => (
              <EventCard key={event.id} data={event} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-6">
            No events found. Try adjusting filters.
          </p>
        )}
        </div>
    </div>
  )
}

export default Home