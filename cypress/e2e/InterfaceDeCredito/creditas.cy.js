describe('Teste financiamento veicular Creditas',()=>{
//teste
it('',()=>{

  cy.SimulacaoDeCreditoVeicular();
  cy.fixture('dados').then((dados)=>{
    cy.get(':nth-child(1) > .css-ef178').type(dados.name)
  });
  cy.GerarCPF().then((randomCPF) => {
    cy.get(':nth-child(2) > .css-ef178').type(randomCPF)
  });
  cy.fixture('dados').then((dados)=>{
    cy.get(':nth-child(3) > .css-ef178').type(dados.datadenascimento)
    cy.get(':nth-child(4) > .css-ef178').type(dados.fone)
    cy.get(':nth-child(5) > .css-ef178').type(dados.email)
  });
  cy.wait(1000)
  cy.get(':nth-child(6) > .css-1m5ao79 > .css-jilktb > .css-5w63hr').click()
  cy.wait(1000)
  cy.get('.css-auzdt5 > :nth-child(1)').click()
  cy.get(':nth-child(7) > .css-1m5ao79 > .css-jilktb > .css-5w63hr').click()
  cy.wait(1000)
  cy.get('.css-auzdt5 > :nth-child(1)').click()
  cy.fixture('valor').then((valor)=>{
    cy.get(':nth-child(8) > .css-ef178').type(valor.reais)
  });
  cy.get(':nth-child(9) > .css-1m5ao79 > .css-jilktb > .css-5w63hr > .css-qr9iky').click();
  cy.wait(1000)
  cy.get('.css-auzdt5 > :nth-child(1)').click()
  cy.get(':nth-child(10) > .css-1m5ao79 > .css-jilktb > .css-5w63hr').click()
  cy.wait(1000)
  cy.get('.css-auzdt5 > :nth-child(5)').click();
  cy.get('.css-1w44xna > .not-visible-when-loading').click();
  cy.wait(2000)
  cy.get('.css-1ye7lf0').should('include.text','Tudo certo! Já recebemos seus dados, logo entraremos em contato.')
})
})