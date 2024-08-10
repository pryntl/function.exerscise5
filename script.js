function countVowels(word) {
  let output = 0;
  const vowels = "aeiouAEIOU";
  output = word.split("").filter((vwl) => vowels.includes(vwl)).length;
  return output;
}
console.log(countVowels("ipoheghi"));
