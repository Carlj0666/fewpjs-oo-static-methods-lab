class Formatter {
  //add static methods here
  static capitalize(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1)
  }
  static sanitize(inputString) {
    return inputString.replace(/[^A-Za-z0-9 '-]/g, "")
  }
  static titleize(sentence) {
    let newWords = []
    let bannedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let splitWords = sentence.split(" ")
    for (let i = 0; i < splitWords.length; i++) {

      if (i === 0) {
        newWords.push(this.capitalize(splitWords[i]))
      } else if (bannedWords.includes(splitWords[i])) {
        newWords.push(splitWords[i])
      } else {
        newWords.push(this.capitalize(splitWords[i]))
      }
    }
    return newWords.join(" ")
  }
}