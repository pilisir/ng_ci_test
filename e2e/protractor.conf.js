// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");
// var HtmlReporter = require("protractor-beautiful-reporter");

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: ["./src/**/*.e2e-spec.ts"],
  capabilities: {
    browserName: "chrome",
  },
  directConnect: true,
  baseUrl: "http://localhost:4201/",
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.json"),
    });

    // var m = new Date();
    // var dateString =
    //   m.getUTCFullYear() +
    //   "" +
    //   ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    //   "" +
    //   ("0" + m.getUTCDate()).slice(-2) +
    //   "" +
    //   ("0" + m.getUTCHours()).slice(-2) +
    //   "" +
    //   ("0" + m.getUTCMinutes()).slice(-2) +
    //   "" +
    //   ("0" + m.getUTCSeconds()).slice(-2);

    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    // .addReporter(
    //   new HtmlReporter({
    //     baseDirectory: "e2e/result/screenshots/" + dateString,
    //     docTitle: "Angular " + new Date().toLocaleString(),
    //     preserveDirectory: false,
    //   }).getJasmine2Reporter()
    // );
  },
};
