function alphabetPosition(text) {
  alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  text = text.toLowerCase().split('');
  answer = [];
  for (let i=0; i<text.length; i++) {
    for (let j=0; j<alpha.length; j++) {
      if (text[i] == alpha[j]) {
        answer.push(j+1);
      }
    }
  }
  return (answer.join(' '));
}