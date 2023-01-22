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
    cy.get("input[placeholder=\"70%\"]").type('50')
    cy.contains('Save Task').click()
    cy.contains('tes create from cypress').should('be.visible')
  })
  
  it('edit task', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('tes create from cypress').parent().children('div').children('div').children('svg').click()
    cy.contains('Edit').click({force: true})
    cy.get("input[placeholder=\"Input here\"]").should('have.value', 'tes create from cypress')
    cy.get("input[placeholder=\"70%\"]").should('have.value', '50')
    cy.get("input[placeholder=\"Input here\"]").clear().type('tes create from cypress edit')
    cy.get("input[placeholder=\"70%\"]").clear().type('100')
    cy.contains('Save Task').click()
    cy.contains('tes create from cypress edit').should('be.visible')
  })

  it('Move right task', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('tes create from cypress edit').parent().children('div').children('div').children('svg').click()
    cy.contains('Move Right').click({force: true})
    cy.contains('Group Task 2').parent().children('div', '.card').contains('tes create from cypress edit').should('be.visible')
  })


  it('Move left task', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('tes create from cypress edit').parent().children('div').children('div').children('svg').click()
    cy.contains('Move Left').click({force: true})
    cy.contains('Group Task 1').parent().children('div', '.card').contains('tes create from cypress edit').should('be.visible')
  })

  it('Delete task', () => {
    cy.visit('https://kanban-reactjs.netlify.app/')
    cy.contains('tes create from cypress edit').parent().children('div').children('div').children('svg').click()
    cy.contains('Delete').click({force: true})
    cy.get('button').contains('Delete').click()
    cy.contains('tes create from cypress edit').should('not.exist')
  })
})