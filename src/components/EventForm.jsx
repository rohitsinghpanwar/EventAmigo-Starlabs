import React, { useState, useContext } from 'react';
import { EventContext } from '../Context/context';
import { Link } from 'react-router-dom'
function EventForm() {
  const { addEvent } = useContext(EventContext);
  const [formDetails, setFormDetails] = useState({
    id: '',
    title: '',
    type: '',
    host: '',
    description: '',
    location: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...formDetails, id: Date.now() };
    addEvent(newEvent);
    setFormDetails({
      id: '',
      title: '',
      type: '',
      host: '',
      description: '',
      location: '',
      date: '',
    });
  };

  return (
    <div className="flex flex-col justify-center items-center relative h-screen bg-gradient-to-br from-indigo-200">
      <h1 className='text-center font-semibold text-xl'>New Event</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border rounded-xl p-6 text-lg font-semibold backdrop-blur-xl bg-white/10 lg:w-96"
      >
        {/* Title */}
        <label className="flex flex-col mb-4">
          Title
          <input
            type="text"
            name="title"
            placeholder="'Hackathon'"
            required
            value={formDetails.title}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
        </label>

        {/* Type */}
        <label className="flex flex-col mb-4">
          Type
          <input
            type="text"
            name="type"
            required
            value={formDetails.type}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
        </label>

        {/* Date */}
        <label className="flex flex-col mb-4">
          Date
          <input
            type="date"
            name="date"
            required
            value={formDetails.date}
            min={new Date().toISOString().split("T")[0]} 
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
        </label>

        {/* Location */}
        <label className="flex flex-col mb-4">
          Location
          <input
            type="text"
            name="location"
            required
            value={formDetails.location}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
        </label>

        {/* Host */}
        <label className="flex flex-col mb-4">
          Host
          <input
            type="text"
            name="host"
            required
            value={formDetails.host}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
        </label>

        {/* Description */}
        <label className="flex flex-col mb-4">
          Description
          <input
            type="text"
            name="description"
            required
            value={formDetails.description}
            onChange={handleChange}
            className="border rounded p-2 mt-1"
          />
        </label>

        <div className='flex justify-between'>
        <button
          type="submit"
          className="px-3 py-2 bg-indigo-600 text-white rounded transition"
        >
          Create
        </button>
        <Link to={"/"}
          className="px-3 py-2 bg-indigo-600 text-white rounded transition"
        >
          Back
        </Link>
        </div>
      </form>
    </div>
  );
}

export default EventForm;
