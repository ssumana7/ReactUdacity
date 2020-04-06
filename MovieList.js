import React, { Component} from 'react';
import UserList from './UserList';
                          
const getUsersByMovie = (movieId, profiles) => (
  profiles.filter(item => item.favoriteMovieID == movieId)
          .map(item => item.userID)
)

class MovieList extends Component {
  render() {
    return(
      <ul>
      {Object.keys(this.props.movies).map(key => (
        <div key={key}>
          <h2>{this.props.movies[key]['name']}</h2>
			<UserList ids={getUsersByMovie(this.props.movies[key]['id'], this.props.profiles)} 
                      users={this.props.users} />
		</div>
		
       ))}
      </ul>
    )
  }
}

export default MovieList;