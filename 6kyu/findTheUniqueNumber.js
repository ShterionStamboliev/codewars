function findUniq(arr) {
    let unique = arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
    return unique;
  }
findUniq([ 1, 0, 0 ])
findUniq([ 0, 1, 0 ])
findUniq([ 0, 0, 1 ])
findUniq([ 0, 0, 0.55, 0, 0 ])
findUniq([ 1, 1, 2, 1, 1 ])
findUniq([ 3, 10, 3, 3, 3 ])
