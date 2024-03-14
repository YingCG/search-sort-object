import React from "react";
import { Link } from "react-router-dom";
import { MdEditCalendar, MdDeleteForever } from "react-icons/md";

export default function BookingItem({ booking, remove }) {
  return (
    <div className="px-4 py-4 bg-amber-50 rounded-2xl">
      <h3 className="font-bold text-orange-700">{booking.title}</h3>
      <p className="mb-2">{booking.content}</p>
      {booking.url && (
        <Link
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          to={booking.url}
        >
          {booking.url}
        </Link>
      )}
      <div className="flex justify-between">
        <p className="text-orange-700 flex">
          <MdEditCalendar className="self-center text-orange-700" />
          {booking.date}
        </p>
        <p className="flex" onClick={() => remove(booking.id)}>
          <MdDeleteForever className="self-center text-orange-700" />
          <span className="text-orange-700">Cancel Booking</span>
        </p>
      </div>
    </div>
  );
}
