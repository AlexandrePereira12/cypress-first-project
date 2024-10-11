describe('Teste diario de criar pessoa e criar usuario', () => {
    
    beforeEach(() => {

        cy.visit('https://teste.rastrosystem.com.br/acl/login/suporte/')
    
    });
    
    it('Criar pessoas', () => {
        
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoaPessoa()
        CadastroPessoa('teste Alexandre auto', 46445706304, 'montese')
        salvar()
    });


    it('Criar usuarios', () => {

        AcessarPlataforma('alexandre.pereira', 102030)
        pessoasUser()
        CadastrarUser('teste Alexandre auto')
    

});
    

});




//Acessar a plataforma
function AcessarPlataforma(usuario,senha){
cy.get('#id_login').type(usuario)
cy.get('#id_senha').type(senha)
cy.contains('#submit_button', 'Entrar').click()
}


//Acessar pessoa-pessoas
function pessoaPessoa(){
cy.contains(':nth-child(4) > .nav-toggle > .title', 'Pessoas').click()
cy.contains('.nav-item.open > .sub-menu > :nth-child(1) > .nav-link', 'Pessoas').click()
}

//Acessar pessoa-usuario
function pessoasUser(){
    cy.contains(':nth-child(4) > .nav-toggle > .title', 'Pessoas').click()
    cy.contains('.nav-item.open > .sub-menu > :nth-child(2) > .nav-link > .title', 'Usuários').click()
}


//cadastrar pessoa
function CadastroPessoa(nome,cpf,bairro){
cy.get('.btn > .fa-plus').click()
cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
cy.get('#id_form_pessoa-nome_razao_social').type(nome)
cy.get('#id_form_pessoa-cnpj_cpf').type(cpf)
cy.get('#id_form_endereco-bairro').type(bairro)
}


//Cadastrar usuario
function CadastrarUser(nome){
    cy.get('.green').click()
    cy.get('.green').should('be.visible')
    cy.get(':nth-child(1) > .form-group > .select2 > .selection > .select2-selection').click()
    cy.get('.select2-search__field').type(nome)
    cy.wait(2000)
    cy.contains('.select2-results__option', 'teste Alexandre auto').click()
    cy.get('#id_name').type('teste1')
    cy.get('#id_login').type('teste_auto')
    cy.get('#id_password1').type('102030')
    cy.get('#id_password2').type('102030')
    cy.get('.col-md-4 > .form-group > .select2-container > .selection > .select2-selection').click()
    cy.get('.btn-success').click()
}

//Chamar o botão de salvar
function salvar(){
cy.get('#submit_button').click()
}



