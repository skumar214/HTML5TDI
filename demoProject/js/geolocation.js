var x ;

function init(){
	x = document.getElementById("demo");
	
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else { 
	   x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
	var loc = {};
	loc.lat =  position.coords.latitude;
	loc.lng = position.coords.longitude;
	loc.acc = position.coords.accuracy;


    x.innerHTML = "Latitude: " + loc.lat + 
    "<br>Longitude: " + loc.lng +
    "<br>Accuracy (meters): " + loc.acc;
	
	var myOptions = {zoom:14,center:new google.maps.LatLng(loc.lat,loc.lng),mapTypeId: google.maps.MapTypeId.TERRAIN}; 
	var map = new google.maps.Map(document.getElementById("mapholder"), myOptions); 
	var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(loc.lat, loc.lng)}); 
	var infowindow = new google.maps.InfoWindow({content:"<b>You are here!</b>" }); 
	google.maps.event.addListener(marker, "click", function(){
		infowindow.open(map,marker); 	
		}); 
	infowindow.open(map,marker); 
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}
//google.load("maps", "3.x", {other_params: "sensor=false", callback:getClientLocation});
//Google API Way
function getClientLocation(){
			
		    var geocoder = new google.maps.Geocoder();
    		if(google.loader.ClientLocation) {
        	var loc = {};
        	loc.lat=google.loader.ClientLocation.latitude;
        	loc.lng = google.loader.ClientLocation.longitude;

			var myOptions = {zoom:14,center:new google.maps.LatLng( loc.lat,loc.lng),mapTypeId: google.maps.MapTypeId.TERRAIN}; 
			var map = new google.maps.Map(document.getElementById("mapholderclient"), myOptions); 
			var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(loc.lat, loc.lng)}); 
			var infowindow = new google.maps.InfoWindow({content:"<b>You are here!</b>" }); 
			google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker); 
			}); 

			infowindow.open(map,marker); 
			document.getElementById("lat").innerHTML ="Latitude: "+ loc.lat +'<br>Longitude: '+ loc.lng;
        	
    		}
    		else{
			document.getElementById("lat").innerHTML ="Cannot determine your location";
    		}
			
			
			}
	
//google.maps.event.addDomListener(window, 'load', init_map); 
//	var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+loc.lat+","+loc.lng+"&zoom=14&size=400x300&sensor=false";
//	document.getElementById("mapholderclient").innerHTML = "<img src='"+img_url+"'>";