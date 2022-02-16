const express=require('express')
const one=express()
const port=1042
const path=require('path')
const body=require('body-parser')


one.use('/frontend',express.static(path.resolve(__dirname,'frontend')))
one.use(body.json())

one.post('/get',(req, res)=>{
console.log(req)
res.json({statuc:'ok'})
})


one.listen(port,()=>{
console.log('running at:http://www.localhost:'+port)
})