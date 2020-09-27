const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
// all are same below just for understanding between function and arrow function
// const rootCall = (req, res) =>res.send('Thank you very much')

// const rootCall = (req, res) => {
//     res.send('Thank you very much')
// }
// function rootCall(req, res){
//     res.send('Thank you very much')
// }
// app.get('/', rootCall =(req, res) =>{
//     res.send("Thank you very much");
// })
const users = ['tomal','jamal', 'helim','selim','tarek', 'farek']
// app.get('/users/:id',(req, res) =>{
//     const userID = req.params.id;
//     const name = users[userID];
//     res.send(name);
// })
app.get('/users/:id',(req, res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id,name});
})

app.get('/', rootCall =(req, res) =>{
    const fruit ={
        product : 'ada',
        price : 22
    }
        res.send(fruit);
});
app.get ('/fruits/banana',(req, res) =>{
    res.send({quantity:1000, price:11000});
} )

//post 
app.post('/adduser',(req, res) =>{
    console.log('post req send');
})
 

app.listen(3000, ()=> console.log('listening to port 3000'))