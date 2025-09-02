import { createContext,useMemo,useState } from "react";
import eventList from '../data/data.json'
export const EventContext=createContext();

export default function EventProvider({children}){
    const [events,setEvents]=useState(eventList.events)
    const [filters,setFilters]=useState({
        search:"",
        type:"",
        location:"",
        date:""
    })
    const fileteredEvents=useMemo(()=>{
        return events.filter(event=>{
        const matchSearch = filters.search
        ? event.title.toLowerCase().includes(filters.search.toLowerCase())
        : true;
        const matchType = filters.type ? event.type === filters.type : true;
        const matchLocation = filters.location ? event.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
        const matchDate = filters.date ? event.date === filters.date : true;
        return matchType && matchLocation && matchDate && matchSearch;
        })
    },[filters,events])

    const addEvent=(event)=>{
        setEvents((prev)=>[...prev,event])
    }
    return (
        <EventContext.Provider value={{events,fileteredEvents,filters,setFilters,addEvent}} >
            {children}
        </EventContext.Provider>
    )
}
