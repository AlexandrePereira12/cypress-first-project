describe('', () => {
    beforeEach(() => {
        cy.visit('https://teste.rastrosystem.com.br/acl/login/suporte/')
    });

    it('Criar pessoas', () => {
        
        cy.plataforma('alexandre.pereira', 102030)
        pessoaPessoa()
        CadastroPessoa('teste Alexandre auto', 46445706304, 'montese')
        salvar()
        
    });
    
    it('Envia mensagem de teste', () => {
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoaPessoa()
        EnviarSms()
    });


    it.only('Acessar pessoas INATIVAS/ATIVAS - emitir arquivo', () => {
        AcessarPlataforma('alexandre.pereira', 102030)
        pessoaPessoa()
        FiltroStatus()


    });

    it('Acessar a ficha do cliente - Veiculos', () => {
        
    });
});





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
    cy.get('#id_titulo').click().type('Notificação de teste')
    cy.get('#id_mensagem').click().type('Teste de notificação')
    cy.get('#table_users_client_filter > label > .form-control').click().type('teste alexandre auto')
    cy.contains('.mt-checkbox > span').click()
    
}

function FiltroStatus(){
    cy.get(':nth-child(4) > .btn').click()
    cy.get('#inativa').click()
    cy.get(':nth-child(5) > .btn').click()
    cy.get(':nth-child(3) > .tool-action').click()
}

//Chamar o botão de salvar
function salvar(){
    cy.get('#submit_button').click()
    }
