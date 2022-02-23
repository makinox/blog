import React from 'react';
import { StaticQuery } from 'gatsby';
import renderer from 'react-test-renderer';
import * as Gatsby from 'gatsby';

import Navbar from '../../components/Navbar/Navbar';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('Navbar', () => {
  beforeAll(() => {
    useStaticQuery.mockImplementation(() => ({
      placeholderImage: {
        publicURL: '/static/6dfaedcc86be0d5671a1e651d31f9e26/Blog.svg',
      },
    }));
  });

  it('renders correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
