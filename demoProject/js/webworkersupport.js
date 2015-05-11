var w;
var w1;
function startWork() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            
            w = new Worker("../js/webworker.js");
        }
        w.onmessage = function(event) {
            document.getElementById("datawork").innerHTML = event.data;
           
        };
    } else {
        document.getElementById("datawork").innerHTML = "Sorry! No Web Worker support.";
    }
}


function stopWork() { 
    w.terminate();
    w = undefined;
}

function startParallelWork() {
    var startTime = new Date().getTime();
    if(typeof(Worker) !== "undefined") {
        if(typeof(w1) == "undefined") {
            w1 = new Worker("../js/webworkercomplex.js");
        }
        w1.onmessage = function(event) {
            var endTime = new Date().getTime();
            document.getElementById("datamultiwork").innerHTML = "Work Output - "+event.data+"<br> Time Taken - "+(endTime-startTime)/1000 +" seconds";
           
        };
    } else {
        document.getElementById("datamultiwork").innerHTML = "Sorry! No Web Worker support.";
    }
}