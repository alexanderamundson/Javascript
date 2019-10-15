/*
Translate the provided string to pig latin.
Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel, simply add "way" to the end.
Input strings are all lowercase.
*/

function translatePigLatin(str) {
    //if begins with vowel, just add way
    if (str.startsWith("a") || str.startsWith("e") ||str.startsWith("i") || str.startsWith("o") || str.startsWith("u")) {
     return str + "way"; 
    }
    //else find the begining constanant/s and index of first vowel
    let consCluster = "";//is the starting constanant/s
    let firstVowelIndex = 0;//index of first vowel in str
    
    for (let i =0; i < str.length; i++) {
     if (str.charAt(i) != "a" && str.charAt(i) != "e" && str.charAt(i) != "i" && str.charAt(i) != "o" && str.charAt(i) != "u") {
       continue;
     } else {
       consCluster = str.substring(0, i);
       firstVowelIndex = i;
       break;
     }
    }
    return str.substring(firstVowelIndex) + consCluster +  "ay";
  }
  
  translatePigLatin("california");//should return "aliforniacay".
  translatePigLatin("paragraphs");//should return "aragraphspay".
  translatePigLatin("glove");//should return "oveglay".
  translatePigLatin("algorithm");//should return "algorithmway".
  translatePigLatin("eight");//should return "eightway".