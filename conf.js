exports.config = {
  directConnect: true,
  capabilities: {
    'browserName': 'chrome'
  },
  framework: 'jasmine2',
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
specs: ['AirA.js']
};