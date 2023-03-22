import React from 'react';
import './contact-us.css';
import { FormContact } from '../../components/form-contact/form-contact';
import { TContactCardProps, ContactCard } from '../../components/contact-card/contact-card';
type TContactUsProps = {
  name: string;
};
type TContactUsState = {
  cards: TContactCardProps[];
};
export class ContactUs extends React.Component<TContactUsProps, TContactUsState> {
  constructor(props: TContactUsProps) {
    super(props);
    this.state = { cards: [] };
    this.getDataFromForm = this.getDataFromForm.bind(this);
  }
  getDataFromForm(data: TContactCardProps) {
    const cards = this.state.cards;
    cards.push(data);
    this.setState({ cards: cards });
    console.log(cards);
  }
  render() {
    return (
      <div className="contact-us" role="contact-us">
        <h2 className="contact-us__title">Please touch the contact with Us</h2>
        <div className="contact-us__form-wrapper">
          <FormContact callback={this.getDataFromForm} />
        </div>
        <div className="contact-us__cards-inner">
          {this.state.cards.map((item, index) => {
            return (
              <ContactCard
                key={index}
                name={item.name}
                surname={item.surname}
                date={item.date}
                radio={item.radio}
                file={item.file}
                estimate={item.estimate}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
