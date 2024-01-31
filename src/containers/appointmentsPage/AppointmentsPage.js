import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, onAdd }) => {
  const [ title, setTitle ] = useState('');
  const [ contactName, setContactName ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      title: title,
      contactName: contactName,
      date: date,
      time: time
    });
    setTitle('');
    setContactName('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          contactName={contactName}
          date={date}
          time={time}
          setTitle={setTitle}
          setContactName={setContactName}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList items={appointments} />
      </section>
    </div>
  );
};