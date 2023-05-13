import { Component } from "react";
import './card.styles.css'

class Card extends Component {
  render() {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
  const { poster_path, title, overview, id} = this.props.movie
    return (
      <div className="card-container" key={id}>
        <img src= {IMG_PATH + poster_path} alt={`movie${title}`} className="img"/>
        <h2 className="movie-title">{title}</h2>
        <p className="overview" >{overview}</p>
      </div>
    )
  }
}

export default Card;