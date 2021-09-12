describe('Register', () => {

    it('Check that a new user can register', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email_create').type('jraphael@gmail.com')
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type('Jasphet')
        cy.get('#customer_lastname').type('Raphael')
        cy.get('#passwd').type('Yesterday1')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#company').type('none')
        cy.get('#address1').type('87a Wellington street')
        cy.get('#city').type('London')
        cy.get('#id_state').click('Texas')
        cy.get('#postcode').type('gl44ep')
        cy.get('#id_country').select('United States')
        cy.get('#phone').type('23473665556')
        cy.get('#alias').type('33a, Combend street')
        cy.get('#submitAccount > span').click()


    })
})