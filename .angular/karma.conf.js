config.set({
  // /* Insert Start */
  browsers: ['Chrome', 'ChromeHeadlessCustom'],
  customLaunchers: {
    ChromeHeadlessCustom: {
      base: 'ChromeHeadless',
      flags: ['--no-sandbox', '--disable-gpu']
    }
  },
  coverageIstanbulReporter: {
    dir: require('path').join(__dirname, './coverage'),
    reports: ['html', 'lcovonly', 'text-summary'],
    fixWebpackSourcePaths: true
  },
  // /* Insert End */
  // ...
});
