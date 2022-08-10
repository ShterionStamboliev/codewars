function digitalRoot(n) {
    n = n.toString();
    let sum = 0;
    for (const int of n) {
        sum += Number(int)
    }
    if (sum > 9) {
        return digitalRoot(sum);
    }
    return sum
}
digitalRoot(454545)