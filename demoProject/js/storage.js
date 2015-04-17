function init(){

if(typeof(Storage) !== "undefined") {
		// Store
		localStorage.lastname = "Smith";
		
		// Retrieve
		document.getElementById("localresult").innerHTML = localStorage.lastname;
		
} else {
		// Sorry! No Web Storage support..
}

}

function sessionClick(){
	if (sessionStorage.clickcount) {
			sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
		} else {
			sessionStorage.clickcount = 1;
			}
		document.getElementById("sessionresult").innerHTML = "You have clicked the button " +
		sessionStorage.clickcount + " time(s) in this session.";
}