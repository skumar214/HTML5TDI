if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("http://www.w3schools.com/html/demo_sse.php");
    source.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
    };
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}