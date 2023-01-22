import React from 'react'
import Description from './Description'

/* global cy */ 
describe('<Description />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Description label='TESTING LABEL textarea' placeholder='testing placeholder'/>)
    cy.get('[data-cy=textarea]').should("have.attr", 'placeholder', 'testing placeholder')
    cy.get('[data-cy=label-textarea]').should("have.text", 'TESTING LABEL textarea')
  })
})