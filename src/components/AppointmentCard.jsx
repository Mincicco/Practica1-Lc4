import React from "react";
import { appointments } from "../services/appointments";

function AppointmentCard({ appointment }) {
  return (
    <div>
      <p>Fecha: {new Date(appointment.date).toLocaleDateString()}</p>
      <h3>{appointment.petName}</h3>
      <p>Animal: {appointment.animal}</p>
      <p>Motivo: {appointment.motive}</p>
      <p>Comentario: {appointment.comment}</p>
    </div>
  );
}

export default AppointmentCard;
