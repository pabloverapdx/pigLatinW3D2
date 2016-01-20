var vowelCheck = function(word) {
  if (word.match(/^[aeiouAEIOU]/)) {
    // return word + "ay";
    return true;
  }
  else{
    return false;
  }
};

var quCheck = function(word) {
  if (word.match(/^[quQU]/)) {
    return true;
  }
  else{
    return false;
  }
};
