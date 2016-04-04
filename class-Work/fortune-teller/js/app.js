// 1. Use document.getElementById() and attach an .onclick 
//event handler to #clickme
// 2. Assign this event handler to a function named 
//tellFortune
// 3. The function ellFortune should:
// - A) store the values from the four inputs 
//(#hometown, #partner, #favNum, #jobTitle) in variables
// - B) concatenate these variables into the sentence:
// - "You will be a " + jobTitle + " living in " + hometown 
//+ " married to " + partner + " with " + favNum + " kids."
// - C) output this string to #output
$('#clickme').click(tellFortune);

function tellFortune () {
	var place= $('#hometown').val();
	var crush= $('#partner').val();
	var num= $('#favNum').val();
	var job= $('#jobTitle').val();
	var fortune = " You will be a " + job + " living in " + place + " married to " + crush + " with " + num + " kids.";
	$('#output').html(fortune)
}
