import React from 'react'
import SearchBox from './search-box'

describe('<SearchBox />', () => {
  it('renders', () => {
    const onSearchClickSpy = cy.spy().as('onSearchClickSpy')

    cy.mount(<SearchBox onSearchClick={onSearchClickSpy} />);

    cy.get('img').click();

    cy.get('@onSearchClickSpy').should('have.been.called');

  })
})