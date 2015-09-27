//prompt user for a number
//write one named function that takes an integer
//parseInt()





function Fizzbuzz(num) {

var num = prompt("Enter a non decimal number to count to:");

	function checkNum(num) {
		if (num % 1 != 0) {
			return "Invalid answer";
		}
	}
parseInt(num, 10);

	for (var i = 0; i < num; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log("Fizzbuzz!");
		}
		else if (i % 3 == 0) {
			console.log("Fizz!");
		}
		else if (i % 5 == 0) {
			console.log("Buzz!");
		}
		else {
			console.log(i);
			}
		}
	}
var num = 0;

Fizzbuzz(num);
