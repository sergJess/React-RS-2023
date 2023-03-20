import React from 'react';
import './contact-us.css';
import { FormContact } from '../../components/form-contact/form-contact';
export class ContactUs extends React.Component {
  render() {
    return (
      <div className="contact-us" role="contact-us">
        <h2 className="contact-us__title">Please touch the contact with Us</h2>
        <div className="contact-us__form-wrapper">
          <FormContact name="contact-us-form" />
        </div>
      </div>
    );
  }
}
