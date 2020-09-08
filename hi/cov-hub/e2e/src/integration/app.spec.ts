import { getGreeting } from '../support/app.po';

describe('Dashboard', () => {
  // set your urls using fixtures like these
  // beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().startsWith('Hello CovDataHub');
  });
});
