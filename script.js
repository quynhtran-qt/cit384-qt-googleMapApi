var today, hours, mins, sec;

function myTimer() {
    today = new Date();
    return today;
}

var runTimer = setInterval(myTimer, 1000);

console.log(runTimer);

document.getElementById('time').innerHTML = runTimer;

// Initialize and add the map
function initMap() {

    var coords = [
        { lat: 34.235712, lng: -118.523180 }, //34.235712, -118.523180
        { lat: 34.235513, lng: -118.531754 }, //34.235513, -118.531754
        { lat: 34.244590, lng: -118.531823 }, //34.244590, -118.531823
        { lat: 34.257391, lng: -118.523417 }, //34.257391, -118.523417 //34.244605, -118.527414
        //  { lat: 34.244605, lng: -118.527414 },
        //  { lat: 34.257285, lng: -118.527363 },
    ];
    // The location of CSUN
    var csun = { lat: 34.239325, lng: -118.529271 };
    // The map, centered CSUN
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 17, center: csun });
    // The marker, positioned at CSUN
    var marker = new google.maps.Marker({ position: csun, map: map });



    var editablePolygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        editable: true
    });
    editablePolygon.setMap(map);


}