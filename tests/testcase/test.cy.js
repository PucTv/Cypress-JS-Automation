describe('Tìm kiếm trên Google', () => {
  it('Tìm kiếm từ khóa "Cypress Testing"', () => {
    cy.visit('https://www.google.com');

    // Chấp nhận cookie nếu có (nếu không có thì dòng này sẽ bị bỏ qua)
    cy.get('body').then($body => {
      if ($body.find('button[aria-label="Accept all"]').length) {
        cy.get('button[aria-label="Accept all"]').click();
      }
    });

    // Gõ từ khóa vào ô tìm kiếm
    cy.get('input[name="q"]')
      .type('Cypress Testing{enter}', { delay: 100 });

    // Kiểm tra xem kết quả có chứa từ "Cypress.io"
    cy.contains('Cypress.io').should('exist');
  });
});
