
var lat;
var lon;

window.onload=()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(locationSuccess,locationError)
    }
    GetMap()
     
}

function locationSuccess(data){
    
        console.log("Success",data)
        document.getElementById("Status").style.color="green"
        document.getElementById("Status").innerHTML="Success";
        lat=data.coords.latitude;
        lon=data.coords.longitude;
        document.getElementById("Latitude").innerHTML=lat
        document.getElementById("Longitude").innerHTML=lon
        console.log(lat,lon)

}

function locationError(data){
    console.log("Error",data)
    document.getElementById("Status").style.color="red"
    document.getElementById("Status").innerHTML=data.message;
}



 function GetMap() {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: "AjwG3yFXdeEw_nIXrrQpL9mNEDyYAx9wtvjo4xKyJFwjkPtg4PkmPOxQJcGUvyrM"
    });
    //Request the user's location
    navigator.geolocation.getCurrentPosition(function (position) {
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);

        //Add a pushpin at the user's location.
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);

        //Center the map on the user's location.
        map.setView({ center: loc, zoom: 15 });
    });
}



