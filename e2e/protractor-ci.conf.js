const config = require("./protractor.conf").config;
const { SpecReporter } = require("jasmine-spec-reporter");

config.capabilities = {
  browserName: "chrome",
  chromeOptions: {
    args: ["--headless", "--no-sandbox"],
  },
};

config.onPrepare = () => {
  require("ts-node").register({
    project: require("path").join(__dirname, "./tsconfig.json"),
  });

  jasmine
    .getEnv()
    .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
};

exports.config = config;
