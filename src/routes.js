//'use strict';

import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import {HomeContainer} from './components/home/Home';
import {DetailContainer} from './components/character/Detail';
import {StatsContainer} from './components/stats/Stats';
import {ListContainer} from './components/lists/List';

/*import Stats from './components/Stats';
import Character from './components/Character';
import CharacterList from './components/CharacterList';
import AddCharacter from './components/AddCharacter';*/

export default (
  <Route component={App}>
    <Route path='/' component={HomeContainer} />
    <Route path='/stats' component={StatsContainer} />
    <Route path='/characters/:id' component={DetailContainer} />
     <Route path='/add' component={HomeContainer} />
    <Route path=':category' component={ListContainer}>
      <Route path=':race' component={ListContainer}>
        <Route path=':bloodline' component={ListContainer} />
      </Route>
    </Route>

  </Route>
);
