import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] }; //initial or empty state
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
    }

renderAlbums() {
  return this.state.albums.map(album =>
    <AlbumDetail key={album.title} album={album} />
  );

  //could also be record={album}, name of variable does not have to equal prop
  //the thing before the equal sign is the name of the prop
  /*Inside JSX, want to reference to some javascript variable, album.title,
  wrap it with {}, whenever reference js wrap it with {} otherwise react
  thinks we are just showing some text*/
}

render() {
  console.log(this.state);

return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;


/*Rules of state - plain javascript object used to record and respond to user-triggered events.
when we need to update what a component shows, call this.setState
change change state with setState, do not do this.state = 123 (at the beginning it is initialized once though in
such a manner)

props --> parent component to child component
states --> for component internal record keeping (only class based components)

*/
