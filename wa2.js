function convertTime(time24) {
  let time12 = "";
  const hour = parseInt(time24.substring(0, 2));
  const minute = time24.substring(3);
  if (hour === 0) {
    time12 = "12:" + minute + " AM";
  } else if (hour === 12) {
    time12 = "12:" + minute + " PM";
  } else if (hour > 12) {
    time12 = (hour - 12) + ":" + minute + " PM";
  } else {
    time12 = hour + ":" + minute + " AM";
  }
  return time12;
}


// converting sunrise time................
function gettime(val){
  console.log(val, typeof(val));
  var date = convertTime(((((new Date(val*1000)).toString()).split(" ")).splice(1,4))[3]);
  return date;
}

async function logJSONData() {
  const response = await fetch("https://weatherapi-dp.onrender.com/getWeather?city=durgapur");
  const jsonData = await response.json();
  console.log(jsonData.singleDay.temperature);

  // putting values in DOM
  var singleDayTemp = document.getElementById('text');
  singleDayTemp.innerText=jsonData.singleDay.temperature + '°C';

  var singleDayWeather = document.getElementById('Weather');
  singleDayWeather.innerText=jsonData.singleDay.weather;

  var singleDayPlace = document.getElementById('place');
  singleDayPlace.innerText=jsonData.singleDay.cityName;

  var singleDayDatetime = document.getElementById('timeDate');
  var date = (((new Date(jsonData.singleDay.date*1000)).toString()).split(" ")).splice(1,4);
  var time = date[3]
   var HrTime12 = convertTime(time);
   singleDayDatetime.innerText=date[1]+" "+date[0]+" "+date[2]+" "+ HrTime12;

// 2nd card..................................................

var singleDayWindSpeed = document.getElementById("speed");
singleDayWindSpeed.innerText=jsonData.singleDay.windSpeed+"";

var singleDayWindDirec = document.getElementById("time");
 singleDayWindDirec.innerText=jsonData.singleDay.windDir+"";

 
var singleDaySunrise = document.getElementById("sunrise");
singleDaySunrise.innerText=gettime(jsonData.singleDay.sunrise);
 
var singleDaySunset = document.getElementById("sunset");
singleDaySunset.innerText=gettime(jsonData.singleDay.sunset);

var singleDayHumidity = document.getElementById("num");
singleDayHumidity.innerText=jsonData.singleDay.humidity;

var singleDaymin = document.getElementById("min");
singleDaymin.innerText=jsonData.singleDay.minTemp+ '°C';

var singleDaymax = document.getElementById("max");
singleDaymax.innerText=jsonData.singleDay.maxTemp+ '°C';

var singleDayFL = document.getElementById("FL");
singleDayFL.innerText=jsonData.singleDay.feelsLike;

}


 logJSONData()