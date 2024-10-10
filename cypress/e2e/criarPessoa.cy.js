describe('Criando um cadastro de pessoas', () => {
    


        it('Acessar a plataforma', () => {
            cy.visit('https://teste.rastrosystem.com.br/acl/login/suporte/')
            AcessarPlataforma('alexandre.pereira', 102030)
            pessoaPessoa()
            AcessarCadastroPessoa()
            CadastroPessoa('teste Alexandre auto', 46445706304, 'montese')
            salvar()
        });


});



function AcessarPlataforma(usuario,senha){
    cy.get('#id_login').type(usuario)
    cy.get('#id_senha').type(senha)
    cy.contains('#submit_button', 'Entrar').click()
}

function pessoaPessoa(){
    cy.contains(':nth-child(4) > .nav-toggle > .title', 'Pessoas').click()
    cy.contains('.nav-item.open > .sub-menu > :nth-child(1) > .nav-link', 'Pessoas').click()
}

function AcessarCadastroPessoa(){
    cy.get('.btn > .fa-plus').click()
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
}

function CadastroPessoa(nome,cpf,bairro){
    cy.get('#id_form_pessoa-nome_razao_social').type(nome)
    cy.get('#id_form_pessoa-cnpj_cpf').type(cpf)
    cy.get('#id_form_endereco-bairro').type(bairro)
}
function salvar(){
    cy.get('#submit_button').click()
}