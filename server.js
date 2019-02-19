var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=dbbd1b2b7b2b4b22bf00174f408e5c34';
var req = new Request(url);
fetch(req)
    .then(function(response) {
        console.log(response.json());
    })