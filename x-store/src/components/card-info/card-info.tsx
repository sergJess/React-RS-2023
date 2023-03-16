import React from 'react';
import './card-info.css';
import mockMiwCardImg from '../../assets/mock-cards/miw-scoring.jpg';
import mockDtCardImg from '../../assets/mock-cards/dt-construct.jpg';
export type TCardInfoProps = {
  description: string;
  dislikes: number;
  id: number;
  imgSrc: string;
  likes: number;
  priceDollar: number;
  title: string;
};
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
export class CardInfo extends React.Component<TCardInfoProps> {
  constructor(props: TCardInfoProps) {
    super(props);
  }
  render() {
    return (
      <div className="card-info">
        <div className="card-info__img-inner">
          <img className="card-info__img" src={this.props.imgSrc} alt="" />
        </div>
        <h3 className="card-title">{this.props.title}</h3>
        <p className="card-description">{this.props.description}</p>
        <p className="card-cost">price: {this.props.priceDollar}$</p>
        <div className="card-estimate">
          <div>
            <span className="like-img card-estimate__img"></span>
            {this.props.likes}
          </div>
          <div>
            <span className="dislike-img card-estimate__img"></span>
            {this.props.dislikes}
          </div>
        </div>
      </div>
    );
  }
}
