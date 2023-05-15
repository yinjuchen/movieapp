import { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render')
  const [searchField, setsearchField] = useState('')
  const [movies, setMovies] = useState([])
  const [filterredMovies, setfilterredMovies] = useState(movies)
  console.log(searchField)

  const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

  useEffect(() => {
    const newfFlterredMovies = movies.filter((movie) => {
      return movie.title.toLocaleLowerCase().includes(searchField)
    })
    setfilterredMovies(newfFlterredMovies)
    console.log('fired once')
  }, [movies, searchField])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const movies = await response.json()
      setMovies(movies.results)
      console.log(movies)
    }
    fetchData()
      .catch
      (console.error)
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setsearchField(searchFieldString)
  }

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


// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       movies: [],
//       searchField: ''
//     }
//   }

// componentDidMount() {
//   const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=2'
//   fetch(url)
//     .then((response) => response.json())
//     .then((movies) => this.setState({ movies: movies.results }))
// }



//   render() {
//     const { movies, searchField } = this.state
//     const { onSearchChange } = this
//     const filterredMovies = movies.filter((movie) => {
//       return movie.title.toLocaleLowerCase().includes(searchField)
//     })
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Today's Movies</h1>
//         <SearchBox onChangeHandler={onSearchChange}
//           className='search-box'
//           placeholder='search-movies' />
//         <CardList movies={filterredMovies} />
//       </div>
//     )
//   }
// }

export default App