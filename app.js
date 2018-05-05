//const request = require('request');

const yargs = require('yargs');
const geocode=require('./geocode/geocode.js');
const darkSky=require('./weather/weather.js');
//const request=require('request');
// request({
//   url:'http://maps.googleapis.com/maps/api/geocode/json?address=artemis%20hospital%20gurgaon%20haryana',
//   json:true
// },
// (error,response,body)=>{
//   console.log(JSON.stringify(body));
// }
// );
const yargv=yargs
.options({
   a:{
     demand: true,
     alias: 'address',
     describe:'Address to fetch weather for',
     string: true
   }
})
.help()
.alias('help','h')
.argv;
var addr=yargv.address;


//geocode.geocodeAddress(addr);
var Longitude=null;
var Latitude=null;
geocode.geocodeAddress(addr,(errorMssg,lat,long)=>{
  if(errorMssg){
    console.log(errorMssg);
  }else{
    Latitude=lat;
    Longitude=long;
    darkSky.getTemp(Latitude,Longitude,(errorMssg,weather)=>{
      if(errorMssg){
        console.log(errorMssg);
      }else{
        console.log(JSON.stringify(weather,undefined,2));
      }
    })
  }

}

);

// var x=5;
// console.log(x);
// function hello(){
//   x=4;
//   console.log(x);
// }
// hello();
// console.log(x);
