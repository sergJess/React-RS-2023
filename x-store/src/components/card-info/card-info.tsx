import React from 'react';
import './card-info.css';
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
        <div>
          <div>likes: {this.props.likes}</div>
          <div>dislikes: {this.props.dislikes}</div>
        </div>
      </div>
    );
  }
}
