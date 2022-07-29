function findUniq(arr) {
  let arrNew = arr.map(a => {
    return[...new Set(a.toLowerCase())].sort().join('')
  });
  for (let i = 0; i < arrNew.length; i++) {
    if (arrNew.indexOf(arrNew[i]) === arrNew.lastIndexOf(arrNew[i])) {
        return arr[i];
    }
  }
  }
findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ])
findUniq([ 'silvia', 'vasili', 'victor' ])
findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ])
findUniq([ '    ', 'a', ' ' ])