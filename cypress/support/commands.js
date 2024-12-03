Cypress.Commands.add('plataforma', function(usuario, senha){
    cy.get('#id_login').type(usuario)
    cy.get('#id_senha').type(senha)
    cy.contains('#submit_button', 'Entrar').click()
})
