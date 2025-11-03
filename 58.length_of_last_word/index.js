var lengthOfLastWord = function(s) {
    if(s.trim() === '') return

    let wordArray = s.split(' ').filter((i) => i !== ''), lastWord = wordArray[wordArray.length - 1]

    return lastWord.length
};

// Better answer than mine answer
var lengthOfLastWord2 = function(s) {
    let trimmed = s.trim();
    return trimmed.length - trimmed.lastIndexOf(' ') - 1;
};