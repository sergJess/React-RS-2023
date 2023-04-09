import React from 'react';
import './contact-card.css';
export type TContactCardProps = {
  name: string;
  surname: string;
  fileUrl: string;
  estimate: string;
  radio: string;
  date: string;
  email: string;
};

export const ContactCard = (props: TContactCardProps) => {
  return (
    <div className="contact-card">
      <h2 className="contact-card__title">Data from Form-contact</h2>
      <div className="contact-card__data">
        <div>
          <img className="contact-card__data-img" src={props.fileUrl} alt="" />
        </div>
        <div>Name: {props.name}</div>
        <div>Surname: {props.surname}</div>
        <div>Date: {props.date}</div>
        <div>Email: {props.email}</div>
        <div> Receive notification: {props.radio}</div>
        <div>Your estimate: {props.estimate}</div>
        <div>Agreement - Yes</div>
      </div>
    </div>
  );
};
