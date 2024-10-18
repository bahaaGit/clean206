// cypress/integration/example.spec.js
describe('My First Test', () => {
    it('Visits the Next.js homepage', () => {
      cy.visit('http://localhost:3000'); // Change the URL if needed
      cy.contains('Welcome'); // Adjust to match your homepage content
    });
  });
  