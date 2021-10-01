const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const { read } = require('fs');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/', (req,res)=>{
   
    res.sendFile(__dirname + '/index.html');
    
})

app.post('/', (req,res)=>{

    console.log(req.body.cityName);
    const apiKey = '081eba2d68834d5d9ff42032212808';
    const place = req.body.cityName;

    const url = 'https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + place + '&aqi=no';

    https.get(url, (response)=>{
        console.log(response.statusCode);

        response.on('data', (data)=>{        
            const weatherData = JSON.parse(data); 

            const temp = weatherData.current.temp_c;
            const weatherDesc = weatherData.current.condition.text;
            const icon = weatherData.current.condition.icon;

            
            res.write('<h1 style="color:#4751c7;font-family: Cambria, Cochin, Georgia;text-align:center">The weather today is '+ weatherDesc + '</h1>');
            res.write('<h1 style="color:#db2c4d;font-family: Cambria, Cochin, Georgia;text-align:center">Temperature in ' + place + ' is ' + temp + ' degrees celsius!</h1>');
            res.write('<img style="display:block; margin-left:auto; margin-right: auto; width:10%;" src =' + icon + '>');            
            res.send();
            
        })  
    })
    
    

    
})




app.listen(3000, ()=>{
    console.log('Server started at port 3000');
})