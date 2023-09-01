import Calendar from "react-calendar";
import React, { useState } from "react";
import { appointments } from "../services/appointments";
import AppointmentCard from "./AppointmentCard";

const Agenda = () => {
  const [isOnDate, setIsOnDate] = useState(null);

  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsOnDate(true)
    
  };

  const appointmentsOnDate = appointments.filter(
    (appointment) =>
      new Date(appointment.date).toDateString() === date.toDateString()
  );

  return (
    <div>
      <Calendar onChange={handleDateChange} value={date} />
      <div>
        {isOnDate && appointmentsOnDate.length === 0 ? ( 
          <p>No hay turnos</p>
        ) : (
          appointmentsOnDate.map((appointment, index) => (
            <AppointmentCard key={index} appointment={appointment} />
          ))
        )}
      </div>
    </div>
  );
};

export default Agenda;
