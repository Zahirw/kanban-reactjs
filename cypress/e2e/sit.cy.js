/* global cy */
describe('template spec', () => {
  it('Check visible board', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('Group Task 1').should('be.visible')
    cy.contains('Group Task 2').should('be.visible')
    cy.contains('Group Task 3').should('be.visible')
    cy.contains('Group Task 4').should('be.visible')
  })
  
  it('Cek create new task and modal', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('New Task').click()
    cy.contains('Create Task').should('be.visible')
    cy.contains('Task Name').should('be.visible')
    cy.contains('Progress').should('be.visible')
    cy.get('input').should('be.value', '')
    cy.contains('Cancel').click()
    cy.contains('Create Task').should('not.exist')
  })

  it('create new task', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('New Task').click()
    cy.get("input[placeholder=\"Input here\"]").type('tes create from cypress')
    cy.get("input[placeholder=\"70%\"]").type('50%')
    cy.contains('Save Task').click()
    cy.contains('tes create from cypress').should('be.visible')
  })
})