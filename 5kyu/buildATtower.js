function towerBuilder(nFloors) {
    let box = [];
    let space = 0;
        for (let i = nFloors; i > 0; i--) {
            box.push(' '.repeat(space) + "*".repeat(i) + '*'.repeat(i - 1) + ' '.repeat(space));
            space++;
        }
        return box.reverse()
  }
towerBuilder(1);
towerBuilder(2);
towerBuilder(3);
