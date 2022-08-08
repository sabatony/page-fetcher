const {pageFetcher} = require('./fetcher');

pageFetcher((err, data) => {
  if(err) {
    console.log('It didnt work!: ', error);
  }
  console.log('it worked!: ', data);
});