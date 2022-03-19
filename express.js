const express = require('express')

const put = express()

const port = 6586

const path = require('path')

const multer = require('multer')

const imgstore = multer.diskStorage({
    destination : (live, File, back)=>{
        back(null, "serverphotos")
    },
    filename : (let, File, cback)=>{
        console.log(File)
        cback(null, Date.now() + path.extname(File.originalname))
    }
})

const imgrec = multer({storage : imgstore})

put.use('/one', express.static('one'))
put.use(express.json())


put.post('/data', imgrec.single('images') ,(req, res)=>{
    console.log(req.body)
})

put.listen(port, ()=>{
console.log(`${'http://localhost:'}`+port+'/one')
})
 