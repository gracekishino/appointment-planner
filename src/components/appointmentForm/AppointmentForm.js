import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contactName,
  setContactName,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
    Title: 
    <input value={title} onChange={(e)=>setTitle(e.target.value)} id="title" type="text" required />
    Contact: 
    <ContactPicker name="contactPicker" value={contactName} contacts={contacts} onChange={(e)=>setContactName(e.target.value)} />
    Date: 
    <input value={date} onChange={(e)=>setDate(e.target.value)} id="date" type="date" min={getTodayString()} />
    Time: 
    <input value={time} onChange={(e)=>setTime(e.target.value)} id="time" type="time"  />

    <input type="submit" value="Add Appointment" />
  </form>
  );
};
