import React, { useState } from 'react';
import './contact-us.css';
import { FormContact } from '../../components/form-contact/form-contact';
import { TContactCardProps, ContactCard } from '../../components/contact-card/contact-card';

export const ContactUs = () => {
  const initialState: TContactCardProps[] = [];
  const [state, setState] = useState({ cards: initialState });
  const getDataFromForm = (data: TContactCardProps) => {
    setState({ cards: [...state.cards, data] });
  };
  return (
    <div className="contact-us" role="contact-us">
      <h2 className="contact-us__title">Please touch the contact with Us</h2>
      <div className="contact-us__form-wrapper">
        <FormContact callback={getDataFromForm} />
      </div>
      <div className="contact-us__cards-inner">
        {state.cards.map((item, index) => {
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
