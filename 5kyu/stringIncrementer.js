function incrementString(strng) {
    let str = strng.slice(0, -1);
    let lastDigit = strng.slice(-1).match(/[0-9]/);
    return lastDigit === null ? strng + "1" : lastDigit != 9 ? str + (+lastDigit + 1) : incrementString(str) + "0";
  }
incrementString("foo")
incrementString("foobar002")
// incrementString("foobar001")
incrementString("foobar99999")
// incrementString("")
// incrementString("foobar099")
