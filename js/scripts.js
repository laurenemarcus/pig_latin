var pigLatin = function(word) {
  var vowels = ["a", "e", "i", "o", "u", "y"];
  var idx = vowels.indexOf(word.slice(0,1));
  var letterize = word.split("");
  if (idx === -1) {
      return letterize.concat(word.slice(0,1)).concat("ay").join("").substr(1);
  } else {
    return word + "ay";
  }
};
