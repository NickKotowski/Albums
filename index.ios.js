//import a library to help create a Component

import React from 'react';

/*Knows how a component should behave and takes multiple compontents and makes
them work together*/

import { AppRegistry, View } from 'react-native';

/*knows how to the output of a component and plac eit on the screen - provides
default core compontents (image, text)*/

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

/*import statement for a file(module) that we write ourselves*/

//Create a Component (a javascript function that returns some amount of JSX)
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

/*only 'root' component uses 'AppRegistry', all other compoenents are exported*/
