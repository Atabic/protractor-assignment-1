import { Config } from 'protractor'
export let config:Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,
    specs: ['test/spec/*_spec.js'],
    framework:'mocha',
    multipleCapabilities: [
      { 'browserName': 'chrome'},
    ],
    mochaOpts: {
      reporter: "spec",
      slow: 300,
      timeout : 4000,
    },
    suites: {
      mochaTest : 'test/spec/test-spec.js'
    }
  };