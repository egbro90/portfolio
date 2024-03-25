const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'portfolio/build')));

// /* 로 해
app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/portfolio/build/index.html'), function(err){
    if (err) {
        res.status(500).send(err)
    }
  });
});
