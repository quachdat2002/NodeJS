const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const apiPath = '/api/';
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded());

//website
app.use(express.static('client'));

//tạo đường dẫn api /users để kết nối
app.use(apiPath + 'users', require('./routes/users.route'));
//khi nào gọi api mà có /upload sẽ đưa quyền điều khiển cho thằng upload.route.js
app.use(apiPath + 'upload', require('./routes/upload.route'));
//api dành cho get students
app.use(apiPath + 'students', require('./routes/students.route'));

const server = app.listen(port, function () {
    const host = 'localhost';
    const port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port)
})