/* eslint-disable no-unused-expressions*/

import React from 'react/addons';
import {List} from 'immutable';
import Character from '../../src/components/character/Character';
import {expect} from 'chai';
import {Characters} from '../constants/characters';

const {renderIntoDocument, isDOMComponent, findRenderedDOMComponentWithClass, Simulate} = React.addons.TestUtils;
const character = List.of(Characters.top5Characters[1]);

describe('Character Detail Page', () => {

  it('renders profile image section', () => {

    const component = renderIntoDocument(
      <Character character={character} />
    );
    const section = findRenderedDOMComponentWithClass(component, 'profile-img');

    //console.log(profile);
    expect(section).to.exist;
    expect(isDOMComponent(section)).to.be.true;
  });

  it('renders profile stats section', () => {

    const component = renderIntoDocument(
      <Character character={character} />
    );
    const section = findRenderedDOMComponentWithClass(component, 'profile-stats');

    //console.log(profile);
    expect(section).to.exist;
    expect(isDOMComponent(section)).to.be.true;
  });

  it('renders profile info section', () => {

    const component = renderIntoDocument(
      <Character character={character} />
    );
    const section = findRenderedDOMComponentWithClass(component, 'profile-info');

    //console.log(profile);
    expect(section).to.exist;
    expect(isDOMComponent(section)).to.be.true;
  });

  it('invokes the reported callback when reported button is clicked', () => {
    let reportedInvoked = false;
    const reported = () => reportedInvoked = true;

    const component = renderIntoDocument(
      <Character character={character}
               reported={reported} />
    );
    Simulate.click(React.findDOMNode(component.refs.reported));

    expect(reportedInvoked).to.equal(true);
  });

});
