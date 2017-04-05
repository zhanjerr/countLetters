function countLetters(str){
  var input = str.split(" ").join("").toLowerCase();
  var distinctLetters = [];
  var distinctLetterCount = {};
  //find all distinct letter, assign to new array
  // console.log(str.split(" ").join(""));
  // console.log(distinctLetters.indexOf("l"));
  for (var i in input){
    if (distinctLetters.indexOf(input[i]) > -1){
      // console.log("found it");
    } else {
      distinctLetters.push(input[i]);
      // console.log("got to else");
    }
  }
  // console.log(distinctLetters);
  //loop through and count occurance of each letter in array
  for (var i of distinctLetters){
    distinctLetterCount[i] = input.split(i).length - 1;
  }
  return distinctLetterCount;
}

// countLetters("light house");
 console.log(countLetters("lighthouse in the house"));