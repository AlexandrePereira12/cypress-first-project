describe('Realizando testes na plataforma', () => {

    beforeEach(() => {
        cy.visit('https://teste.rastrosystem.com.br/acl/login/suporte/')
    });
    
    it('Testar Branch 8214', () => {
        
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoas()
        usuario()
    });

});



function AcessarPlataforma(usuario, senha){
    cy.get('#id_login').type(usuario)
    cy.get('#id_senha').type(senha)
    cy.contains('#submit_button', 'Entrar').click()
}

function pessoas(){
    cy.contains(':nth-child(4) > .nav-toggle > .title', 'Pessoas').click()
    cy.contains('.nav-item.open > .sub-menu > :nth-child(2) > .nav-link > .title', 'Usuários').click()
}

function usuario(){
    cy.get('#table_users_filter > label > .form-control').type('alexandre pereira teste')
    cy.contains('.odd > :nth-child(7)', 'Alterar Usuários').click()
}