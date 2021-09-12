describe('Test Login', () => {

  it('Check that user can login successfully', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('maxtesting6+2@gmail.com')
    cy.get('#passwd').type('Today01')
    cy.get('#SubmitLogin > span').click()
    cy.get('.page-heading').should('be.visible')
    cy.get('.logout').click()
  })

  it('Check that error message is displayed when invalid login details is entered', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type('glory4sure@gmail.com')
    cy.get('#passwd').type('Today01')
    cy.get('#SubmitLogin > span').click()
    cy.get('#center_column > :nth-child(2) > p').should('be.visible')

  })
})
