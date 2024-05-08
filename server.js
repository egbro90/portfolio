// 실행 터미널 명령어 : node server.js (파일 수정하면 재실행 해야되는 번거로움 - 대안 : nodemon)
// nodemon 실행 명령어 : nodemon server.js
// 설치한 라이브러리 불러 옴
const express = require('express');
const path = require('path');
const app = express();

// 서버 띄움
app.listen(8080, function () {
  console.log('listening on 8080')
}); 

// static 파일들을 서버에 등록을 해야 쓸 수 있음.
app.use(express.static(path.join(__dirname, 'portfolio/build')));

// (새로고침하면 url 못읽어서 페이지가 뻑남. 해서 /* 추가 함)
app.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/portfolio/build/index.html'), function(err){
    if (err) {
        res.status(500).send(err)
    }
  });
});
