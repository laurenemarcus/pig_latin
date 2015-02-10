describe('pigLatin', function() {
  it("adds 'ay' to the end of words that start with a vowel", function() {
    expect(pigLatin("owl")).to.equal("owlay");
  });

  it("puts the first consonant at the end of the word followed by 'ay' for a word that starts with a single consonant", function() {
    expect(pigLatin("day")).to.equal("ayday");
  });
});
