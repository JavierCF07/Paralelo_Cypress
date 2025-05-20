const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7xtr3e', //'9wgdcp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
