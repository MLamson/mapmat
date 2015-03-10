
var map = L.map('map').setView([51.505, -0.09], 13);

//L.mapbox.accessToken = 'pk.eyJ1IjoibWxhbXNvbiIsImEiOiJrR1lxejlZIn0.jNQ5v-SlOw7pzRjDgVRVhQ';


// L.tileLayer('http://{s}.tiles.mapbox.com/v3/mlamson.lc66lkk4/{z}/{x}/{y}.png', {
//     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     maxZoom: 18
// }).addTo(map);



L.tileLayer('https://{s}.tiles.mapbox.com/v4/{mlamson.lc66lkk4}/{z}/{x}/{y}.png?access_token={token}', {
    //attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    subdomains: ['a','b','c','d'],
    mapId: 'mlamson.lc66lkk4',
    token: 'pk.eyJ1IjoibWxhbXNvbiIsImEiOiJrR1lxejlZIn0.jNQ5v-SlOw7pzRjDgVRVhQ'
}).addTo(map);