const fs = require("fs");
var pupils = [];
var groupsize = 5;
var counter = 0;
function start()
{
	var lineReader = require('readline').createInterface({
		input: require('fs').createReadStream('input.txt')
	});

	lineReader.on('line', function (line,err) {
		pupils[counter] = line;
		counter++;
	});
	return pupils;
}


function shuffle(pupilarrayinput) {
	var ctr = pupilarrayinput.length, temp, index;

	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = pupilarrayinput[ctr];
		pupilarrayinput[ctr] = pupilarrayinput[index];
		pupilarrayinput[index] = temp;
	}
	return pupilarrayinput;
}

function shuffleEmaround(){
	pupils = shuffle(pupils);
	var output = "=============\ngroup 0\n\n";
	var counter = 0;
	var group = 1;
	for(i = 0; i<pupils.length; i++){
		if(counter < groupsize)
		{
			output = output + pupils[i] + "\n";
			counter++;
		}else{
			output = output + "\n=============\ngroup " + group  + "\n\n" + pupils[i] + "\n";
			counter=0;
			group++;
		}
	}
	
	fs.writeFile("./output.txt", output , function(err) {
		if(err) {
			return console.log(err);
		}
	});

	return;
}
console.log("Save the pupils names in the file input.txt line by line");
start();
setTimeout(function () {
	shuffleEmaround();
	console.log("saved output to output.txt");
}, 2000);


