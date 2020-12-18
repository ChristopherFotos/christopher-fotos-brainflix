const ENV = {
    videoList: 'https://project-2-api.herokuapp.com/videos?api_key=6c4aece2-1540-41c3-ac13-f28707758acf',

    /**
     * 
     * @param {String} id 
     */

    getVideo: (id) => `https://project-2-api.herokuapp.com/videos/${id}?api_key=6c4aece2-1540-41c3-ac13-f28707758acf'`
}

export default ENV