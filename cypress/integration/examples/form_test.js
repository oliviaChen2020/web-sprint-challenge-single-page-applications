// cypress code here
describe("Pizza" , function (){
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza")
    })


    it ("sanity check to make sure tests work", ()=> {
        expect(1+2).to.equal(3)
    })
    const nameInput =() => cy.get('input[name=name]')
    const instructionsInput =() => cy.get('input[name=instructions]')
    const sizeInput =() => cy.get('select[name=size]')
    const pepperoniCheckBox =() => cy.get('input[name=pepperoni]')
    const broccoliCheckBox =() => cy.get('input[name=broccoli]')
    const sausageCheckBox =() => cy.get('input[name=sausage]')
    const submitButton =() => cy.get('button')

    it ("can type in the name", () => {
        nameInput()
            .should('have.value', '')
            .type ('customerA')
            .should('have.value', 'customerA')
        })
    
    it ("can type in the instructions", () => {
        instructionsInput()
            .should('have.value', '')
            .type ('Please call upon arrival')
            .should('have.value', 'Please call upon arrival')
    })

    it ("a user can select multiple topings", () => {
        pepperoniCheckBox()
            .check()
            .should('be.checked')
        
        broccoliCheckBox()
            .check()
            .should('be.checked')

        sausageCheckBox()
            .check()
            .should('be.checked')
        
                 
    })

    it ("a user can submit the form data after everything is filled out", () => {
        submitButton().should('be.disabled')
        nameInput ().type('Jack')
        submitButton().should('be.disabled')
        instructionsInput().type('Please call upon arrival')
        submitButton().should('be.disabled')
        sizeInput().select("small").should('have.value', "small")
        pepperoniCheckBox().check().should('be.checked')
        submitButton().should('not.be.disabled')

        
               
    })

})