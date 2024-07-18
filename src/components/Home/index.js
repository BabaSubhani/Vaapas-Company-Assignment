import { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BallTriangle } from 'react-loader-spinner';
import Card from '../Card';
import {
  HomeTopContainer,
  MovieLogo,
  SearchAndIconContainer,
  SearchInput,
  SearchIconContainer,
  RenderingMultipleStates,
} from './styledComponents';

class Home extends Component {
  state = {
    searchVal: '',
    movies: [],
    status: 'INITIAL',
    error: null,
  };

  changeSearchValue = (event) => {
    this.setState({ searchVal: event.target.value });
  };

  getMoviesData = async () => {
    const { searchVal } = this.state;
    
    if (!searchVal.trim()) {
      alert('Please enter a search term.');
      return;
    }

    this.setState({ status: 'LOADING' });
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchVal}`);
      const data = await response.json();
      const limitedData = data.docs.slice(0, 20);
      const newData = limitedData.map((eachItem) => ({
        id: eachItem.key,
        title: eachItem.title,
        ratingsAverage: eachItem.ratings_average,
        readersCount: eachItem.want_to_read_count,
        authorName: eachItem.author_name ? eachItem.author_name[0] : 'Unknown',
      }));
      console.log(newData);
      this.setState({ movies: newData, status: 'SUCCESS' });
    } catch (error) {
      this.setState({ error: error.message, status: 'FAILURE' });
      console.error('Error fetching movies:', error.message);
    }
  };

  renderLoadingView = () => (
    <RenderingMultipleStates>
      <BallTriangle color="#0000cd" height={50} width={50} />
    </RenderingMultipleStates>
  );

  renderSuccessView = () => {
    const { movies } = this.state;
    return <Card moviesData={movies} />;
  };

  renderFailureView = () => (
    <RenderingMultipleStates>
      <p>Error fetching data. Please try again.</p>
    </RenderingMultipleStates>
  );

  renderMultipleStates = () => {
    const { status } = this.state;
    switch (status) {
      case 'LOADING':
        return this.renderLoadingView();
      case 'SUCCESS':
        return this.renderSuccessView();
      case 'FAILURE':
        return this.renderFailureView();
      default:
        return null;
    }
  };

  render() {
    const { searchVal } = this.state;
    return (
      <HomeTopContainer>
        <MovieLogo src="https://icons.iconarchive.com/icons/designbolts/free-multimedia/1024/Film-icon.png" />
        <SearchAndIconContainer>
          <SearchInput
            placeholder="Search"
            type="search"
            value={searchVal}
            onChange={this.changeSearchValue}
          />
          <SearchIconContainer onClick={this.getMoviesData}>
            <FaSearch />
          </SearchIconContainer>
        </SearchAndIconContainer>
        {this.renderMultipleStates()}
      </HomeTopContainer>
    );
  }
}

export default Home;
