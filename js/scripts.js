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

var yCheck = function(word) {
  if (word.match(/^[yY]/)) {
    return true;
  }
};

var translate = function(word) {
  if(vowelCheck(word)){
    return word + "ay";
  }
  else {
    if (quCheck(word)){
      return word.slice(2) + word[1] +"ay"
    }
    else {
      return word.slice(1) + word[0] + "ay"
    }
  }
};
