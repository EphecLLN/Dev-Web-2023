describe('tests accès realisation', () => {
    it('ça se rend sur la page des réalisations', () => {
      cy.visit('http://localhost:3000')
      cy.visit("/realisation")
    })
  });