const request=require('request');

var weatherData=(lat,long,callback)=>{
  request({
  url:`https://api.darksky.net/forecast/0ed862bd5818d1dfa5a25f3de55bced7/${lat},${long}`,
  json:true,
},(error,response,body)=>{
  if(error){
    callback('Unable to connect to forecast server',null);
  }else if(response.statusCode===400){

    callback('Unable to fetch weather',null);
  }else if(response.statusCode==200)
  callback(null,body.currently.temperature);
  callback(null,body.currently.summary);
})
};

module.exports.getTemp=weatherData;
