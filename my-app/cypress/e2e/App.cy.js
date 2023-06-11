describe('Home Page', () => {
  beforeEach(() => {
    const factData = {
      favorite: false,
      id: 23,
      name: "Chlorine and Cats",
      text: "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat."
      
    };
    const factData2 = {
      favorite: false,
      id: 20,
      name: "Cancer in Cats",
      text: "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully."
    };
    cy.intercept("GET", "http://catfacts.cloud:2053/facts", {
      statusCode: 200,
      body: [factData, factData2]
    });

    cy.intercept("POST", "http://catfacts.cloud:2053/facts", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          favorite: false,
          id: 20,
          name: "Cancer in Cats",
          text: "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully."
        }
      });
    }).as("postFact");

    cy.visit("http://localhost:3000/");
  });

    it('should have a title', () => {
    cy.get("h1").should("contain", "Whisker Wisdom");
    });

    it("Should display 2 facts by default", () => {
      cy.get('.fact-container .fact').should('have.length', 2);
    })
    
    it("Should have two input fields and a submit button that creates a new fact", () => {
      cy.get('[placeholder="Cat Fact Title"]').type("Title text");
      cy.get('[placeholder="Cat Fact"]').type("Fact text");
      cy.get('form > button').click();
      cy.contains('.fact-container', 'Title text')
        .should('be.visible')
        .contains('.fact-container', 'Fact text')
        .should('be.visible');
    });
    

    it("Should intercept and handle GET request", () => {
      const factData = [
        {
          favorite: false,
          id: 23,
          name: "Chlorine and Cats",
          text: "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat."
        },
        {
          favorite: false,
          id: 20,
          name: "Cancer in Cats",
          text: "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully."
        }
      ];
      
      cy.intercept("GET", "http://catfacts.cloud:2053/facts", {
        statusCode: 200,
        body: factData
      }).as("getFacts");
      cy.visit("http://localhost:3000/");
      cy.wait("@getFacts").then((interception) => {
        const responseBody = interception.response.body;
        expect(responseBody).to.deep.equal(factData);
      });
    });

    it("Should create a new fact with POST intercept", () => {
      cy.get('[placeholder="Cat Fact Title"]').type('Title text');
      cy.get('[placeholder="Cat Fact"]').type('Fact text');
      cy.contains('form button', '𝕊𝕦𝕓𝕞𝕚𝕥 🐾').click();
      cy.wait('@postFact').then((interception) => {
      const requestBody = interception.request.body;
      expect(requestBody.name).to.equal('Title text');
      expect(requestBody.text).to.equal('Fact text');
    });
    cy.contains('.fact-container', 'Title text').should('be.visible');
    cy.contains('.fact-container', 'Fact text').should('be.visible');

    });

    it("Should be able to favorite a fact", () => {
      cy.get('.fact-container .fact:first-child').as('firstFact');
      cy.get('@firstFact').find('input[type="checkbox"]').then(($checkbox) => {
        const initialFavoriteState = $checkbox.prop('checked');
        cy.get('@firstFact').find('input[type="checkbox"]').click();
        cy.get('@firstFact').find('input[type="checkbox"]').should(($checkbox) => {
          expect($checkbox.prop('checked')).to.equal(!initialFavoriteState);
        });
      });
    });

});





