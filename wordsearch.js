const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let line of horizontalJoin) {
    if (line.includes(word))
      return true;
  }


  let finalArray = [];
  const verticalJoin = letters.map((row, index) => {
    row.map((element, oIndex) => {
      if (index === 0) {
        const temp = [];
        temp.push(letters[index][oIndex]);
        finalArray.push(temp);
      } else {
        finalArray[oIndex].push(letters[index][oIndex]);
      }
    });
  });


  for (let l of finalArray.map(element => element.join(''))) {
    if (l.includes(word)) {
      return true;
    }
  }
  const horizontalRevJoin = letters.map(ls => ls.reverse().join(''));
  for (let l of horizontalRevJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};



module.exports = wordSearch;
