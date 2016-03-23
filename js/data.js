var data = function(connectionCheck){
	if(connectionCheck())
	    console.log('Connected');
	else
	    console.log('No Connection');	
}

module.exports = data;