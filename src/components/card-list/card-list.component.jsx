import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component"; 


class CardList extends Component {
  render() {
    const {movies} = this.props;
    return (
      <div className="card-list">
        {movies.map((movie) => {
          return(
            <Card movie={movie} />
          )
        })}        
      </div>
    )
  }
}

export default CardList