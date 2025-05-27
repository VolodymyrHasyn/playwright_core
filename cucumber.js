module.exports = {
    default: {
      require: ["dist/steps/**/*.js", "dist/support/**/*.js"],
      paths: ["features/**/*.feature"],
      requireModule: ["ts-node/register"],
      format: ["progress"]
    }
  };
  