const axios = require('axios');

const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=search+terms`;

const data = axios.get(apiUrl)
  .then(response => {
    const results = response.data;

    if (results.items) {
      results.items.forEach(item => {
        const volumeInfo = item.volumeInfo;

        const title = volumeInfo.title;
        const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
        const publishedDate = volumeInfo.publishedDate || 'Unknown Date';
        const bookType = volumeInfo.printType || 'Unknown Type';

        console.log(`Title: ${title}`);
        console.log(`Authors: ${authors}`);
        console.log(`Published Date: ${publishedDate}`);
        console.log(`Book Type: ${bookType}`);
        console.log('---');
      });
    } else {
      console.log('No items found in the response.');
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
