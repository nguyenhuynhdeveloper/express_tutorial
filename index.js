//// --------Code này của anh and and code ---------
//  https://www.youtube.com/watch?v=dqe7cqpNrhc&list=PLnt_aPs_Egkm6hrNKA9IEMyfu5rLju6iz&index=14
// Đây chính là 1 server backend - code bằng nodeJs sử dụng express là framework

// Để chạy server lên npm start

const express = require('express')   // yêu cầu express
const app = express()   // express này chính là 1 function 
const port = 3000  // ở cổng localhost 3000 127.0.0.1  :   http://localhost:3000

app.listen(port, () => {        // Phải luôn có cái này : lắng nghe tại cổng 3000
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res, next) => {    // Khi load trang web lên chính là gọi tới / và lấy kết quả trả về--- không viết cũng hiểu là sâu /
res.status(200).send({ user: [
  {id: 1 , name : 'van a' , age: 12}, 
  {id: 2, name: 'thi b', age: 13}
]});
});


app.get('/:id', (req, res, next) => {
  res.status(200).send({data: `This is the body of ${req.params.id}`})
  console.log("REQ With  ID : " , req.params.id );
});

app.post('/', (req, res, next ) => {
  console.log("REQ:", req.body);
  res.status(200).send({...req.body, created_at: new Date()})
})

app.post('/query', (req, res, next) => {
  res.status(200).send({...req.query, created_at: new Date()})
  console.log("QUERY: ", req.query)
})

