// node server.js 로 실행하면 파일 수정할 때마다 서버 재실행 해줘야함 -> nodemon server.js로 실행
const express = require('express');
const path = require('path');
const app = express();

// 몽고db 연결
const { MongoClient } = require('mongodb');
let db
const url = 'mongodb+srv://poac90:qkrwngus90!@portfolio.gqouxvo.mongodb.net/?retryWrites=true&w=majority&appName=portfolio'
new MongoClient(url).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum')
}).catch((err)=>{
  console.log(err)
})


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
