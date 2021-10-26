import React from 'react';
import renderer from 'react-test-renderer';
import enzyme from 'enzyme';
import UserPositionWidget from './UserPositionWidget';

it('renders correctly', () => {
    const component = renderer.create(<UserPositionWidget />).toJSON();
    expect(component).toMatchSnapshot();
});