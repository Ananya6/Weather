var weather=require('weather-js');
var geocodeAdd=(addr,callback) =>
{
  //console.log(addr);
  weather.find({search: addr, degreeType: 'C'}, function(err, result) {

  //console.log(JSON.stringify(body, null, 2));// 2 for indentation
  if(err){
    callback('Unable to the fetch the data',null,null);
    console.log(err);

  }
  else if(result.length==0){
    callback('Unable to find the address',null,null);
  }
  else{
    //console.log(JSON.stringify(result, null, 2));
    callback(null,result[0].location.lat,result[0].location.long);
    // console.log(`Latitude: ${body[0].location.lat}`);
    // console.log(`Longitude: ${body[0].location.long}`);
    // console.log(`Tomorrow's lowest temperature: ${body[0].forecast[2].low}`);
  }

});
}


module.exports.geocodeAddress=geocodeAdd;
//0ed862bd5818d1dfa5a25f3de55bced7
