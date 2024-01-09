const reverseString = function(mensaje) {
    var msg= String(mensaje);
    var splitString = msg.split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');
    return joinArray
}

// Do not edit below this line
module.exports = reverseString;
