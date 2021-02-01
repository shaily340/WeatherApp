const request = require('request');

const forecast= (longitude,latitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=b7d91716c7155e3d7cfb132fa770654e&query='+longitude+','+latitude+'&units=m';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location service!!',undefined);
        }
        else if(response.body.error){
            callback('Unable to find location :(',undefined);
        }
        else{
            callback(undefined,response.body.current.weather_descriptions[0]+'.Temperature is '+response.body.current.temperature +' but seems like '+ response.body.current.feelslike +' !!!');
        }
    })
}

module.exports=forecast;