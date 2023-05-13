import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2'
    fetch(url)
      .then((response) => response.json())
      .then((movies) => this.setState({ movies: movies.results }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    this.setState(() => {
      console.log(searchField)
      return { searchField }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    const { movies, searchField } = this.state
    const { onSearchChange } = this
    const filterredMovies = movies.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(searchField)
    })
    return (
      <div className='App'>
        <h1 className='app-title'>Today's Movies</h1>
        <SearchBox onChangeHandler={onSearchChange}
          className='search-box'
          placeholder='search-movies' />
        <CardList movies={filterredMovies} />
      </div>
    )
  }
}

export default App