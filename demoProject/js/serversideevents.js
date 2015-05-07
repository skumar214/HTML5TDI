window.onload = function() {
if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("/stream");
	source.onmessage = function(event) {
        document.getElementById("scrollableresult").innerHTML += event.data + "<br>";
    };
} else {
    document.getElementById("scrollableresult").innerHTML = "Sorry, your browser does not support server-sent events...";
}
}
