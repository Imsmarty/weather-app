import React from 'react'
import WeatherCard from './weather-card'

describe('<WeatherCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WeatherCard weather="sunny" temperatureC={30} date="2023-07-23"/>);
  });

  it('displays today\'s date in LLLL d, yyyy format', () => {
    const todaysDate = new Date(Date.now());
    cy.mount(<WeatherCard weather="sunny" temperatureC={30} date="2023-07-23"/>);

    cy.get('time').should('not.have.text', "2023-07-23");
  });

  it('displays other dates in M/d format', () => {
    const todaysDate = new Date(Date.now());
    cy.mount(<WeatherCard weather="sunny" temperatureC={30} date="2020-07-23"/>);

    cy.get('time').should('not.have.text', "2023-07-23");
    cy.get('time').should('include.text', '/');
  });
});