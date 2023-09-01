function AppointmentCard({ appointment }) {
  return (
    <div className="flex flex-col m-2 p-1 gap-1 items-center justify-center border-2 border-emerald-400 rounded-lg bg-slate-200">
      <p>Fecha: <i>{new Date(appointment.date).toLocaleDateString()}</i></p>
      <h3>Mascota: <i>{appointment.petName}</i></h3>
      <p>Animal: <i>{appointment.animal}</i></p>
      <p>Motivo: <i>{appointment.motive}</i></p>
      <p>Comentario: <i>{appointment.comment}</i></p>
    </div>
  );
}

export default AppointmentCard;
