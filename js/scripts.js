var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var firstLetter = vowels.indexOf(word.slice(0,1));
  var secondLetter = vowels.indexOf(word.slice(1,2));
  var letterize = word.split("");
  if ((firstLetter === -1) && (secondLetter != -1)) {
      return letterize.concat(word.slice(0,1)).concat("ay").join("").substr(1);
  } else if ((firstLetter === -1) && (secondLetter === -1)) {
      return letterize.concat(word.slice(0,2)).concat("ay").join("").substr(2);
  } else {
    return word + "ay";
  }
};
