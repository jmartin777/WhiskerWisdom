
describe('Fact Component', () => {
  beforeEach(() => {
    cy.mount(
      <Fact
        name="Fact Name"
        text="Fact Text"
        favorite={false}
        id={1}
        deleteFact={() => {}}
        favChange={() => {}}
      />
    );
    it('renders without errors', () => {
      cy.get('.fact').should('exist');
    });
  
    it('displays the correct name and text', () => {
      cy.get('.fact h3').should('have.text', 'Fact Name');
      cy.get('.fact p').should('have.text', 'Fact Text');
    });
  
    it('checks/unchecks the favorite checkbox correctly', () => {
      cy.get('.fact input[type="checkbox"]').should('not.be.checked');
      cy.get('.fact input[type="checkbox"]').click();
      cy.get('.fact input[type="checkbox"]').should('be.checked');
    });
  
    it('calls the favChange callback when the favorite checkbox is clicked', () => {
      cy.get('.fact input[type="checkbox"]').click();
      // Add assertions or spy function checks based on your requirements
    });
  
    it('calls the deleteFact callback when the delete button is clicked', () => {
      cy.get('.fact button').click();
      // Add assertions or spy function checks based on your requirements
    });
  });
  });
