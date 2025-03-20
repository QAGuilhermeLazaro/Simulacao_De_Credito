Cypress.Commands.add('SimulacaoDeCreditoVeicular',()=>{
    cy.visit('https://www.creditas.com/financiamento-veiculos')
    cy.get('#SP5Bem6Tyk5qToRs5boPI > .not-visible-when-loading').click();
})

import { GerarCPF } from './Validador/cpf';

Cypress.Commands.add('GerarCPF', () => {
    const cpf = GerarCPF();
    return cy.wrap(cpf);
});
