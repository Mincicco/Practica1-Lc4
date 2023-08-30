import Calendar from "react-calendar";
import React, { useState } from "react";

const Agenda = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate);
  };
  return (
    <div className="App">
      <h1>Calendario React</h1>
      <Calendar onChange={handleDateChange} value={date} />
      <p>Fecha seleccionada: {date.toDateString()}</p>
      <div></div>
    </div>
  );
};

export default Agenda;
