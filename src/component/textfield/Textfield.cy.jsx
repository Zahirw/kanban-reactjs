import React from 'react'
import Textfield from './Textfield'
/* global cy */ 
describe('<Textfield />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Textfield label="TESTING LABEL INPUT" placeholder="testing placeholder"/>)
    cy.get('[data-cy=input]').should("have.attr", 'placeholder', 'testing placeholder')
    cy.get('[data-cy=label-input]').should("have.text", 'TESTING LABEL INPUT')
  })
})