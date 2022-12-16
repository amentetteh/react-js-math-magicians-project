import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import Quote from '../components/Quote';
import Home from '../components/Home';
import CalculatorPage from '../components/calculator-page/CalculatorPage';

describe('Test for operation', () => {
  it('Home component should render correctly', () => {
    const component = render(<Home />);
    expect(component).toMatchSnapshot();
  });
  it('Calculator Page component should render correctly', () => {
    const component = render(<CalculatorPage />);
    expect(component).toMatchSnapshot();
  });
  it('Header component should render correctly', () => {
    const component = render(<Router><Header /></Router>);
    expect(component).toMatchSnapshot();
  });
  it('Quote component should render correctly', () => {
    const component = render(<Quote />);
    expect(component).toMatchSnapshot();
  });
});
