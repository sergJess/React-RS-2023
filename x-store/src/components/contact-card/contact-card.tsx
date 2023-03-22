import React from 'react';
import './contact-card.css';
export type TContactCardProps = {
  name: string;
  surname: string;
  agreement?: boolean;
  file?: string;
  estimate?: string;
  radio?: string;
  date: string;
};
export class ContactCard extends React.Component<TContactCardProps> {
  constructor(props: TContactCardProps) {
    super(props);
  }
  render() {
    return (
      <div className="contact-card">
        <h2 className="contact-card__title">Data from Form-contact</h2>
        <div className="contact-card__data">
          <div>Name: {this.props.name}</div>
          <div>Surname: {this.props.surname}</div>
          <div>Date: {this.props.date}</div>
          <div> Receive notification: {this.props.radio}</div>
          <div>Your estimate: {this.props.estimate}</div>
          <div>
            <img src={this.props.file} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
