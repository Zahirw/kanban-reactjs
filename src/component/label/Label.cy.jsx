import React from 'react'
import Label from './Label'
import { hexToRgb } from '@mui/material'

/* global cy */
describe('<Label />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Label type='task1'/>)
    cy.get('[data-cy=label]').should('have.text', 'Group Task 1')
    cy.get('[data-cy=label]').contains('Group Task 1').should('have.css', 'color', hexToRgb('#01959F'))
    cy.mount(<Label type='task2'/>)
    cy.get('[data-cy=label]').should('have.text', 'Group Task 2')
    cy.get('[data-cy=label]').contains('Group Task 2').should('have.css', 'color', hexToRgb('#FA9810'))
    cy.mount(<Label type='task3'/>)
    cy.get('[data-cy=label]').should('have.text', 'Group Task 3')
    cy.get('[data-cy=label]').contains('Group Task 3').should('have.css', 'color', hexToRgb('#E11428'))
    cy.mount(<Label type='task4'/>)
    cy.get('[data-cy=label]').should('have.text', 'Group Task 4')
    cy.get('[data-cy=label]').contains('Group Task 4').should('have.css', 'color', hexToRgb('#43936C'))
  })
})