import React, { useCallback, useEffect, useState } from "react";
// import blogs from '../data/blog.json'
import AddAppointment from "./AddAppointment";
import Search from "./Search";
import BookingItem from "./BookingItem";
import Pagination from "./Pagination";

export default function ProjectList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // const fetchData = useCallback(() => {
  //     fetch('./data/blog.json')
  //     .then (response => response.json())
  //     .then(info => {
  //       setData(info)
  //     })
  //   },[]
  // )

  // useEffect(() => {
  //   fetchData()
  // },[fetchData])

  const cancelBooking = (bookingID) => {
    const updateInfo = data.filter((event) => event.id !== bookingID);
    setFilteredData(updateInfo);
    setData(updateInfo);
  };

  const searchProject = (text) => {
    setFilteredData(
      data.filter((event) => event.title.toLowerCase().includes(text))
    );
  };

  const sorting = (ascending) => {
    filteredData.sort((a, b) => a.title.localeCompare(b.title));

    if (!ascending) {
      filteredData.reverse();
    }

    setFilteredData([...filteredData]);
  };

  const displayArtProject = () => {
    const choosen = data.filter((event) => event.categories === "art");
    setFilteredData(choosen);
  };

  const displayTechProject = () => {
    const choosen = data.filter((event) => event.categories === "tech");
    setFilteredData(choosen);
  };
  const displayOtherProject = () => {
    const choosen = data.filter((event) => event.categories === "other");
    setFilteredData(choosen);
  };

  const addNewBooking = (newBooking) => {
    setData([...data, newBooking]);
    setFilteredData([...data, newBooking]);
  };

  useEffect(() => {
    fetch("./data/blog.json")
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        setFilteredData(info);
      });
  }, []);

  return (
    <>
      <div className="flex content-center mt-10 justify-between py-6 m-4">
        <Pagination
          showArt={displayArtProject}
          showTech={displayTechProject}
          showOther={displayOtherProject}
        />
        <Search search={searchProject} orderby={sorting} />
      </div>
      <div className="mx-6 mt-2 grid grid-cols-4 gap-4">
        {filteredData.map((project) => (
          <BookingItem
            key={project.id}
            booking={project}
            remove={cancelBooking}
          />
        ))}
      </div>

      <AddAppointment bookings={filteredData} setBooking={addNewBooking} />
    </>
  );
}
