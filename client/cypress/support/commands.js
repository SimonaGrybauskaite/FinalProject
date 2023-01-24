
Cypress.Commands.add(
  'loginByApi',
  (username, password = Cypress.env('defaultPassword')) => {
    return cy.request('POST', `${Cypress.env('apiUrl')}/auth/login`, {
      username,
      password,
    });
  }
);
