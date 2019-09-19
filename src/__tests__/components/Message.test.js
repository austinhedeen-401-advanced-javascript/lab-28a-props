import React from 'react';
import renderer from 'react-test-renderer';

import Message from '../../components/Message';

describe('<Message />', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Message text={'Hello World'} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Renders at application start', () => {
    const app = shallow(<Message text={'Hello World'} />);
    expect(app.find('div').exists()).toBeTruthy();
    expect(app.find('div').text()).toEqual('Hello World');
  });
});
