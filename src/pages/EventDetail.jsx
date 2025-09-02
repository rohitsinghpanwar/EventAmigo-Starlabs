import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import { EventContext } from '../Context/context'
import EventConfirmation from '../components/EventConfirmation';
function EventDetail() {
  const {id}=useParams();
  const {events}=useContext(EventContext);
  const event =events.find((e)=>e.id===parseInt
(id));
  const [show,setShow]=useState(false);
if(!event){
  return <h2>Event Not found</h2>
}
  return show ? (<EventConfirmation/>) : (<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 ">
  <div className="border border-white/20 rounded-2xl bg-white/30 backdrop-blur-md p-8 shadow-xl max-w-lg text-center italic text-red-950">
    <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
    <p className="text-lg mb-2"><span className="font-semibold">Type:</span> {event.type}</p>
    <p className="text-lg mb-2"><span className="font-semibold">Date:</span> {event.date}</p>
    <p className="text-lg mb-2"><span className="font-semibold">Location:</span> {event.location}</p>
    <p className="text-lg mb-2"><span className="font-semibold">Host:</span> {event.host}</p>
    <p className="text-lg mb-6">{event.description}</p>
    
    <button 
      onClick={() => setShow(!show)}
      className="px-6 py-2 rounded-full bg-indigo-500 text-white font-semibold"
    >
      Join Event
    </button>
  </div>
</div>

  )
}

export default EventDetail