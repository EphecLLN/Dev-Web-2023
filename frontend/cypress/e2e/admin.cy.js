describe("connexion admin", () => {
    it('sait acceder au fonctionnalitées admin', () => {
      const mail = 't.saragossi@students.ephec.be';
      const password = 'tatiana';
      cy.visit('http://localhost:3000')
      cy.visit('/Connexion')
      cy.get('input[placeholder="Adresse mail"]').type(mail);
      cy.get('input[type="password"]').type(password);
      cy.get('[data-test-id="submit"]').click();
      cy.url().should("include",'/profile')
      cy.visit('/produits')
      cy.get('[class="btn btn-primary"]').should('exist')//bouton bleu
      cy.get('[class="btn btn-success"]').should('exist')//bouton vert
      cy.get('[class="btn btn-danger"]').should('exist')//bouton rouge
    })

    it("sait accéder à la liste des clients", ()=> {
        const mail = 't.saragossi@students.ephec.be';
        const password = 'tatiana';
        cy.visit('http://localhost:3000')
        cy.visit('/Connexion')
        cy.get('input[placeholder="Adresse mail"]').type(mail);
        cy.get('input[type="password"]').type(password);
        cy.get('[data-test-id="submit"]').click();
        cy.visit('/profile')
        cy.visit('/clients')
    })

    it("sait cliquer sur un client pour afficher la modale", () => {
      const mail = 't.saragossi@students.ephec.be';
        const password = 'tatiana';
        cy.visit('http://localhost:3000')
        cy.visit('/Connexion')
        cy.get('input[placeholder="Adresse mail"]').type(mail);
        cy.get('input[type="password"]').type(password);
        cy.get('[data-test-id="submit"]').click();
        cy.visit('/profile')
        cy.visit('/clients')
        cy.get('[data-test-id="identite"]').click({ multiple: true, force: true })
    })
  })
