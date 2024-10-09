describe('Realizando testes na plataforma', () => {

    beforeEach(() => {
        cy.visit('https://teste.rastrosystem.com.br/acl/login/suporte/')
    });
    
    it('Testar Branch 8214', () => {
        
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoas()
        usuario()

        ConfirmarDados('alexteste', 123, 321)
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
    cy.get('[href="/usuario/update/2042"]').click()
    cy.get('[href="/usuario/update/2042"]').should('be.visible')

}
function ConfirmarDados(user, pass1, pass2){
    cy.get('#id_login').type(user)
    cy.get('#id_password1').type(pass1)
    cy.get('#id_password2').type(pass2)
    cy.contains('.modal-footer > .btn-success', 'Salvar').click()

}