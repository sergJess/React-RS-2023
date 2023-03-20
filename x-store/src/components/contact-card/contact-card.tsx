import React from 'react';
import './contact-card.css';
type TContactCardProps = {
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
        <h3>{this.props.name}</h3>
        <p>{this.props.surname}</p>
      </div>
    );
  }
}
