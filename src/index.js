const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
}

function decode(expr) {

    let phrase = [];

    for (let j = 0; j < expr.length;) {
        exprStr = expr.slice(j, j + 10);

        newExpr = exprStr
            .replace(/\*/g, 'q')
            .replace(/11/g, '-')
            .replace(/10/g, '.')
            .replace(/00/g, ' ')
            .replace(/qqqqqqqqqq/g, ' space')
            .replace(/ +/g, ' ').trim()

        exprArr = newExpr.split(" ")

        for (let i = 0; i < exprArr.length; i++) {
            if (exprArr[i] == "space") {
                phrase.push(" ");
            } else {
                let key = exprArr[i];

                phrase.push(MORSE_TABLE[key])
            }
        }
        j += 10;
    }
    return phrase.join('');
}


module.exports = {
    decode
}