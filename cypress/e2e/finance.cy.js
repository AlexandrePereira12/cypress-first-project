

describe('Transações', () => {

    //hooks -> executa antes ou depois dos testes
    //before
    //after
    //beforeEach
    //afterEach

    beforeEach(() => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar entrada de valor', () => {
        //Acessando site
        //Adicionando valor ao DEV-FINANCE
        criarTransacao('Freela', 800)
        criarTransacao('jantar', 150)

        //cy.get('tbody tr td.description').should('have.text', 'Freela') essa linha faz com que o script, identifica algum texto na linha ou coluna da pagina
    });

    it('Cadastrar uma Saida de valor', () => {
        
        criarTransacao('Cinema', -80)
    });


    it('Exluir transação', () => {
        criarTransacao('Freela', 100)
        criarTransacao('PENSÃO', 450)
        criarTransacao('teste', -450)

        cy.contains('.description', 'Freela')
            .siblings()
            .find('img')
            .click()

        cy.get('tbody tr').should('have.length', 2)
    });
});

function criarTransacao(descricao, valor){
    cy.contains('Nova Transação').click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type('2024-09-02') //YYYY-MM-DD
    cy.contains('button', 'Salvar').click()
}







