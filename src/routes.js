//'use strict';

import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/home/Home';
import Detail from './components/character/Detail';
/*import Stats from './components/Stats';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import AddCharacter from './components/AddCharacter';*/

export default (
  <Route component={App}>
    <Route path='/characters/:id' component={Detail} />
    <Route path='/' component={Home} />
  </Route>
);
