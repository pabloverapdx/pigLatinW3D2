var vowelCheck = function(word) {
  var vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
  // if(word.match(/^[aeiouAEIOU]/)
  for (var i = 0; i < vowels.length; i++) {
    if(word.substr(0, 1 ) == vowels[i]) {
      return word + "ay";
    }
  }
};
