import React from 'react';
import './card-container.css';
import { CardInfo, TCardInfoProps } from '../card-info/card-info';
type TCardContainerProps = {
  cards: TCardInfoProps[];
};
export class CardContainer extends React.Component<TCardContainerProps> {
  constructor(props: TCardContainerProps) {
    super(props);
  }
  render() {
    return (
      <div className="card-container">
        {this.props.cards.map((item) => {
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
