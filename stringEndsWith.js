function solution(str, ending) {
  let len = ending.length;
  let firstEnding = str.slice(-len);
  if (firstEnding === ending || ending === '') {
     return true
  } else {
    return false
  }
}
solution("abcde", "");
solution("abcde", "abc");
