import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      Name: 
      <input value={name} onChange={(e)=>setName(e.target.value)} id="name" type="text" required />
      Phone: 
      <input value={phone} onChange={(e)=>setPhone(e.target.value)} id="phone" type="tel" pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$" />
      Email: 
      <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" type="email" />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
