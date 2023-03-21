import React from 'react';
import './contact-card.css';
export type TContactCardProps = {
  name: string;
  surname: string;
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
          <div>{this.props.name}</div>
          <div>{this.props.surname}</div>
        </div>
      </div>
    );
  }
}
