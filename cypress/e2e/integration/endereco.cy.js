///<reference types="cypress"/>
import EnderecoPage from '../../support/page-objects/endereco.page'

describe('Funcionalidade Enderecos - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then (dados => {
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Ana', 'Furtado', 'ABC Company', 'Brasil', 'Av Rio Claro', '500', 'Sao Jose', 'Santa Catarina', '88000111', '48999998888', 'anafurtado@teste.com' )  
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')   
    });
});