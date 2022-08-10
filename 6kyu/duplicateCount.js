function duplicateCount(n) {
    n = n.toLowerCase();
    let box = {};
    let count = 0;
    for (const i of n) {
        if (!box[i]) {
            box[i] = 1;
        } else if (box[i] < 2) {
            box[i] += 1;
            count++;
        }
    }
    return count;
}
duplicateCount("");
duplicateCount("abcde");
duplicateCount("aabbcde");
duplicateCount("aabBcde");
duplicateCount("Indivisibility");
duplicateCount("Indivisibilities");
