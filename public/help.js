const weatherForm= document.querySelector('form');
const search=document.querySelector('input');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=search.value;
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
               document.querySelector('#forecast').innerHTML=data.error;
               document.querySelector('#location').innerHTML="";
                document.querySelector('#address').innerHTML="";
            }
            else{
                document.querySelector('#forecast').innerHTML="Forecast: "+data.forecast;
                document.querySelector('#location').innerHTML="Location: "+data.location;
                document.querySelector('#address').innerHTML="Address: "+data.address;
            }
        })
    })
})
