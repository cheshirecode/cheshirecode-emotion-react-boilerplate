import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
import { expect } from 'chai';
import App from './App';

describe('<App>', () => {
  it('has div', () => {
    const { getByTestId } = render(<App />);
    const divElement = getByTestId('div');
    expect(document.body.contains(divElement));
  });
});
afterEach(cleanup);
