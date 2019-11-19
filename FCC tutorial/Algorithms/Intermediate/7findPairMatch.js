function pairElement(str) {
    function getPair(element) {
        switch(element) {
            case "G":
                output.push(["G", "C"]); break;
            case "C":
                output.push(["C", "G"]); break;
            case "A":
                output.push(["A", "T"]); break;
            case "T": 
                output.push(["T", "A"]); 
        }    
    }

    let output = [];
    str.split("").forEach(getPair);
    return output;
}
pairElement("TTGAG");
// should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA");
// should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].