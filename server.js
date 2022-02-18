const express=require('express')
const one=express()
const port=process.env.PORT||1042
const path=require('path')


one.use('/frontend',express.static('frontend'))
one.use(express.json())

one.post('/data', (req, res)=>{
console.log(req.body)
})


one.listen(port,()=>{
console.log('running at:http://www.localhost:'+port)
})
