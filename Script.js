$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Surat&units=imperial&APPID=0d6fb5554ab83b62c05556abcf2d54e6",
function(data){
    console.log(data);
    var icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var temp=data.main.temp;
    var vis=data.visibility;
    var humid=data.main.humidity;
    var weather=data.weather[0].main;
    var desc=data.weather[0].description;
    var wind=data.wind.speed;
    $('.icon').attr('src',icon);
    $(".temp").append(temp);
    $(".weather").append(weather);
    $(".desc").append(desc);
    $(".humid").append(humid);
    $(".vis").append(vis);
    $(".wind").append(wind);
});