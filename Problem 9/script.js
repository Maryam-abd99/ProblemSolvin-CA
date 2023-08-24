function checkTheWord(word) {
    let count = 0;
    let uppercase = 0;
    let lowercase = 0;
    for (let i = 0; i < word.length; i++) {
      for (let j = i; j < word.length; j++) {
        if (word[j] >= 'a' && word[j] <= 'z') {
          lowercase++;
        } else if (word[j] >= 'A' && word[j] <= 'Z') {
          uppercase++;
        }
  
        if (lowercase === uppercase) {
          count++;
        }
      }
    }
  
    return count;
  }
  
 
  console.log(checkTheWord("AAAaaa"));
  