import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { BiCalendarPlus } from "react-icons/bi";

export default function AddAppointment({setBooking, bookings}) {
  const [value, onChange] = useState(new Date());
  let [toggleForm, setToggleForm] = useState(false);
  const openForm = () => setToggleForm(!toggleForm);

  const initial = {
    id: '',
    firstName: '',
    lastName: '',
    title: '',
    content: '',
    date: '',
    categories: ''
  }
  const [formInfo, setFomrInfo] = useState(initial)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFomrInfo({
        ...formInfo,
        [name] : value
    })
}

const handleSubmit = (e) => {
  e.preventDefault();

  const newAppointment = {
    id: bookings.length + 1,
    name: e.target.firstName.value + " " + e.target.lastName.value ,
    title: e.target.title.value,
    content: e.target.content.value,
    date: value.toString(),
    categories: e.target.categories.value
  }
    console.log(formInfo)
    console.log(newAppointment)
    setBooking(newAppointment)
}
  return (
    <div
      className="px-8 py-6 mx-6 mt-6 bg-amber-100 rounded-2xl"
    >
      <button className="font-bold text-lg text-orange-700"  onClick={openForm}>
        <div>
          <BiCalendarPlus className="inline-block align-text-top" />
          Make an Appointment
        </div>
      </button>
      {toggleForm && (
        <form type="submit" className="@container mt-6" onSubmit={handleSubmit}>
          <div className="w-full flex gap-x-1">
            <label>First Name</label>
            <input
              type="text"  name="firstName"  value={formInfo.firstName} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 w-full"
            />
            <label>Last Name</label>
            <input
              type="text"  name="lastName"  value={formInfo.lastName} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 w-full"
            />
            <label>Project/Event</label>
            <input
              type="text" name="title" value={formInfo.title} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 w-full"
            />
            <label>Categories</label>
            <select type="text" name="categories" value={formInfo.categories} onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 w-full">
               <option value="">--Please choose an option--</option>
                <option value="tech">Tech</option>
                <option value="art">Art</option>
                <option value="other">Other</option>
                </select>
            <label>Book An Appointment</label>
            <DateTimePicker
              onChange={onChange}
              value={value}
              type="datetime-local"
              className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1 w-full"
              style={{ border: "none !important", outline: "none" }}
            />
          </div>
          <textarea name="content"  value={formInfo.content} onChange={handleChange}
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg justify-center	mt-3 px-2 w-full"
            placeholder="notes"
          />
          <button type="submit" className="bg-emerald-700 p-2 px-4 text-white">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
