function checkIfAlphabetical(str) {
    let currentValue = str.charCodeAt(0);
    for (let index = 1; index < str.length; index++) {
      if (str.charCodeAt(index) != ++currentValue) {
        return String.fromCharCode(currentValue);
      }
    }
    return undefined;
}
  
checkIfAlphabetical("stvwx");// should return "u".
checkIfAlphabetical("bcdf");// should return "e".
checkIfAlphabetical("abcdefghijklmnopqrstuvwxyz");// should return undefined.