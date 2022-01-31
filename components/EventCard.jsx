import React from "react";
import { useState } from "react";

function EventCard({ event_data, artist_data }) {
  const [openModal, setOpenModal] = useState(false); // For Controlling Event Detail Modal Open/Close

  return (
    <>
      {/* Main Card */}
      <div
        data-tip="Open Details"
        className=" flex flex-col h-44 mx-2 p-4 shadow-xl cursor-pointer hover:scale-110 transition-all duration-200"
        onClick={() => setOpenModal(!openModal)}
      >
        <span className="border-b-2 w-full font-medium">EVENT DETAILS</span>
        <div className="flex py-2">
          <div className="w-1/2 flex flex-col">
            <span className="truncate font-medium">Country</span>
            <span className="truncate text-gray-600">
              {event_data.venue.country}
            </span>
            <span className="truncate font-medium">Venue</span>
            <span className="truncate text-gray-600">
              {event_data.venue.name}
            </span>
          </div>
          <div className="w-1/2 flex flex-col">
            <span className="truncate font-medium">City</span>
            <span className="truncate text-gray-600">
              {event_data.venue.city}
            </span>
            <span className="truncate font-medium">Date</span>
            <span className="truncate text-gray-600">
              {new Date(event_data.datetime).toDateString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
