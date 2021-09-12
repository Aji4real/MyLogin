describe('Forgot Password', () => {

    it('Check that user can request for new password successfully', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('.page-subheading').should('be.visible')
        cy.get('#email').type('davin.riches@gmail.com')
        cy.get('.submit > .btn > span').click()
        cy.get('.alert').contains('A confirmation email has been sent to your address: davin.riches@gmail.com')
        cy.get('li > .btn > span').click()
    })

    it('Check that error message is displayed when invalid email is used to retrieve password', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('.lost_password > a').click()
        cy.get('.page-subheading').should('be.visible')
        cy.get('#email').type('maxy80ng@yahoo.com')
        cy.get('.submit > .btn > span').click()
        cy.get('ol > li').contains('There is no account registered for this email address.')
    })
})
