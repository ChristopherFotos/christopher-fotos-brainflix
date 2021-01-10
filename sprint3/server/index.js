const fs      = require('fs')
const videos  = require('./videos')
const data    = require('./data/videos.json')
const cors    = require('cors')
const express = require('express')
const app     = express()

// middlewear
app.use(cors())
app.use(express.json())
app.use(express.static('./public'))
app.use('/videos', videos)

app.listen(8080, ()=> console.log('running on 8080'))
