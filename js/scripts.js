
var vowelCheck = function(word) {
  if (word.match(/^[aeiouAEIOU]/)) {
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
      return word.slice(2) + "quay"
    }
    else {
      return word.slice(1) + word[0] + "ay"
    }
  }
};

var sentenceParse = function(sentence) {
  var parsedSentence = sentence.split(" ");
  return parsedSentence;
}

var pigLatinSentence = function(sentence) {
  sentenceParse = sentenceParse(sentence);
  var pigLatin = "";
  for(var i = 0; i < sentenceParse.length; i++){
    pigLatin += " " + translate(sentenceParse[i]);
  }
  return pigLatin;
}

//interface
$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    var translator = pigLatinSentence($("input#englishSentence").val());

    $(".translator").text(translator);

    $("#result").show();
    event.preventDefault();
  });
});
