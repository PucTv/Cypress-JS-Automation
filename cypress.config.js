const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 's3ktxc',
 e2e: {
   specPattern: 'tests/**/*.cy.{js,ts}',
   supportFile: 'support/e2e.js',
  },
});
