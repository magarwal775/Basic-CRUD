const express= require('express');
const bodyParser= require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.listen(8000,function(){
  console.log('listening on 8000')
})
app.get('/', (req, res) => {
  res.sendFile('C:\\Users\\HP\\Desktop\\quotes\\index.html')
})
app.post('/quotes', (req, res) => {
  console.log(req.body)
})
