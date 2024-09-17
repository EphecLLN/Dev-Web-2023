describe('tests accès services', () => {
  it('ça se rend sur la page services', () => {
    cy.visit('http://localhost:3000')
    cy.contains("Services").click()
  })
});

describe("en savoir plus sur le service", () =>{
it('consulte un service', () => {
  cy.visit('http://localhost:3000')
  cy.contains("Services").click()
  cy.contains("En savoir plus").click()
  cy.url().should("include", '/service')
  })
});

