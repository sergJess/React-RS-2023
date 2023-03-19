import React from 'react';
import './card-info.css';
import mockMiwCardImg from '../../assets/mock-cards/miw-scoring.jpg';
import mockDtCardImg from '../../assets/mock-cards/dt-construct.jpg';
export const mockCradsInfo = [
  {
    description: 'Album of MIW 2022',
    dislikes: 0,
    id: 1,
    imgSrc: mockMiwCardImg,
    likes: 996,
    priceDollar: 55,
    title: 'Motionless in White - Scoring the End of the World',
  },
  {
    description: 'Album of DT 2013',
    dislikes: 1,
    id: 2,
    imgSrc: mockDtCardImg,
    likes: 556,
    priceDollar: 43,
    title: 'Dark Tranquillity - Construct',
  },
];
export class CardInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      'div',
      { className: 'card-info' },
      React.createElement(
        'div',
        { className: 'card-info__img-inner' },
        React.createElement('img', { className: 'card-info__img', src: this.props.imgSrc, alt: '' })
      ),
      React.createElement('h3', { className: 'card-title' }, this.props.title),
      React.createElement('p', { className: 'card-description' }, this.props.description),
      React.createElement('p', { className: 'card-cost' }, 'price: ', this.props.priceDollar, '$'),
      React.createElement(
        'div',
        { className: 'card-estimate' },
        React.createElement(
          'div',
          null,
          React.createElement('span', { className: 'like-img card-estimate__img' }),
          this.props.likes
        ),
        React.createElement(
          'div',
          null,
          React.createElement('span', { className: 'dislike-img card-estimate__img' }),
          this.props.dislikes
        )
      )
    );
  }
}
