import React from 'react/addons';
import Footer from '../../src/components/common/Footer';

import {expect} from 'chai';

import {Characters} from '../constants/characters';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate} = React.addons.TestUtils;

describe('Footer', () => {

    describe('Top 5 Characters', () => {

      it('renders 5 characters', () => {
        const component = renderIntoDocument(
          <Footer top5Characters={Characters.top5Characters} />
        );

        const thumbs = scryRenderedDOMComponentsWithClass(component, 'thumb-md');

        expect(thumbs.length).to.equal(5);
        expect(thumbs[0].src).to.equal('http://image.eveonline.com/Character/92618888_128.jpg');
        expect(thumbs[1].src).to.equal('http://image.eveonline.com/Character/92318226_128.jpg');
        expect(thumbs[2].src).to.equal('http://image.eveonline.com/Character/892348579_128.jpg');
        expect(thumbs[3].src).to.equal('http://image.eveonline.com/Character/754618317_128.jpg');
        expect(thumbs[4].src).to.equal('http://image.eveonline.com/Character/90739448_128.jpg');

      });
    });
});
