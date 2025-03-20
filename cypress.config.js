const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "84meyk",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

