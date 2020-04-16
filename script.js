function rot13(str) {
    // turn a string into an array, manipulate elements of the array, turn it back into string and return the string. 
    // split to put those elements into an array. Map throught the array and apply the manipulation, then join that array back to string.
    // make a function called cipher to manipulate the elements
    str = str.split('').map(cipher).join('');
    return str;
}

//  Don't transform non-alphabetic characters. Use Regex. Declare that regex. 
// ^ means not. Everything that is not a-z and A-Z with global variable. 
function cipher(userInput) {
    var symbolregex = /[^a-zA-Z]/g;
    if (symbolregex.test(userInput)) {
        return userInput;
    }
    // info from ascii site. 
    // 0 postion works here cuz letters is one element in one string.
    // make a condition to stay within the wanted margin on Ascii. Margin is only the letters of the alphabet.
    // return back into a letter.
    var codeAscii = userInput.charCodeAt(0);
    if (codeAscii > 77) {
        codeAscii -= 13;
    } else {
        codeAscii += 13;
    }
    return String.fromCharCode(codeAscii);
}

//console.log(rot13("SERR PBQR PNZC"));

function showRot13() {
    var input = document.getElementById('userInput');
    var result = document.querySelector(".result");
    result.textContent = rot13(input.value);
}