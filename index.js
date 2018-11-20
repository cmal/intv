const request = require('request');

const needles = ['', '', ''];
let times = [];
const promises = needles.map(function(url, index) {
  return new Promise((resolve, reject) => {
    request(url, (err, resp) => {
      resolve(resp.elapsedTime);
    });
  }); 
});

Promise.all(promises).then(times => {
  let maxTime = 0;
  for (let i = 0; i < times.length; i++) {
    
  }
});
