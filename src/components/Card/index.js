import React, { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

class Card extends Component {
  state = {
    dogImages: [],
    loading: true,
    error: null,
  };

  fetchDogImages = async () => {
    const dogImages = [];
    try {
      for (let i = 0; i < 20; i++) {
        const api = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await api.json();
        dogImages.push(data.message);
      }
      this.setState({ dogImages, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  componentDidMount() {
    this.fetchDogImages();
  }

  render() {
    const { moviesData } = this.props;
    const { dogImages, loading, error } = this.state;

    if (loading) {
      return (
        <div className="spinner-container">
          <ThreeDots color="#000000" height={50} width={50} />
        </div>
      );
    }

    if (error) {
      return <p>Error: {error}</p>;
    }

    return (
      <div className="cards-container">
        {moviesData.map((movie, index) => (
          <div key={movie.id} className="card">
            <img src={dogImages[index]} alt={`Dog for ${movie.title}`} />
            <h4 className="card-heading">{movie.title}</h4>
            <p className="card-description">
              Author: {movie.authorName}
              <br />
              Average Rating: {movie.ratingsAverage}
              <br />
              Readers Count: {movie.readersCount}
            </p>
            <div className="card-footer-container">
              <p className="price">Movie ID: {movie.id}</p>
              <div className="icon-container">
                <i className="fa fa-shopping-bag icon"> </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
