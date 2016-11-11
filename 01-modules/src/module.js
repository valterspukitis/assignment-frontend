export function valid(email) {
    var regEx = /[0-9]{4}@fh-salzburg.ac.at/;
    return regEx.test(email);
}

export function degreeProgram(email) {
    var regEx = /[a-z]{3,4}(?=-[bm][0-9]{4}@)/;
    return regEx.exec(email)[0].toUpperCase();
}

export function level(email) {
    var regEx = /[a-z](?=[0-9]{4}@)/;
    return regEx.exec(email)[0].toUpperCase() + 'A';
}

export function graduationYear(email) {
    var regEx = /[0-9]{4}(?=@)/;
    var year = parseInt(regEx.exec(email)[0]);

    return year + (level(email) == 'BA' ? 3 : 2);
}