const sentence = "another string to test more words";
text1 = sentence;
for (let i = 0; i < text1.length; i++) {
  setTimeout(() => {
  process.stdout.write(text1[i]);
}, 50 * i) //delay the character output
};

setTimeout(() => {
  process.stdout.write("\n");
}, text1.length * 50) //delay the character output
