import React from 'react';
import './contact-us.css';
import { FormContact } from '../../components/form-contact/form-contact';
import { ContactCard } from '../../components/contact-card/contact-card';
import { useAppSelector } from '../../app/hooks/hooks';

export const ContactUs = () => {
  const { contactCards } = useAppSelector((state) => state.contactCards);
  return (
    <div className="contact-us" role="contact-us">
      <h2 className="contact-us__title">Please touch the contact with Us</h2>
      <div className="contact-us__form-wrapper">
        <FormContact />
      </div>
      <div className="contact-us__cards-inner">
        {contactCards.map((item, index) => {
          return (
            <ContactCard
              key={index}
              name={item.name}
              surname={item.surname}
              email={item.email}
              date={item.date}
              radio={item.radio}
              fileUrl={item.fileUrl}
              estimate={item.estimate}
            />
          );
        })}
      </div>
    </div>
  );
};
