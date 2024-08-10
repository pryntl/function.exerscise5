//added function base code.
function countVowels(word) {
  //made a variable to show the last result.
  let output = 0;
  //defining the vowels.
  const vowels = "aeiouAEIOU";
  //turning the word from string to array(using split method.) so we can use filter method which is onle for arrays. then we check how many vowles it includes (using length method).
  output = word.split("").filter((vwl) => vowels.includes(vwl)).length;
  //returning the main var at the end.
  return output;
}
//testing.
console.log(countVowels("ipoheghi"));
