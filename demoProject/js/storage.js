function init(){

if(typeof(Storage) !== "undefined") {
		//Retrieve data from session storage
		if (sessionStorage.username){
		document.getElementById("sessionuser").innerHTML = "Logged in user: "+sessionStorage.username;
		}
		else
		{
		document.getElementById("sessionmsg").innerHTML = "Please login";	
		}

		// Store in local
		if(localStorage.siteVisit){
			localStorage.siteVisit = Number(localStorage.siteVisit)+1;
		}
		else{
			localStorage.siteVisit = 1;
		}
		// Retrieve from local
		document.getElementById("localmsg").innerHTML = "You have visited this website "+localStorage.siteVisit + " times";
		
} else {
		document.getElementById("localmsg").innerHTML =  "Sorry! No Web Storage support..";
		document.getElementById("sessionmsg").innerHTML = "Sorry! No Web Storage support..";
}

}

function saveSession(){
	if (sessionStorage.username) {
			document.getElementById("sessionmsg").innerHTML = "Login Failed! User "+sessionStorage.username+" is already logged in";
		} else {
			document.getElementById("sessionmsg").innerHTML = "Login successful!";
			sessionStorage.username = document.getElementById("username").value;
			document.getElementById("sessionuser").innerHTML = sessionStorage.username;
			}
}