import React from 'react/addons';
import {List, Map} from 'immutable';
import Voting from '../../src/components/home/Voting';
import {expect} from 'chai';
import {Characters} from '../constants/characters';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

const pair = List([Map(Characters.pair[0]), Map(Characters.pair[1])]);

describe('Voting', () => {

  it('renders 2 characters', () => {
    const component = renderIntoDocument(
      <Voting pair={pair} />
    );

    const thumbnails = scryRenderedDOMComponentsWithClass(component, 'thumbnail');

    expect(thumbnails.length).to.equal(2);
    expect(thumbnails[0].textContent).to.equal('Race: CaldariBloodline: DeteisSaylana');
    expect(thumbnails[1].textContent).to.equal('Race: CaldariBloodline: DeteisFunrinel');

  });

  it('invokes callback when a thumbnail is clicked', () => {
    let votedWith;
    const vote = (entry) => {
        votedWith = entry;
    };

    const component = renderIntoDocument(
      <Voting pair={pair}
        vote={vote} />
    );

    const imgThumbs = scryRenderedDOMComponentsWithClass(component, 'imgThumb');
    Simulate.click(imgThumbs[0]);

    expect(votedWith).to.equal(pair.get(0));
  });

  it('renders as a pure component', () => {

    const component = renderIntoDocument(
      <Voting pair={pair} />
    );

    let firstThumbnail = scryRenderedDOMComponentsWithClass(component, 'thumbnail')[0];
    expect(firstThumbnail.textContent).to.equal('Race: CaldariBloodline: DeteisSaylana');

    pair.set(0, Map(Characters.pair[1]));  // try to change the pair of the
    //component.setProps({pair: pair});
    firstThumbnail = scryRenderedDOMComponentsWithClass(component, 'thumbnail')[0];

    expect(firstThumbnail.textContent).to.equal('Race: CaldariBloodline: DeteisSaylana');
  });

});
