const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "s3ktxc",
  e2e: {
    baseUrl: "https://webbanhang-6.onrender.com",
    specPattern: "tests/**/*.cy.{js,ts}",
    supportFile: "support/setup.js",
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
