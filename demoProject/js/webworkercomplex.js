var count = 0;
var respCount = 0;

function complexWork() {
 		var w1 = new Worker("webworkermorecomplex.js");
		var w2 = new Worker("webworkermorecomplex.js");
		var w3 = new Worker("webworkermorecomplex.js");
		var w4 = new Worker("webworkermorecomplex.js");
		var w5 = new Worker("webworkermorecomplex.js");
		var w6 = new Worker("webworkermorecomplex.js");
		var w7 = new Worker("webworkermorecomplex.js");
		var w8 = new Worker("webworkermorecomplex.js");
		var w9 = new Worker("webworkermorecomplex.js");
		var w10 = new Worker("webworkermorecomplex.js");
		
    	
        w1.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w2.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w3.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w4.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w5.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w6.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w7.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w8.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w9.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
		w10.onmessage = function(event) {
			respCount = respCount + 1;
 			count = count + Number(event.data);     
 			if (respCount==10){
 				postMessage(count); 
 			}  
        }
}

complexWork();