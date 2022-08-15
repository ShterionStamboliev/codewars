function solution(str) {
  let res = "";
  let box = [];
  let count = 0;

  for (const ch of str) {
    count++;
    res += ch;
    if (count % 2 === 0) {
      box.push(res);
      res = "";
      continue;
    }
  }
  if (res.length == 1) {
    res += "_";
    box.push(res);
    res = "";
  }
  return box;
}
solution("abcdef");
solution("abcdefg");
solution("");

// ["ab", "cd", "ef"]);
// ["ab", "cd", "ef", "g_"]);
