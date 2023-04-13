///<reference types="cypress"/>

context('Funcionalidade Login', ()=> {
    beforeEach(() => {
        cy. visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()      
    });

    it('Deve fazer login com sucesso', ()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should ('contain', 'Olá, Aluno')
    })
    it('Deve exibir uma messagem de erro ao inserir usuario invalido', ()=>{
        cy.get('#username').type('sb_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma messagem de erro ao inserir senha invalida', ()=>{
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain','Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta' )
    })
})