function spinWords(input) {
  input = input
    .split(" ")
    .map((word) => (word.length < 5 ? word : word.split("").reverse().join("")))
    .join(" ");

  return input;
}
spinWords("Welcome");
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
