function high(x){
    let alphabet = ('abcdefghijklmnopqrstuvwxyz');
    let result = 0;
    let str = '';
    let box = {};

    for (let i = 0; i < x.length; i++) {
        if (alphabet.includes(x[i])) {
            str += x[i];
            result += x.charAt(i).charCodeAt(0) - 96
        }
        if (x[i] === ' ') {
            box[str] = {score: result}
            str = '';
            result = 0;
            continue;
        }
    } 
    box[str] = {score: result}
    for (const score of Object.entries(box)) {
        if (box[score[0]].score === box[score[0]].score) {
            console.log(score[0]);
        } 
        
        // console.log(`${score[0]} ${box[score[0]].score}`);
    }
    }

high('man i need a taxi up to ubud')
high('take me to semynak')
high('aa b')
high('what time are we climbing up the volcano')
high('b aa')
high('bb d')
high('d bb')
high('aaa b')