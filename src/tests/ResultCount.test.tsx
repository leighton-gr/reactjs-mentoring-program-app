import renderer from 'react-test-renderer';
import { ResultCount } from '../components/ResultCount';
import React from 'react';
import { expect } from '@jest/globals';

describe('Result count test', () => {
    it('renders ResultCount component', () => {
        const tree = renderer.create(<ResultCount count={1}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});