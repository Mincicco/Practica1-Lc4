import React, { useState } from "react";
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';

import { appointments } from "../services/appointments";
import AppointmentCard from "./AppointmentCard";

const Agenda = () => {
  const [date, setDate] = useState(new Date());
  const [isOnDate, setIsOnDate] = useState(null);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsOnDate(true)
  };

  const appointmentsOnDate = appointments.filter(
    (appointment) =>
      new Date(appointment.date).toDateString() === date.toDateString()
  );

  return (
    <>
      <section className="flex m-2 p-1 items-center justify-center">
        <Calendar onChange={handleDateChange} value={date} />
      </section>

      <section className="flex flex-col border-2 rounded-md">
        {isOnDate && appointmentsOnDate.length === 0 ? ( 
            <p className="flex self-center justify-center p-1 font-semibold italic">No hay turnos</p>
          ) : (
            appointmentsOnDate.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment} />
            ))
        )}
      </section>
    </>
  );
};

export default Agenda;
