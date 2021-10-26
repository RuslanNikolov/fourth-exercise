import React from 'react';
import renderer from 'react-test-renderer';
import SeachInput from './SearchInput';
import enzyme from 'enzyme';

it('renders correctly', () => {
    const component = renderer.create(<SeachInput setCurrentCity={() => { }} />).toJSON();
    expect(component).toMatchSnapshot();
});

it('calls the setCurrentCity function from props', () => {
    const spyFunc = jest.fn();
    const component = enzyme.shallow(<SeachInput setCurrentCity={spyFunc} />);
    component.find('.submit-button').at(0).simulate('click');
    expect(spyFunc).toHaveBeenCalled();
})