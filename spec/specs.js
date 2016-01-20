describe('vowelCheck', function() {
  it("is true for any word that starts with a vowel", function() {
    // expect(vowelCheck("another")).to.equal("anotheray");
      expect(vowelCheck("another")).to.equal(true);
  });
  it("is false for any word that starts with a consonant", function() {
      // expect(vowelCheck("another")).to.equal("anotheray");
        expect(vowelCheck("banana")).to.equal(false);
    });
    it("is true for any word that starts with qu", function() {
      // expect(vowelCheck("another")).to.equal("anotheray");
        expect(quCheck("question")).to.equal(true);
    });
    it("is true for any word that starts with an y", function() {
      // expect(vowelCheck("another")).to.equal("anotheray");
        expect(yCheck("yoga")).to.equal(true);
  });
});
