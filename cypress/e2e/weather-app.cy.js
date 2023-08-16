describe('template spec', () => {
  it('loads default weather', () => {
    // mock the api call
    cy.intercept('GET', 'http://api.weatherstack.com/*', { fixture: 'weather-service-response-1.json' })
    cy.visit('localhost:3000');
    // expect to see the information from the mock api call displayed
    cy.get('#weather-app-card-item-description').contains("Overcast");
    cy.get('#weather-app-card-item-temperature').contains("70° F");
    cy.get('#weather-app-card-item-precipitation').contains("0%");
  });
  it('fetches weather about another city', () => {
    // mock the api call with default data
    cy.intercept('GET', 'http://api.weatherstack.com/*', { fixture: 'weather-service-response-1.json' })
    cy.visit('localhost:3000');
    cy.get('#weather-app-card-title').contains('San Diego');
    // mock the api call for new data
    cy.intercept('GET', 'http://api.weatherstack.com/*', { fixture: 'weather-service-response-2.json' })
    cy.get('input').type('New York');
    cy.get('button').click();
    // expect new data to be displayed
    cy.get('#weather-app-card-title').contains('New York');
    cy.get('#weather-app-card-item-description').contains("Sunny");
    cy.get('#weather-app-card-item-temperature').contains("73° F");
    cy.get('#weather-app-card-item-precipitation').contains("10%");
  });
})