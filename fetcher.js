const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const path = process.argv[3];

const pageFetcher = function(callback) {
  request(url, (error, response, body) => {
    if(error){
      callback(error, null);

    }
    fs.writeFile(path, body, 'utf8', error => {
      if (error){
        console.error(err);
      }
      const stats = fs.statSync(path);
      const fileSizeInBytes = stats.size;
      console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${path}`);
    })
    
  })


}

module.exports = {pageFetcher};