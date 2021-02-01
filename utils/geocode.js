const request=require('request');
 
const geocode = (address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2hhaWx5NDMiLCJhIjoiY2traTV3NmZwMjE3MTJ3cGE3MGxpc3FuYSJ9.ZmJ86J9FIiOSvZ6_r_McjQ'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location service!!',undefined);
        }
        else if(response.body.features.length===0){
            callback('Unable to find location.Try another search!',undefined);
        }
        else{
            callback(undefined,{
                longitude:response.body.features[0].center[1],
                latitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode;