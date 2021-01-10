const express    = require('express')
const fs         = require('fs')
const {v4: uuid} = require('uuid');
const data      = require('./data/videos.json')
const cors      = require('cors')
const makeVideo = require('./makeVideo.js')
const router    = express.Router()

/* middlewear */
router.use(cors())

/* get the full video list */
router.get('/', (req, res)=>{

    res.json(
        data.videos.map(v=>{return{id: v.id, title:v.title, channel: v.channel,image:v.image}})
    )
})

/* get a video by id */
router.get('/:id', (req, res)=>{
    let video = data.videos.filter(v => v.id == req.params.id)[0]
    console.log(video)

    video ? res.json(video) : res.status(404).send('video not found')
})

/* post a video */
router.post('/', (req, res)=>{
    
    let video = makeVideo(req.body.title, req.body.description, req.body.image)
    data.videos.push(video)

    fs.writeFile('./data/videos.json', JSON.stringify(data), ()=>1)

    res.json(video)
})

/* export router */
module.exports = router