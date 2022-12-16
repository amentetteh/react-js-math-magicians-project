import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';
import Quote from '../components/Quote';
import Home from '../components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import CalculatorPage from '../components/calculator-page/CalculatorPage';



describe('Test for operation', () => {
it('Home component should render correctly', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
it('CalculatorPage component should render correctly', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Header component should render correctly', () => {
    const tree = renderer
      .create(<Router><Header /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Quote component should render correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});