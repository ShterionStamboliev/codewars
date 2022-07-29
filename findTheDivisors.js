function divisors(integer) {
  let box = [];

  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
        box.push(i);
    }
}
let chk = box.length !== 0 ? box : `${integer} is prime`
return chk;
};
divisors(12)
divisors(25)
divisors(13)