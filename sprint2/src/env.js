const ENV = {
    videoList: 'https://project-2-api.herokuapp.com/videos?api_key=6c4aece2-1540-41c3-ac13-f28707758acf',

    /**
     * 
     * @param {String} id 
     */

    getVideo:    id => `https://project-2-api.herokuapp.com/videos/${id}?api_key=6c4aece2-1540-41c3-ac13-f28707758acf'`,
    postComment: id => `https://project-2-api.herokuapp.com/videos/${id}/comments?api_key=6c4aece2-1540-41c3-ac13-f28707758acf'` 
}

export function getReadableDate(timestamp){

    let elapsedTime = (Date.now() - timestamp) / 1000

    let time = {
        input: timestamp,
        seconds: elapsedTime ,
        minutes: '',
        hours:   '',
        days:    '',
        months:  '',
        years:   '',
        formatString: function(){
            let time = this.seconds;
            let word = ' second'
            if(this.minutes !== '')  { time = this.minutes; word = 'minute' }
            if(this.hours   !== '')  { time = this.hours;   word = ' hour'  }
            if(this.days    !== '')  { time = this.days;    word = ' day'   }
            if(this.months  !== '')  { time = this.months;  word = ' month' }
            if(this.years   !== '')  { time = this.years;   word = ' year'  }
            if(Math.floor(time) > 1) { word += 's'}
            return `${Math.floor(time)} ${word} ago`
        } 
    } 

    if( time.seconds > 60 ) time.minutes = time.seconds / 60;
    if( time.minutes > 60 ) time.hours   = time.minutes / 60;
    if( time.hours   > 24 ) time.days    = time.hours   / 24;
    if( time.days    > 30 ) time.months  = time.days    / 30; 
    if( time.months  > 12 ) time.years   = time.months  / 12;

    return {
        timeObject: time,
        formattedTime: time.formatString() 
    }
}

export default ENV