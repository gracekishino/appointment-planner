import React from "react";

export const ContactPicker = ({ value, contacts, onChange, name }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="">-- Select a contact --</option>
      {contacts?.map((contact) => (
        <option value={contact.name}>{contact.name}</option>
      ))}
    </select>
  );
};
