describe('', () => {
    beforeEach(() => {
        cy.visit('https://teste.rastrosystem.com.br/acl/login/suporte/')
    });

    it('Criar pessoas', () => {
        
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoaPessoa()
        CadastroPessoa('teste Alexandre auto', 46445706304, 'montese')
        salvar()
    });
    
    it.only('Envia mensagem de teste', () => {
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoaPessoa()
        EnviarSms()
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

//cadastrar pessoa
function CadastroPessoa(nome,cpf,bairro){
    cy.get('.btn > .fa-plus').click()
    cy.get('.open > .dropdown-menu > :nth-child(1) > a').click()
    cy.get('#id_form_pessoa-nome_razao_social').type(nome)
    cy.get('#id_form_pessoa-cnpj_cpf').type(cpf)
    cy.get('#id_form_endereco-bairro').type(bairro)
    }


//Enviar mensagem de teste
function EnviarSms(){
    cy.get('[href="/pessoa/send-push-message/"]').click()
}

//Chamar o botão de salvar
function salvar(){
    cy.get('#submit_button').click()
    }