module.exports = {
  getLinks(str) {
    let matches = str.match(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
    );
    let indices = new Map();
    if (matches != null) {
      for (let i = 0; i < matches.length; i++) {
        let index = str.indexOf(matches[i]);
        indices.set(index, matches[i].length);
      }
    }
    return indices;
  },
  isVowel(s) {
    return /^[aeiou]$/i.test(s);
  },
};
