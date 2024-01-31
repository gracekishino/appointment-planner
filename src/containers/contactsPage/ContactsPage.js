import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAdd }) => {

  const [ name, setName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ duplicateName, setDuplicateName ] = useState(false);
  
  useEffect(() => {
    // check if name is in contacts
    if (contacts.find(contact => contact.name === name)) {
      setDuplicateName(true);
    }
  },[contacts, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicateName) {
      onAdd({
        name: name,
        phone: phone,
        email: email
      });
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name} 
          phone={phone} 
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList items={contacts} />
      </section>
    </div>
  );
};
