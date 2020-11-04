const one = document.getElementById("one"),
    two = document.getElementById("two"),
    three = document.getElementById("three"),
    four = document.getElementById("four"),
    five = document.getElementById("five"),
    six = document.getElementById("six"),
    seven = document.getElementById("seven"),
    eight = document.getElementById("eight"),
    nine = document.getElementById("nine"),
    dot = document.getElementById("dot"),

    multiply = document.getElementById("multiply"),
    share = document.getElementById("share"),
    plus = document.getElementById("plus"),
    minus = document.getElementById("minus"),

    finalNum = document.getElementById("final-num"),
    rezult = document.getElementById("rezult");

let rezultString = '';

one.onclick = function () {
    rezultString = rezultString + '1';
    rezult.textContent = rezultString;
}

two.onclick = function () {
    rezultString = rezultString + '2';
    rezult.textContent = rezultString;
}

three.onclick = function () {
    rezultString = rezultString + '3';
    rezult.textContent = rezultString;
}

four.onclick = function () {
    rezultString = rezultString + '4';
    rezult.textContent = rezultString;
}

five.onclick = function () {
    rezultString = rezultString + '5';
    rezult.textContent = rezultString;
}

six.onclick = function () {
    rezultString = rezultString + '6';
    rezult.textContent = rezultString;
}

seven.onclick = function () {
    rezultString = rezultString + '7';
    rezult.textContent = rezultString;
}

eight.onclick = function () {
    rezultString = rezultString + '8';
    rezult.textContent = rezultString;
}

nine.onclick = function () {
    rezultString = rezultString + '9';
    rezult.textContent = rezultString;
}

dot.onclick = function () {
    rezultString = rezultString + '.';
    rezult.textContent = rezultString;
}

multiply.onclick = function () {
    rezultString = rezultString + '*';
    rezult.textContent = rezultString;
}

share.onclick = function () {
    rezultString = rezultString + '/';
    rezult.textContent = rezultString;
}

plus.onclick = function () {
    rezultString = rezultString + '+';
    rezult.textContent = rezultString;
}

minus.onclick = function () {
    rezultString = rezultString + '-';
    rezult.textContent = rezultString;
}

finalNum.onclick = function() {

    


    console.log(rezultString)
    console.log(Number(rezultString))
}
