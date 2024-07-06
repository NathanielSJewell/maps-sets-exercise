// Quick Question #1
// What does the following code return?
new Set([ 1, 1, 2, 2, 3, 4 ]);

//{1, 2, 3, 4}

// Quick Question #2
// What does the following code return?
[ ...new Set('referee') ].join('');

//ref

// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([ 1, 2, 3 ], true);
m.set([ 1, 2, 3 ], false);
console.log(m);

//{[1, 2, 3] => true, [1, 2, 3] => false};

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

//What data strcutures am I working with in this problem?
//Arrays, and I think sets.

//How can I figure out if an array has a duplicate using set??

function hasDuplicate(arr) {
	const values = [ ...new Set(arr) ];
	if (values.length !== arr.length) {
		return false;
	}
	return true;
}

//What is happening here?
//set creates a set of values from the passed in array. it is then spread into a new array asigned to variable values. using set gets rid of duplicates, creating a new array with no duplicates. We then compare the original array's length to the new array's length.

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are letters and the values are the count of the vowels in the string.
vowelCount('awesome'); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt'); // Map { 'o' => 1 }

//What data structure am I working with?
//Map.

//can map iterate over a string?

function vowelCount(string) {
	let newMap = new Map();
	for (let [ key, value ] of newMap.entries()) {
	}
	// for (let i = 0; i < string.length; i++) {
	// 	if (string[i] === `a` || string[i] === `e` || string[i] === `i` || string[i] === `o` || string[i] === `u`) {
	// 		newMap.set(string[i], newMap.get(string[i] + 1));
	// 	}
	// }
	return newMap;
}

function isVowel(char) {
	return 'aeiou'.includes(char);
}

function vowelCount(str) {
	const vowelMap = new Map();
	for (let char of str) {
		let lowerCaseChar = char.toLowerCase();
		if (isVowel(lowerCaseChar)) {
			if (vowelMap.has(lowerCaseChar)) {
				vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
			} else {
				vowelMap.set(lowerCaseChar, 1);
			}
		}
	}
	return vowelMap;
}
