module.exports = require('@jupyterlab/testutils/lib/babel.config');

{
    "plugins": [
      ["prismjs", {
          "languages": ["Python"],
          "plugins": ["line-numbers"],
          "theme": "twilight",
          "css": true
      }]
    ]
  }