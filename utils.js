var readline = require('readline')
    .createInterface({
      input: process.stdin,
      output: process.stdout
    });

var inputs = [];

readline.on('line', function(input) {
  inputs.push(input);
});

readline.on('close', function() {
  console.log(inputs);
})
