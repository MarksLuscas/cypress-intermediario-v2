describe('Logout', () => {
  it('successfully', () => {
    cy.logout()

    cy.get("[data-qa-selector='sign_in_button']").should('be.visible')
  })
})
