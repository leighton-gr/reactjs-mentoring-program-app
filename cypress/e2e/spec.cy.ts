import 'cypress/react18';

describe('ReactJS mentoring program app', () => {
    it('visits the site', () => {
        cy.visit('/')
    })

    it('renders the search input with the correct placeholder', () => {
        cy.visit('/')
        cy.root();
        cy.get('.chakra-input');
        cy.get('input[placeholder*="What do you want to watch?"]')
    })

    it('correctly renders input when user types', () => {
        cy.visit('/')
        cy.root();
        cy.get('.chakra-input').type('star wars');
    })

    it('should submit form and return results', () => {
        cy.visit('/')
        cy.root();
        cy.get('.chakra-input').type('star wars');
        cy.get('#search').submit();
    })

    it('should render correct movie when clicked', () => {
        cy.visit('/')
        cy.root();
        cy.get('.chakra-input').type('star wars');
        cy.get('#search').submit();
        cy.get('#root > div > div > div.chakra-tabs.css-13o7eu2 > div.chakra-tabs__tab-panels.css-8atqhb > div > div:nth-child(1) > div:nth-child(1) > img').click();
    })
})