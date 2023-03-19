import React from 'react';
import './card-container.css';
import { CardInfo, TCardInfoProps } from '../card-info/card-info';
type TCardContainerProps = {
  cards: TCardInfoProps[] | Promise<TCardInfoProps[]>;
};
type TCardContainerState = {
  cards: TCardInfoProps[];
};
export class CardContainer extends React.Component<TCardContainerProps, TCardContainerState> {
  constructor(props: TCardContainerProps) {
    super(props);
    this.state = { cards: [] };
  }

  fillRemoteCards() {
    if (!Array.isArray(this.props.cards)) {
      this.props.cards.then((cards) => {
        this.setState({ cards: cards });
      });
    }
  }
  componentDidMount() {
    this.fillRemoteCards();
  }

  render() {
    const cards = Array.isArray(this.props.cards) ? this.props.cards : this.state.cards;
    return (
      <div className="card-container">
        {cards.map((item) => {
          return (
            <CardInfo
              key={item.id}
              description={item.description}
              dislikes={item.dislikes}
              likes={item.likes}
              imgSrc={item.imgSrc}
              priceDollar={item.priceDollar}
              title={item.title}
              id={item.id}
            />
          );
        })}
      </div>
    );
  }
}
