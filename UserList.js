import React, { Component} from 'react';

// const getUserName = (userId, users) => users[userId]['name']
                          
// const getFavoriteMovie = (movieId, movies) => movies[movieId]['name']

class UserList extends Component {
  render() {
    const {ids, users} = this.props;
    return(
      	<div>
        <p> Liked By: </p>	
          {!ids || ids.length === 0 ? (
              <p>None of the current users liked this movie.</p>
          ) : (
      		 <ul> 
              {ids.map(userId => {
               return (
               <li key={userId}>{users[userId]['name']}</li>
              )})}
			</ul>
          )}
		</div>
	)
}
}

export default UserList