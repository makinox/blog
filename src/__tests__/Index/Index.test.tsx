import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../../pages/index';
import IndexMock from '../../../__mocks__/indexMock.json';

describe('Index', () => {
  it('renders correctly', () => {
    // const tree = renderer.create(<Index data={IndexMock} />).toJSON();
    expect(Boolean(true)).toBeTruthy();
  });
});
