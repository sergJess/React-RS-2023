import React from 'react';
import './card-info.css';
import dislikeImg from '../../assets/icons/cards/dislike.svg';
type TCardInfoProps = {
  description: string;
  dislikes: number;
  id: number;
  imgSrc: string;
  likes: number;
  priceDollar: number;
  title: string;
};
export class CardInfo extends React.Component<TCardInfoProps> {
  constructor(props: TCardInfoProps) {
    super(props);
  }
  render() {
    return (
      <div className="card-info">
        <div>
          <img src={this.props.imgSrc} alt="" />
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
