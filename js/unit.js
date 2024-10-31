let inputOne = document.getElementById("unitOne").value;
console.log(inputOne);

let inputTwo = document.getElementById("unitTwo").value;
console.log(inputTwo);

if(inputOne == "Foot"){
	console.log("The first element is foot.");
}else if(inputOne == "Meter"){
	console.log("The first element is meter.");
}

else{
	console.log("The first element is inch.");
}

if(inputTwo== "Foot"){
	console.log("The second element is foot.");
}else if(inputTwo == "Meter"){
	console.log("The second element is meter.");
}else{
	console.log("The second element is inch.");
}
