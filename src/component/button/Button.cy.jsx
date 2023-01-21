import { hexToRgb } from '@mui/system'
import React from 'react'
import Button from './Button'
/* global cy */
describe('<Button />', () => {
  it('renders submit button', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button type="submit" name="Tes Nama button 123#$#"/>)
    cy.get('[data-cy=btn]').should('have.text', 'Tes Nama button 123#$#')
    cy.get('button').should('have.css', 'background-color', hexToRgb('#01959f'))
  })
  
  it('renders Delete button', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button type="delete" name="Tes Nama button 123#$#"/>)
    cy.get('[data-cy=btn]').should('have.text', 'Tes Nama button 123#$#')
    cy.get('button').should('have.css', 'background-color', hexToRgb('#E11428'))
  })
})