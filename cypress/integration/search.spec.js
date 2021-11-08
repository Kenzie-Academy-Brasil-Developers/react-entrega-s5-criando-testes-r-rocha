context("Search", () => {
    it("Enters the search page and tries to find full address from postcodes", () => {
        cy.visit('http://localhost:3000');
        cy.viewport(1440, 900);
        cy.get("input").type(13560053);
        cy.contains("Buscar pelo CEP").click();
    })
      
});