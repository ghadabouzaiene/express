const express = require('express');    //import
const app = express();                 // new app
const port = 5500;                      // port to listen on 


const date = new Date( Date.now());

//defining middleware for working hours 
function available(req,res,next) {
    const day =date.getDay()
    const hours =date.getHours();

    console.log(day,hours)

  if((day >=2 && day<=5 )  && (hours >=6 && hours<=9 )=== false ) {
    console.log ("Sorry we're Closed");
    // res.send('not available')
     res.sendFile(__dirname + '/main/error.html') ;
    
  }  
  else {
next();
}
}  
app.use(available);  
app.use(express.static('main'))
app.listen(port, (err)=>{
    err ? console.log(err) : console.log('running on 5500')
})
