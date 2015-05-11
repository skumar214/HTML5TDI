
function complexWork(){
		var startTime = new Date().getTime();
		var count = 0
		for (var i=0; i<10; i++)
    		{
			var count = count + moreComplexWork();
    		}
    		var endTime = new Date().getTime();
    		postMessage("Work Output - "+count+"<br> Time Taken - "+(endTime-startTime)/1000 +" seconds");
	}


function moreComplexWork() {

		var count = 0
    	for (var i=0; i<1000000000; i++)
    		{
			count = count + i;
    		}
		return count;           
        }


complexWork();