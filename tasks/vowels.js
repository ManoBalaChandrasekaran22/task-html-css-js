//finding vowels//
function countVowels(str) {
    var vowels = "aeiou";
    var count = 0;
   for (var i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) !== -1) {
        count++;
      }
    }
  return count;
  }
  console.log(countVowels("mom"));