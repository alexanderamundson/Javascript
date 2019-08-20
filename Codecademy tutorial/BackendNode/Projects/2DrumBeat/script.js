// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

  
 const toggleDrum = (drumArrayName, index) => {
   const drums = getDrumArrayByName(drumArrayName);
   if (!drums || index > 15 || index < 0) {
     return;
   }
   drums[index] = !drums[index];
};

const getDrumArrayByName = (name) => {
    switch (name) {
      case 'kicks':
        return kicks;
      case 'snares':
        return snares;
      case 'hiHats':
        return hiHats;
      case 'rideCymbals':
        return rideCymbals;
      default:
        return;
    }
};

const clear = function(arrayName ) {
    let drumArray = getDrumArrayByName(arrayName);
    if (drumArray) {
       drumArray.fill(false);
    }
};

const invert = function(arrayName) {
    let drumArray = getDrumArrayByName(arrayName);
    if (drumArray) {
        for (let i = 0; i < drumArray.length; i++) {
            drumArray[i] = !drumArray[i];
          }
    }
    console.log(drumArray);
};
